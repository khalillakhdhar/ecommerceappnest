import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commande } from './entities/commande.entity';

@Injectable()
export class CommandeService {
  constructor(
    @InjectRepository(Commande)
    private ccommandeRepository: Repository<Commande>,
  ) {}

  async create(ccommandeData: Partial<Commande>): Promise<Commande> {
    const ccommande = this.ccommandeRepository.create(ccommandeData);
    return await this.ccommandeRepository.save(ccommande);
  }

  async findAll(): Promise<Commande[]> {
    return await this.ccommandeRepository.find();
  }
  async findOne(id: number) {
    return await this.ccommandeRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, commande: Commande) {
    const ccommande = this.findOne(id);
    if (ccommande !== undefined && ccommande !== null) {
      commande.id = (await ccommande).id;
      return this.ccommandeRepository.save(commande);
    } else return 'ccommande not found';
  }

  async remove(id: number) {
    const ccommande = this.findOne(id);
    if (ccommande !== undefined && ccommande !== null) {
      this.ccommandeRepository.delete((await ccommande).id);
      return 'ccommande deleted';
    } else return 'ccommande not found';
  }
}
