// Libraries
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Configuration Data Base
import { PostgreSQLConfig } from './databases/postgresql/postgresql.config';

// Entities
import { ClientEntity } from './databases/postgresql/entities/client.entity';

// Services
import { AppService } from './services/app.service';
import { TokenService } from './services/token.service';
import { ClientService } from './services/client.service';
import { AccountService } from './services/account.service';
import { MovementService } from './services/movement.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: PostgreSQLConfig }),
    TypeOrmModule.forFeature([ClientEntity]),
  ],
  providers: [
    PostgreSQLConfig,
    AccountService,
    AppService,
    ClientService,
    MovementService,
    TokenService,
  ],
  exports: [
    TypeOrmModule,
    PostgreSQLConfig,
    AccountService,
    AppService,
    ClientService,
    MovementService,
    TokenService,
  ],
})
export class CommonModule {}
