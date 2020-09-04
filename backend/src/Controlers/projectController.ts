import { Request, Response } from 'express';

export default class projectController {
    async index(req: Request, res: Response) {
        res.send({ ok: true, id: req.userId })
    }
}