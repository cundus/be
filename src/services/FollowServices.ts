import prisma from "../db";

export const follow = async (from: number, to: number) => {
   const createdFollow = await prisma.follows.create({
      data: {
         followedById: from,
         followingId: to,
      },
   });

   return createdFollow;
};

export const unfollow = async (from: number, to: number) => {
   return await prisma.follows.delete({
      where: {
         followingId_followedById: {
            followingId: to,
            followedById: from,
         },
      },
   });
};
