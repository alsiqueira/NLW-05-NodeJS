import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"

interface IUsersCreate {
  email: string;

}

class UsersService {
private usersRepository: Repository<User>

constructor(){
  this.usersRepository = getCustomRepository(UsersRepository)
}
  async create({email}: IUsersCreate){
    

    const userAlreadyExists = await this.usersRepository.findOne({email})
    if(userAlreadyExists){
      return userAlreadyExists
    }

    const users = this.usersRepository.create({email})

    await this.usersRepository.save(users)
    return users
  }
}

export {UsersService}