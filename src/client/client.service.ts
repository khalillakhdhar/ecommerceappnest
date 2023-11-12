/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { validate } from 'class-validator';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async create(clientData: Partial<CreateClientDto>): Promise<Client> {
    const errors = await validate(clientData);
    if(errors.length > 0) {
      return Promise.reject(errors);
    }
    else
    {
    const client = this.clientRepository.create(clientData);
    return await this.clientRepository.save(client);
    }
  }

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }
  async findCommandes(): Promise<Client[]> {
    return await this.clientRepository.find({ relations: ['commandes'] });
  }
  async findReclamation(): Promise<Client[]> {
    return await this.clientRepository.find({ relations: ['reclamations'] });
  }
  async findOne(id: number) {
    return await this.clientRepository.findOne({
      where: {id,},}); 
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client =this.findOne(id);
   if(client!==undefined && client!== null)
   {
    updateClientDto.id=(await client).id;
  return  this.clientRepository.save(updateClientDto);
   }
   else return  "client not found"
  }

  async remove(id: number) {
    const client =this.findOne(id);
    if(client!==undefined && client!== null)
    {
     this.clientRepository.delete((await client).id)
     return "client deleted";
    }
    else return "client not found"; 
  }
}
