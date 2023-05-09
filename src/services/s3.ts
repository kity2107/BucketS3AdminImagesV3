import { S3Client, PutObjectCommand, ListObjectsCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import type { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import fs from 'fs';

import config from '../config/config';

const client = new S3Client({
    region: config.AWS.REGION,
    credentials: {
        accessKeyId: config.AWS.KEY,
        secretAccessKey: config.AWS.SECRET_KEY,
    },
});

const uploadToBucket = async (file: any) => {
    const stream = fs.createReadStream(file.tempFilePath);
    const uploadParams = {
        Bucket: config.AWS.BUCKET,
        Key: file.name,
        Body: stream,
    };
    const command = new PutObjectCommand(uploadParams);

    return await client.send(command);
};

const getImages = async () => {
    const command = new ListObjectsCommand({
        Bucket: config.AWS.BUCKET,
    });
    return await client.send(command);
};

const getImage = async (name: string) => {
    const command = new GetObjectCommand({
        Bucket: config.AWS.BUCKET,
        Key: name,
    });
    return await client.send(command);
};
const downloadImage = async (name: string) => {
    const command = new GetObjectCommand({
        Bucket: config.AWS.BUCKET,
        Key: name,
    });
    const { Body } = await client.send(command);
    if (!Body) {
        throw new Error('received empty body from S3');
    }

    await pipeline(Body as Readable, fs.createWriteStream(`./images/${name}`));
};

// imagenes pre-firmadas

const urlImage = async (name: string) => {
    const command = new GetObjectCommand({
        Bucket: config.AWS.BUCKET,
        Key: name,
    });
    //le pasamos el cliente el comand y el tiempo en seg. para q expire la url
    return await getSignedUrl(client, command, { expiresIn: 600 });
};
export default { uploadToBucket, getImages, getImage, downloadImage, urlImage };
