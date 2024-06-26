import { Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { OrmService } from 'src/orm/orm.service';

@Injectable()
export class CreaturesService {
  constructor(private orm: OrmService){}

  create(createCreatureDto: CreateCreatureDto) {
    return 'This action adds a new creature';
  }

  findAll() {
    return this.orm.creature.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} creature`;
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return `This action updates a #${id} creature`;
  }

  remove(id: number) {
    return `This action removes a #${id} creature`;
  }
}
