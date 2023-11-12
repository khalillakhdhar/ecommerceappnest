import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReclamationService } from './reclamation.service';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';

@Controller('reclamation')
export class ReclamationController {
  constructor(private readonly reclamationService: ReclamationService) {}

  @Post(':id')
  create(
    @Body() createReclamationDto: CreateReclamationDto,
    @Param('id') id: string,
  ) {
    return this.reclamationService.create(createReclamationDto, id);
  }

  @Get()
  findAll() {
    return this.reclamationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reclamationService.findOne(+id);
  }
  @Get('/personne/:id')
  findPersonne(@Param('id') id: string) {
    return this.reclamationService.findOneWithEmetteur(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReclamationDto: UpdateReclamationDto,
  ) {
    return this.reclamationService.update(+id, updateReclamationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reclamationService.remove(+id);
  }
}
