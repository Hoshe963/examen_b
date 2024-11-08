import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculasModule } from './matriculas/matriculas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306, 
      username: 'root',
      password: 'Contr@sena04',   
      database: 'examen2', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }),
    MatriculasModule,
  ],
})
export class AppModule {}
