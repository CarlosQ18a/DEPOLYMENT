import { Module } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreaturesController } from './creatures.controller';
import { OrmService } from 'src/orm/orm.service';
import { OrmModule } from 'src/orm/orm.module';

@Module({
  controllers: [CreaturesController],
  providers: [CreaturesService],
  imports: [OrmModule]
})
export class CreaturesModule {}
