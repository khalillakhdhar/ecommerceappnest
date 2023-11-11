import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produit } from './entities/produit.entity';

@Injectable()
export class ProduitService {
  constructor(
    @InjectRepository(Produit)
    private produitRepository: Repository<Produit>,
  ) {}

  async create(produitData: Partial<Produit>): Promise<Produit> {
    const produit = this.produitRepository.create(produitData);
    return await this.produitRepository.save(produit);
  }

  async findAll(): Promise<Produit[]> {
    return await this.produitRepository.find();
  }
  async findOne(id: number) {
    return await this.produitRepository.findOne({
      where: { id },
    });
  }
  async update(id: number, produit: Produit) {
    const cproduit = this.findOne(id);
    if (cproduit !== undefined && cproduit !== null) {
      produit.id = (await cproduit).id;
      return this.produitRepository.save(produit);
    } else return 'cproduit not found';
  }

  async remove(id: number) {
    const cproduit = this.findOne(id);
    if (cproduit !== undefined && cproduit !== null) {
      this.produitRepository.delete((await cproduit).id);
      return 'cproduit deleted';
    } else return 'cproduit not found';
  }
}
