import { follow, unfollow } from "../controllers/follow";
import { Router } from "express";
const followRouter = Router();

followRouter.post("/follow", follow);
followRouter.post("/unfollow", unfollow);

export default followRouter;
