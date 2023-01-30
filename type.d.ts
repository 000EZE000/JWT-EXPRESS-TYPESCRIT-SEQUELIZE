
declare global {
    namespace Express {
        export interface Request {
            userId: string;
        }
    }
}
import { Request } from "express"
export interface IUser {
    id: number
    name: string
    email: string
    password: string
    // encryptPassword(): string
    // validatePassword(): string
};


export type newUser = Omit<IUser, 'id'> 