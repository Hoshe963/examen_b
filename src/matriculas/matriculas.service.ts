
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matriculas } from './matricula.entity';

@Injectable()
export class MatriculasService {
  constructor(
    @InjectRepository(Matriculas)
    private readonly matriculaRepository: Repository<Matriculas>,
  ) {}

  findAll(): Promise<Matriculas[]> {
    return this.matriculaRepository.find();
  }

  findOne(id: number): Promise<Matriculas> {
    return this.matriculaRepository.findOne({ where: { id } });
  }

  create(matricula: Matriculas): Promise<Matriculas> {
    try {
      console.log('Datos recibidos para creación:', matricula); // Verifica los datos recibidos
      return this.matriculaRepository.save(matricula);
    } catch (error) {
      console.error('Error al crear la matrícula en la base de datos:', error); // Muestra el error específico en la consola
      throw error; // Lanza el error para que el controlador lo capture, si es necesario
    }
  }

  async update(id: number, updateData: Partial<Matriculas>): Promise<Matriculas> {
    await this.matriculaRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.matriculaRepository.delete(id);
  }
}
