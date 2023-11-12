/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reclamation } from './entities/reclamation.entity';
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
  async findOneWithEmetteur(id: number) {
    return await this.reclamationRepository
      .createQueryBuilder('reclamation')
      .leftJoinAndSelect('reclamation.emetteur', 'emetteur')
      .where('reclamation.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<Reclamation[]> {
    //return await this.reclamationRepository.find();
    /*  return await this.reclamationRepository
      .createQueryBuilder('reclamation')
      .leftJoinAndSelect('reclamation.emetteur', 'emetteur')
      .getMany();*/
    return await this.reclamationRepository.find({ relations: ['emetteur'] });
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
