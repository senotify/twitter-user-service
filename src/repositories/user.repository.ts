import { User } from "./models/user.schema";
import { IUser } from "../types/user.types";
import mongoose from "mongoose";

const userRepository = {
  findById: async (id: string) => {
    try {
      const _id = new mongoose.Types.ObjectId(id);
      return await User.findById(_id);
    } catch (error) {
      console.log(error);
    }
  },

  create: async (data: IUser) => {
    try {
      return await User.create(data);
    } catch (error) {
      console.log(error);
    }
  },
};

export default userRepository;
