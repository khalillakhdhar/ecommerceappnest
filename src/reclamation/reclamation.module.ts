import { Module } from '@nestjs/common';
import { ReclamationService } from './reclamation.service';
import { ReclamationController } from './reclamation.controller';
import { Reclamation } from './entities/reclamation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reclamation])],

  controllers: [ReclamationController],
  providers: [ReclamationService],
})
export class ReclamationModule {}
