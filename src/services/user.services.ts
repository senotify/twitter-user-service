import userRepository from "../repositories/user.repository";
import { IRequestCreateUser, IUser, ILoginUser } from "../types/user.types";
import bcrypt from 'bcryptjs';

const userService = {
  getUserById: async (id: string) => {
    try {
      const user = await userRepository.findById(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  createUser: async (payload: IRequestCreateUser) => {
    try {
      const { fullName, handle, email, password, profilePicture, birthDate } =
        payload;

      const hashedPassword = await bcrypt.hash(password, 13);
      const data: IUser = {
        fullName,
        handle,
        email,
        password: hashedPassword,
        profilePicture,
        birthDate,
        banner: {
          alt: "",
          url: "",
        },
        followers: [],
        following: [],
      };
      const user = await userRepository.create(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  login: async (payload: ILoginUser) => {
    try {
      // const { username, password } =
      //   payload;
      
      // const user = await userRepository.create(data);
      // return user;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userService;
