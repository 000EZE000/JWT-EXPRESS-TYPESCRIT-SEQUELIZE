import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

interface Ipayload {
    _id: string
    iat: number
    exp: string
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('auth-token')
        console.log({ token });
        if (!token) return res.status(401).json('Access denied')

        const payload = jwt.verify(token, process.env.SECRET || 'test') as unknown as Ipayload;
        console.log({ payload });


        if (typeof payload === 'string') return res.status(401).json('Access denied1')

        req.userId = payload._id

        next()
    } catch (error: any) {
        console.log(error.message);
        return res.status(401).json('Access denied')
    }

};

export default verifyToken;