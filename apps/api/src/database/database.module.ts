import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './Entities/order.entity';
import { UserEntity } from './Entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres:XwUTmWxzGEuvDjICzrxvZhQnrcwRXBLD@switchback.proxy.rlwy.net:20193/railway',
      database: 'railway',
      entities: [
        OrderEntity,
        UserEntity
      ],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}