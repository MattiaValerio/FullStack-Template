import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'vdbsrv2016',
      username: 'help',
      password: 'help',
      database: 'DENAP1',
      entities: [],
      synchronize: true,
      options:{
        instanceName:'sql2022',
        encrypt:false,
        trustServerCertificate:true
      }
    }),
  ],
})
export class DatabaseModule {}