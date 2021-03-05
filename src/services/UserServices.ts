import { IUser, User } from "../Models/User"
import { isValidObjectId} from 'mongoose'
import mongoose from 'mongoose'



class UserService { 
  create(userData: IUser) {
    const user = new User(userData)
    return user.save()
  }

  getAll() {
    return User
      .find()
      .lean()
  }

  getOne(userId: String) {
    return User.findOne({
      _id: userId
    })
      .lean()
  }
}

export { UserService }