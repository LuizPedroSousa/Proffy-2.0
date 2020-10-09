import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface RequestProps extends Request {
    userId: string;
}
export default (req: RequestProps, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: 'No token provider'
        });
    }

    const parts = authHeader.split(' ');

    if (parts.length < 2) {
        return res.status(401).json({
            error: 'Token error'
        });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({
            error: 'Token malformatted'
        });
    }

    jwt.verify(token, JSON.stringify(process.env.SECRET_KEY), (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({
                error: 'Invalid Token'
            });
        }

        req.userId = decoded.id;
        return next();
    });
}