// Libraries
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

// Entities
import { ClientEntity } from './client.entity';

@Index('token_cli_id_Idx', ['clientId'], {})
@Index('pktoken', ['id'], { unique: true })
@Entity('token', { schema: 'public' })
export class TokenEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'tok_id' })
  id: string = uuid();

  @Column('uuid', { name: 'cli_id' })
  clientId: string;

  @Column('character varying', { name: 'tok_token', length: 500 })
  token: string;

  @Column('timestamp without time zone', { name: 'tok_fecha_expiracion' })
  expirationDate: Date;

  @ManyToOne(() => ClientEntity, (client) => client.tokens, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'cli_id', referencedColumnName: 'id' }])
  client: ClientEntity;
}
