// Libraries
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

// Guards
import { TokenVerificationGuard } from '../../security/guards/token-verification.guard';

// Data transfer objects
import { NewClientDTO } from '../data-transfer-objects/new-client.dto';

// Use cases
import { CreateClientUseCase } from '../use-cases/create-client.use-case';
import { ValidateClientExistenceUseCase } from '../use-cases/validate-client-existence.use-case';

@ApiTags('Client')
@Controller('v1/client')
export class ClientController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly validateClientExistenceUseCase: ValidateClientExistenceUseCase,
  ) {}

  @ApiBearerAuth('access-token')
  @Get('is-an-existing-customer/:user')
  @UseGuards(TokenVerificationGuard)
  isAnExistingCustomer(@Param('user') user: string): boolean {
    return this.validateClientExistenceUseCase.execute(user);
  }

  @Post()
  @ApiOperation({
    summary: 'Create client',
    description: 'descripción Hola Mundo',
  })
  @ApiBody({
    description: 'Descripción del body',
    type: NewClientDTO,
  })
  @ApiResponse({
    status: 201,
    description: 'Crea un usuario 1',
    schema: {
      title: 'Titulo de la respuesta 1',
      example: {
        token: 'ejemplo de token',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Crea un usuario 2',
    schema: {
      title: 'Titulo de la respuesta 2',
      example: {
        message: 'error apito!!!',
        otraCosa: 'Aquí hay otra cosa',
      },
    },
  })
  async create(@Body() dataClient: NewClientDTO): Promise<{ token: string }> {
    return await this.createClientUseCase.execute(dataClient);
  }
}
