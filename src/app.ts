import database from './database'
import { server } from './server'

const app = server.start()

database.init()

export { app }
