import { EntityRepository, Repository } from "typeorm";
import { Menssage } from "../entities/Menssage";

@EntityRepository(Menssage)
class MenssagesRepository extends Repository<Menssage>{
  
}


export { MenssagesRepository }