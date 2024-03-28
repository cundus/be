import { redisClient } from "../lib/redis";
import prisma from "../db";

export const findSingleUser = async (id?: number) => {
   return "hello";
};

export const getAllUser = async () => {
   let data = await redisClient.get("users");

   if (!data) {
      const dataFromDB = await prisma.user.findMany();
      const stringDataDB = JSON.stringify(dataFromDB);
      data = stringDataDB;
      await redisClient.set("users", stringDataDB);
   }

   return JSON.parse(data);
};
