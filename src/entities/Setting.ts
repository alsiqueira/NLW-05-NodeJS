import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid} from "uuid"


@Entity('Setting')
class Setting {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }

}

export { Setting }