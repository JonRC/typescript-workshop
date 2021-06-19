import { Request, Response } from "express";
import { IQuery, IUser } from "../Models/User";
import { UserService } from "../services/UserServices";

interface P {}
interface B {}
interface Q {}

const userServices = new UserService()




class UserController {

  async listUsers(request: Request<P, {}, B, IQuery>, response: Response) {
    const {} = request.query.
  }
  
}



export { UserController };

