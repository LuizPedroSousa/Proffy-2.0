import { Request, Response } from 'express';
import Users, { IUser } from './../Model/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import authConfig from '../Configs/auth.json';
function generateToken(params: object) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}
export default class UsersController {
    async index(req: Request, res: Response) {
        res.send()
    }

    async auth(req: Request, res: Response) {
        const {
            email,
            password
        } = req.body

        const user = await Users.findOne({ email }).select(`+password`);

        if (!user) {
            res.status(400).json({
                error: 'Usuário não encontrado',
            });
        }

        if (!await bcrypt.compare(password, user.password)) {
            res.status(400).json({
                error: 'Senha invalida'
            })
        }

        user.password = undefined;
        res.send({
            user,
            token: generateToken({ id: user?.id }),
        });
    }

    async create(req: Request, res: Response) {
        const {
            name,
            surname,
            email,
            password,
        } = req.body;

        const users = new Users({
            name,
            surname,
            email,
            password,
        });

        try {
            if (await Users.findOne({ email })) {
                return res.status(400).json({
                    error: 'Email existente'
                });
            } else {
                await users.save();
                console.log('Dados enviados com sucesso');
                users.password = undefined;
                return res.status(201).send({
                    users,
                    token: generateToken({ id: users.id }),
                });
            }
        } catch (err) {
            return res.status(400).json({
                error: `Falha ao enviar dados de usuário: ${err}`
            });
        }
    }
}