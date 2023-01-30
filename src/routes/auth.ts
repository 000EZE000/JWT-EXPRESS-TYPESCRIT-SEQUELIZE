import { Router } from "express";
import { singIn, singUp, profile } from "../controllers/auth.controller";
import verifyToken from "../lib/verifyToken";

const router = Router();

router.post('/singup', singUp);
router.post('/singin', singIn);
router.get('/profile', verifyToken, profile);

export default router;