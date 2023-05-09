import { Request, Response, NextFunction } from 'express';

import { error } from '../network/response';

const verifyFile = (req: Request, res: Response, next: NextFunction) => {
    if (!req.files || Object.keys(req.files).length === 0) error(req, res, 'No files were uploaded', 400, '');
    next();
    return false;
};

export default verifyFile;
