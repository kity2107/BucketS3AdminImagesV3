import { Router } from 'express';


import images from './images.router';


const router = Router();


router.use(images);


export default router;
