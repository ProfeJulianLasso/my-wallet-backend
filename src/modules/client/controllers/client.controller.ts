// Libraries
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

// Guards
import { TokenVerificationGuard } from '../../security/guards/token-verification.guard';

// Data transfer objects
import { NewClientDTO } from '../data-transfer-objects/new-client.dto';

// Use cases
import { CreateClientUseCase } from '../use-cases/create-client.use-case';
import { ValidateClientExistenceUseCase } from '../use-cases/validate-client-existence.use-case';

@Controller('v1/client')
export class ClientController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly validateClientExistenceUseCase: ValidateClientExistenceUseCase,
  ) {}

  @Get('is-an-existing-customer/:user')
  @UseGuards(TokenVerificationGuard)
  isAnExistingCustomer(@Param('user') user: string): boolean {
    return this.validateClientExistenceUseCase.execute(user);
  }

  @Post()
  async create(@Body() dataClient: NewClientDTO): Promise<{ token: string }> {
    return this.createClientUseCase.execute(dataClient);
  }
}
