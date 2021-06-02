import { Request, Response } from 'express';

export const multipleUpload = (req: Request, res: Response) => {
    try {
        const { files } = req;
        return res.json({ msg: 'Files uploaded ...', files });
    } catch (e) {
        throw new Error(e);
    }
};
