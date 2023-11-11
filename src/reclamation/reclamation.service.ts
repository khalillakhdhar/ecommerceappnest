/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reclamation } from './entities/reclamation.entity';
import { ProduitService } from 'src/produit/produit.service';
import { ClientService } from 'src/client/client.service';

@Injectable()
export class ReclamationService {
  constructor(
    @InjectRepository(Reclamation)
    private reclamationRepository: Repository<Reclamation>,
    private clientService: ClientService,
  ) {}

  async create(reclamationData: Partial<Reclamation>, id: string) {
    const client = this.clientService.findOne(parseInt(id)).then((client) => {
      reclamationData.emetteur = client;
      return this.reclamationRepository.save(reclamationData);
    });
  }

  async findAll(): Promise<Reclamation[]> {
    return await this.reclamationRepository.find();
  }
  async findOne(id: number) {
    return await this.reclamationRepository.findOne({
      where: { id },
    });
  }
  update(id: number, updateReclamationDto: UpdateReclamationDto) {
    return `This action updates a #${id} reclamation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reclamation`;
  }
}
