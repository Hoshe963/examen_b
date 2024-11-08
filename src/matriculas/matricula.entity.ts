import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Matriculas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  curso: string;

  @Column()
  estudiante: string;

  @Column()
  numeroHoras: number;

  @Column()
  numeroCreditos: number;

  @Column({ default: true })
  activo: boolean;
}
