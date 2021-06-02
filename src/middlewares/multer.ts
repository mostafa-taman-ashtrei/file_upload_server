import multer from 'multer';
import fs from 'fs';
import { v4 } from 'uuid';

const uploadDir = 'uploads';

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storageEngine = multer.diskStorage({
    destination: (_, __, cb) => cb(null, uploadDir),
    filename: (_, file, cb) => cb(null, `${v4()}-${file.originalname}`),
});

const uploadEngine = multer({ storage: storageEngine });
export default uploadEngine;
