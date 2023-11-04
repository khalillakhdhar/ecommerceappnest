import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReclamationService } from './reclamation.service';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';

@Controller('reclamation')
export class ReclamationController {
  constructor(private readonly reclamationService: ReclamationService) {}

  @Post()
  create(@Body() createReclamationDto: CreateReclamationDto) {
    return this.reclamationService.create(createReclamationDto);
  }

  @Get()
  findAll() {
    return this.reclamationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reclamationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReclamationDto: UpdateReclamationDto) {
    return this.reclamationService.update(+id, updateReclamationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reclamationService.remove(+id);
  }
}
