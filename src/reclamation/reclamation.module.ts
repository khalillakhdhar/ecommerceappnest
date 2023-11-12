import { Module } from '@nestjs/common';
import { ReclamationService } from './reclamation.service';
import { ReclamationController } from './reclamation.controller';
import { Reclamation } from './entities/reclamation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reclamation]), ClientModule],

  controllers: [ReclamationController],
  providers: [ReclamationService],
})
export class ReclamationModule {}
