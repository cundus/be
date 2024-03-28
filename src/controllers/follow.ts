import { Request, Response } from "express";
import {
   follow as followService,
   unfollow as unfollowService,
} from "../services/FollowServices";

export const follow = async (req: Request, res: Response) => {
   try {
      const createdFollow = await followService(req.body.from, req.body.to);

      return res.json({
         message: "Following success",
         data: createdFollow,
      });
   } catch (error: any) {
      console.log(error);
      return res.status(500).json({
         message: "Something went wrong",
         error: error.message,
      });
   }
};

export const unfollow = async (req: Request, res: Response) => {
   try {
      await unfollowService(req.body.from, req.body.to);
      return res.json({
         message: "Unfollowing success",
      });
   } catch (error: any) {
      console.log(error);
      return res.status(500).json({
         message: "Something went wrong",
         error: error.message,
      });
   }
};
