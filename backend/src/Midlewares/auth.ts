import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../Configs/auth.json';
export default (req: Request, res: Response, next: NextFunction) => {
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

    jwt.verify(token, authConfig.secret, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({
                error: 'Invalid Token'
            });
        }

        req.userId = decoded.id;
        return next();
    });
}