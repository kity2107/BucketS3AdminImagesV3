import { Router } from 'express';

import image from '../controllers/images.controller';
import verifyFile from '../middleware/verifyFile';

const router = Router();

router.post('/image', verifyFile, image.uploadImage);
router.get('/listimages', image.listImages);

router.get('/image/:fileName', image.nameImage);
router.get('/downloadimage/:fileName', image.dowloadImageName);

// frontend
router.get('/imageurl/:fileName', image.downloadImageUrl);
export default router;
