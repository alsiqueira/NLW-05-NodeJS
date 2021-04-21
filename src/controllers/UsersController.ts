import { Request, Response } from 'express'
import { UsersService } from '../sevices/UsersService'

class UsersController {

 async create( request: Request, response: Response){
  const { email } = request.body

  const usersService = new UsersService()

  try{
    const users = await usersService.create({email})
  
    return response.json(users)

  }catch(err){
    return response.status(404).json({
      message: err.message
    })
  }
 }
}


export { UsersController }