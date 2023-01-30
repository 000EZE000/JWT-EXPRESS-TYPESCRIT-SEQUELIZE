import { Router, Request, Response } from "express";
import path from "path";


const routerHome = Router();

routerHome.get('/', (req: Request, res: Response) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'))
});


export default routerHome;