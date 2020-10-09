import jwt from 'jsonwebtoken';
export default function generateToken(params: object) {
    return jwt.sign(params, JSON.stringify(process.env.SECRET_KEY), {
        expiresIn: 86400,
    });
}