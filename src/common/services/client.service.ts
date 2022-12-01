// Libraries
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

// Entities
import { ClientEntity } from '../databases/postgresql/entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async create(client: ClientEntity): Promise<ClientEntity> {
    return await this.clientRepository.save(client);
  }
}
