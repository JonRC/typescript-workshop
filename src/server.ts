import express from 'express'
import 'express-async-errors'

import { errorHandler } from './errors/errorHandler'

import { router } from './routes'

class Server {
  private port = process.env.PORT ?? 3000
  private app

  constructor() {
    const app = express()

    app.use(express.json())

    app.use(router)

    app.use(errorHandler)

    this.app = app
  }

  start() {
    this.app.listen(this.port, () =>  console.log("Server ON"))
    return this.app
  }
}

const server = new Server()

export { server }