/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

interface CONFIG {
    APP_ENV: string;
    PORT: number;

    AWS: {
        KEY: string;
        SECRET_KEY: string;
        REGION: string;
        BUCKET: string;
    };
}

const config: CONFIG = {
    APP_ENV: process.env.APP_ENVIROMENT || 'dev',
    PORT: Number(process.env.PORT || 5000),

    AWS: {
        KEY: String(process.env.ACCESS_KEY),
        SECRET_KEY: String(process.env.SECRET_KEY),
        REGION: String(process.env.REGION),
        BUCKET: String(process.env.BUCKET_NAME),
    },
};

export default config;
