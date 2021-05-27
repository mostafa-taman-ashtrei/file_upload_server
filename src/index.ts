import { config } from 'dotenv';
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import initRoutes from './routes/initRoutes';

(async () => {
    config();

    const app = express();
    const port = process.env.PORT || 8080;

    app.use(helmet());
    app.use(express.json());
    app.use(morgan('dev'));

    if (process.env.NODE_ENV === 'production') {
        const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
        app.use(morgan('combined', { stream: accessLogStream }));
    }

    initRoutes(app);

    app.listen(port, () => console.log(`Server is running on port ${port} ...`));
})();
