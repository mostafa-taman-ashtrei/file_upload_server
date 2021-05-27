import { Request, Response } from 'express';

export const singleUpload = (req: Request, res: Response) => {
    try {
        const { file } = req;
        return res.json({ msg: 'File uploaded ...', file });
    } catch (e) {
        throw new Error(e);
    }
};

export const multipleUpload = (req: Request, res: Response) => {
    try {
        const { files } = req;
        return res.json({ msg: 'Files uploaded ...', files });
    } catch (e) {
        throw new Error(e);
    }
};
