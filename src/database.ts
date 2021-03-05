import mongoose, { connect, ConnectionOptions } from 'mongoose'

const uri = "mongodb+srv://workshop:workshop@cluster0.xkmxz.mongodb.net/workshop?retryWrites=true&w=majority"
const options: ConnectionOptions = { useUnifiedTopology: true, useNewUrlParser: true }


async function init() {
  await connect(uri, options)
}

export default {init}
