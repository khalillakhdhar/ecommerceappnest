import { Injectable } from '@nestjs/common';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';

@Injectable()
export class ReclamationService {
  create(createReclamationDto: CreateReclamationDto) {
    return 'This action adds a new reclamation';
  }

  findAll() {
    return `This action returns all reclamation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reclamation`;
  }

  update(id: number, updateReclamationDto: UpdateReclamationDto) {
    return `This action updates a #${id} reclamation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reclamation`;
  }
}
