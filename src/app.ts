/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/index';
import fileUpload from 'express-fileupload';
// import multer from 'multer';

const app = express();

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
);
app.disable('x-powered-by');
app.use(cors());
// app.use(upload.array(''));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/', router);

export default app;
