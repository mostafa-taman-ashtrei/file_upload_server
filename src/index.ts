import express from 'express';
import { config } from 'dotenv';

(async () => {
    config();

    const app = express();
    const port = process.env.PORT || 8080;

    app.get('/', (_, res) => res.json({ msg: 'hello world!' }));
    app.listen(port, () => console.log(`Server is running on port ${port} ...`));
})();
