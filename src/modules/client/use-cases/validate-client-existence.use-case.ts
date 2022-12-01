// Libraries
import { Injectable } from '@nestjs/common';

// Services
import { ClientService } from '../../../common/services/client.service';

// Entities

@Injectable()
export class ValidateClientExistenceUseCase {
  constructor(private readonly clientService: ClientService) {}

  execute(user: string): boolean {
    console.log('user: ', user);
    return false;
  }
}
