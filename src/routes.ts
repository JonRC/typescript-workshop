import { Router } from 'express'
import { UserController } from './controllers/User'

const router = Router()

const userController = new UserController()

router.post('/users', userController.create)
router.get('/users', userController.list)
router.get('/users/:userId', userController.getOne)

export { router }