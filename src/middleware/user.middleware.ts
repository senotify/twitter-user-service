import { NextFunction, Request, Response } from "express";

export const middleWareCheckorigin = async (req: Request, res: Response, next: NextFunction) => {
    if(req.headers.host == 'localhost:8010') {
        return next();
    } else {
        return res.status(403).send('Forbidden');
    }
}