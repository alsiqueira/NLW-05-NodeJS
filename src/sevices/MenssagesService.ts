import { getCustomRepository, Repository } from "typeorm"
import { Menssage } from "../entities/Menssage"
import { MenssagesRepository } from "../repositories/MenssagesRepository"

interface IMenssagesCreate {
 admin_id?: string;
 text: string;
 user_id: string;

}

class MenssagesService {
  private mensssagesRepository: Repository<Menssage>

  constructor(){
    this.mensssagesRepository = getCustomRepository(MenssagesRepository)
  }
 
  async create({admin_id,text,user_id}: IMenssagesCreate){
   

  

    const menssage =  this.mensssagesRepository.create({
      admin_id,
      text,
      user_id
    })

    await this.mensssagesRepository.save(menssage)

    return menssage
  }

  async listByUser(user_id:string){
   

    const list = await this.mensssagesRepository.find(
      {
       where: {user_id}, 
       relations:["user"],
      })
    
    return list
  }
}

export {MenssagesService}