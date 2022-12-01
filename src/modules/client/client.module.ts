// Libraries
import { Module } from '@nestjs/common';

// Modules
import { CommonModule } from '../../common/common.module';
import { SecurityModule } from '../security/security.module';

// Controllers
import { ClientController } from './controllers/client.controller';

// Services

// Use Cases
import { CreateClientUseCase } from './use-cases/create-client.use-case';
import { ValidateClientExistenceUseCase } from './use-cases/validate-client-existence.use-case';

@Module({
  imports: [CommonModule, SecurityModule],
  controllers: [ClientController],
  providers: [CreateClientUseCase, ValidateClientExistenceUseCase],
})
export class ClientModule {}
