import { Request, Response } from "express";
import { User } from "../models/User";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export const singIn = async (req: Request, res: Response) => {
    try {

        const { email: emailUser, password } = req.body;

        const user = await User.findOne({ where: { email: emailUser } });

        if (!user) return res.status(400).json('email or password is wrong');

        const correctPassword = await user.validatePassword(password);

        if (!correctPassword) return res.status(400).json('email or password is wrong');

        const token = jwt.sign({ _id: user.id }, process.env.SECRET || 'test', {
            expiresIn: 60 * 60 * 24
        });
        const { name, email } = user;
        res.status(200).header('auth-token', token).json({ email, name });
    } catch (error: any) {
        res.status(500).json(error.message)
    }

};


export const singUp = async (req: Request, res: Response) => {
    try {

        const { name, email, password } = req.body;

        const user = User.build({ name, email, password });

        user.password = await user.encryptPassword(user.password);

        const token = jwt.sign({ _id: user.id }, process.env.SECRET || 'test')

        await user.save();

        res.status(201).header('auth-token', token).json(user);
    } catch (error: any) {
        res.status(404).json({ msg: error.message })
    }

};
export const profile = async (req: Request, res: Response) => {
    const id = req.userId
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] }
    })

    if (!user) return res.status(404).json('No user found')

    res.status(200).send(user);
};
