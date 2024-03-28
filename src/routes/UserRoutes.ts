import { Router } from "express";
import { getUser, getUsers } from "../controllers/user";

const userRouter = Router();

userRouter.get("/all", getUsers);

export default userRouter;
