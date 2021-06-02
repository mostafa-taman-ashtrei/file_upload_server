import { Router, Express } from 'express';
import { multipleUpload } from '../controllers/uploadController';
import uploadEngine from '../middlewares/multer';

const router = Router();

const initRoutes = (app: Express) => {
    router.post('/upload/multiple', uploadEngine.array('files'), multipleUpload);
    return app.use(router);
};

export default initRoutes;
