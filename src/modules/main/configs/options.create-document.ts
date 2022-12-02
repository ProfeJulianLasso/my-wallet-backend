import { SwaggerDocumentOptions } from '@nestjs/swagger';
import { ClientEntity } from '../../../common/databases/postgresql/entities/client.entity';
import { AccountEntity } from '../../../common/databases/postgresql/entities/account.entity';
import { ClientModule } from '../../client/client.module';

export const optionsCreateDocument: SwaggerDocumentOptions = {
  include: [ClientModule],
  extraModels: [ClientEntity, AccountEntity],
};
