// Libraries
import { Injectable } from '@nestjs/common';

// Services
import { ClientService } from '../../../common/services/client.service';

// Data transfer objects
import { NewClientDTO } from '../data-transfer-objects/new-client.dto';

// Entities
import { AppEntity } from '../../../common/databases/postgresql/entities/app.entity';
import { TokenEntity } from '../../../common/databases/postgresql/entities/token.entity';
import { ClientEntity } from '../../../common/databases/postgresql/entities/client.entity';
import { AccountEntity } from '../../../common/databases/postgresql/entities/account.entity';

@Injectable()
export class CreateClientUseCase {
  constructor(private readonly clientService: ClientService) {}

  async execute(dataClient: NewClientDTO): Promise<{ token: string }> {
    const client = new ClientEntity();
    client.fullName = dataClient.fullName;
    client.email = dataClient.email;
    client.phone = dataClient.phone;
    client.photo = dataClient.photo;
    client.app = new AppEntity();
    client.account = new AccountEntity();
    client.tokens = new Array<TokenEntity>();
    const token = new TokenEntity();
    token.token = dataClient.token;
    token.expirationDate = dataClient.tokenExpirationDate;
    client.tokens.push(token);
    await this.clientService.create(client);
    return { token: dataClient.token };
  }
}
