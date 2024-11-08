
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';
import { Matriculas } from './matricula.entity';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}

  @Get()
  findAll(): Promise<Matriculas[]> {
    return this.matriculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Matriculas> {
    return this.matriculasService.findOne(+id);
  }

  @Post()
async create(@Body() matricula: Matriculas): Promise<Matriculas> {
  try {
    console.log('Datos recibidos para creación:', matricula); 
    return await this.matriculasService.create(matricula);
  } catch (error) {
    console.error('Error al crear la matrícula:', error); 
    throw error; 
  }
}


  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Matriculas>): Promise<Matriculas> {
    return this.matriculasService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.matriculasService.remove(+id);
  }
}
