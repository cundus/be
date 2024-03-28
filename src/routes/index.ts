import { Router } from "express";
import userRouter from "./UserRoutes";
import followRouter from "./FollowRoutes";
const router = Router();

router.use("/user", userRouter);
router.use("/", followRouter);

export default router;
