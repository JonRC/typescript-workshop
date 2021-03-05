import { Request, Response } from "express";
import { User } from "../Models/User";
import { UserService } from "../services/UserServices";
import { userSchema } from '../validations/user';

const userServices = new UserService()

class UserController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      birth,
      address
    } = request.body

    await userSchema.validate({
      name,
      email,
      birth,
      address
    }, {
      abortEarly: false
    })

    const newUser = await userServices.create({
      birth,
      email,
      name,
      address
    })


    response.status(201).json(newUser)
  }

  async list(request: Request, response: Response) {
    const users = await userServices.getAll()
    response.json(users)
  }

  async getOne(request: Request<{ userId: String }>, response: Response) {
    const { userId } = request.params

    const user = await userServices.getOne(userId)

    response.json(user)
  }
}

export { UserController };
