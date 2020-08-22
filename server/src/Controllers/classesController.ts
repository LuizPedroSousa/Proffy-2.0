import Classes from './../Models/classes';
import { Request, Response } from 'express';
import convertHoursToMinutes from './../../Utiles/convertHoursToMinutes';

interface scheduleItem {
    week_day: number,
    from: string,
    to: string,
}

export default class classController {
    async index(req: Request, res: Response) {
        try {
            const classes = await Classes.find(req.body).sort({ _id: 'desc' });
            return res.send({ classes });
        } catch (e) {
            return res.status(400).send({ failed: `failed to find all teachers` });
        }
    }

    async find(req: Request, res: Response) {
        const filters = req.query;
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        if (!filters.subject) {
            return res.status(400).send({ failed: 'failed to find teachers' })
        } else {
            try {
                const classes = await Classes.find({subject});
                return res.send({ classes });
            } catch (e) {
                return res.status(400).send({ failed: `error to find teacher: ${e}` });
            }
        }
    }

    async create(req: Request, res: Response) {
        const {
            subject,
            price,
            name,
            avatar,
            whatsapp,
            bio,

        } = req.body
        const newClass = new Classes({
            subject, 
            price,
            name,
            avatar,
            whatsapp,
            bio,
        });
        try {
            await newClass.save();
            return res.send({ newClass });
        } catch (e) {
            return res.status(400).send({ failed: `Failed to create teacher: ${e}` });
        }
    }
}