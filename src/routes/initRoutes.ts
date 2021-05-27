import { Router, Express } from 'express';
import { multipleUpload, singleUpload } from '../controllers/uploadController';
import uploadEngine from '../middlewares/multer';

const router = Router();

const initRoutes = (app: Express) => {
    router.post('/upload/single', uploadEngine.single('file'), singleUpload);
    router.post('/upload/multiple', uploadEngine.array('files'), multipleUpload);
    return app.use(router);
};

export default initRoutes;
