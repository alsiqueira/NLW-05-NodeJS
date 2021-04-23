import { Router } from "express"
import { MenssagesController } from "./controllers/MenssagesController"
import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController"

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()
const menssagesController = new MenssagesController()

routes.post('/settings', settingsController.create)
routes.get('/settings/:username', settingsController.findByUsername)
routes.put('/settings/:username', settingsController.update)

routes.post('/users', usersController.create)

routes.post('/menssages', menssagesController.create)
routes.get('/menssages/:id', menssagesController.showByUser)

export { routes }