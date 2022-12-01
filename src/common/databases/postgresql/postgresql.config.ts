// Libraries
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

// Entities
import { AppEntity } from './entities/app.entity';
import { TokenEntity } from './entities/token.entity';
import { ClientEntity } from './entities/client.entity';
import { AccountEntity } from './entities/account.entity';
import { MovementEntity } from './entities/movement.entity';

@Injectable()
export class PostgreSQLConfig implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('SQL_HOST'),
      port: this.configService.get<number>('SQL_PORT'),
      username: this.configService.get<string>('SQL_USERNAME'),
      password: this.configService.get<string>('SQL_PASSWORD'),
      database: this.configService.get<string>('SQL_DATABASE'),
      entities: [
        AccountEntity,
        AppEntity,
        ClientEntity,
        MovementEntity,
        TokenEntity,
      ],
    };
  }
}
