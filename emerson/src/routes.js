import {Router} from 'express'
import UserController from './controllers/usersControllers'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes 