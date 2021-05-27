import { config } from 'dotenv';
import express from 'express';
import multer from 'multer';
import fs from 'fs';

(async () => {
    config();

    const app = express();
    const port = process.env.PORT || 8080;

    const uploadDir = 'uploads';

    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

    const storageEngine = multer.diskStorage({
        destination: (_, __, cb) => cb(null, uploadDir),
        filename: (_, file, cb) => cb(null, `${Date.now()}--${file.originalname}`),
    });

    const uploadEngine = multer({ storage: storageEngine });

    app.get('/', (_, res) => res.json({ msg: 'hello world!' }));

    app.post('/upload', uploadEngine.single('image'), (req, res) => {
        try {
            const { file } = req;
            console.log(file);
            res.json({ file });
        } catch (e) {
            res.json({ e });
            throw new Error(e);
        }
    });

    app.listen(port, () => console.log(`Server is running on port ${port} ...`));
})();
