import { Request, Response } from 'express';
import { success, error } from '../network/response';

import s3 from '../services/s3';

const uploadImage = async (req: Request, res: Response) => {
    try {
        const result = await s3.uploadToBucket(req?.files?.file);
        success(req, res, result, 200);
    } catch (err: any) {
        console.log(err.detail);
        error(req, res, `Unexpected error ${err.detail}`, 500, err);
    }
};

const listImages = async (req: Request, res: Response) => {
    try {
        const result = await s3.getImages();
        success(req, res, result, 200);
    } catch (err: any) {
        console.log(err.detail);
        error(req, res, `Unexpected error ${err.detail}`, 500, err);
    }
};

const nameImage = async (req: Request, res: Response) => {
    try {
        const data = await s3.getImage(req.params.fileName);
        const result = data.$metadata;
        success(req, res, result, 200);
    } catch (err: any) {
        console.log(err.detail);
        error(req, res, `Unexpected error ${err.detail}`, 500, err);
    }
};
const dowloadImageName = async (req: Request, res: Response) => {
    try {
        await s3.downloadImage(req.params.fileName);
        const result = { message: 'Archivo descargado' };
        success(req, res, result, 200);
    } catch (err: any) {
        console.log(err.detail);

        error(req, res, `Unexpected error ${err.detail}`, 500, err);
    }
};
const downloadImageUrl = async (req: Request, res: Response) => {
    try {
        const resp = await s3.urlImage(req.params.fileName);
        const result = { url: resp };
        success(req, res, result, 200);
    } catch (err: any) {
        console.log(err.detail);

        error(req, res, `Unexpected error ${err.detail}`, 500, err);
    }
};
export default { uploadImage, listImages, nameImage, dowloadImageName, downloadImageUrl };
