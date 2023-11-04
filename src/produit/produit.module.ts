import { Module } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { Produit } from './entities/produit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Produit])],

  controllers: [ProduitController],
  providers: [ProduitService],
})
export class ProduitModule {}
