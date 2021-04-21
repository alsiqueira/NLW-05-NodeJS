import { Request, Response } from 'express'
import { MenssagesService } from '../sevices/MenssagesService'

class MenssagesController {

 async create( request: Request, response: Response){
  const { admin_id, text, user_id, } = request.body

  const menssegesService = new MenssagesService()

  
    const messages = await menssegesService.create({admin_id, text, user_id})
  
    return response.json(messages)
 
 }
 async showByUser( request: Request, response: Response){
  const { id } = request.params

  const menssegesService = new MenssagesService()

  const list = await menssegesService.listByUser(id)

  return response.json(list)
  }

}


export { MenssagesController }