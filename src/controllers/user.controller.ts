import { Request, Response } from "express";
import userService from "../services/user.services";
import { IRequestCreateUser } from "../types/user.types";

const userController = {
  handleGetUserById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  handleRegister: async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const payloadUser: IRequestCreateUser = payload 
        const user = await userService.createUser(payloadUser);
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json({ error });
      }
  },
  handleLogin: async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const payloadUser: IRequestCreateUser = payload 
        const user = await userService.login(payloadUser);
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json({ error });
      }
  }
};

export default userController;
