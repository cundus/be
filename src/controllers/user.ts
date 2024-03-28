import { findSingleUser, getAllUser } from "../services/UserServices";

export const getUser = async (req: any, res: any) => {
   try {
      const data = await findSingleUser(1);

      return res.json({
         data,
      });
   } catch (error) {
      return res.json({
         message: error,
      });
   }
};

export const getUsers = async (req: any, res: any) => {
   try {
      const data = await getAllUser();

      return res.json({
         data,
      });
   } catch (error) {
      return res.json({
         message: error,
      });
   }
};
