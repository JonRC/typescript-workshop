import { Document, model, Schema, SchemaOptions } from 'mongoose';

interface IUser {
  name?: string
  email: string
  birth: Date
  address?: {
    country: String,
    state: String,
    city: String
  }
}

interface IUserDoc extends Document, IUser {}

const options: SchemaOptions = {
  timestamps: true
}

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, },
  birth: Date,
  address: {  
    country: String,
    state: String,
    city: String
  }
}, options)

const User = model<IUserDoc>('users', userSchema)

export { User, IUser }