import { Request, Response } from 'express';



export const success = (_req: Request, res: Response, message: any, status: number) => {
    

    res.status(status).send({ error: '', body: message });
    return true;
};

export const error = (_req: Request, res: Response, message: any, status: number, details: any) => {

    console.error(details);
    res.status(status).send({ error: message, body: '' });
    return false;
};
