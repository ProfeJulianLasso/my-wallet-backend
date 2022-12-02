// Libraries
import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

// Entities
import { AppEntity } from './app.entity';
import { TokenEntity } from './token.entity';
import { AccountEntity } from './account.entity';
import { ApiProperty } from '@nestjs/swagger';

@Index('client_cli_email_Idx', ['email'], { unique: true })
@Index('pkclient', ['id'], { unique: true })
@Index('client_cli_phone_Idx', ['phone'], { unique: true })
@Entity('client', { schema: 'public' })
export class ClientEntity {
  @ApiProperty({
    example: '123-123123-123-123123',
    description: 'Identificación del cliente',
  })
  @PrimaryGeneratedColumn('uuid', { name: 'cli_id' })
  id: string = uuid();

  @Column('character varying', { name: 'cli_full_name', length: 500 })
  fullName: string;

  @Column('character varying', { name: 'cli_email', length: 500 })
  email: string;

  @Column('character varying', { name: 'cli_phone', length: 500 })
  phone: string;

  @Column('character varying', { name: 'cli_photo', length: 500 })
  photo: string;

  @Column('integer', { name: 'cli_state', default: () => '1' })
  state: number;

  @Column('timestamp without time zone', {
    name: 'cli_created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp without time zone', {
    name: 'cli_updated_at',
    nullable: true,
  })
  updatedAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'cli_deleted_at',
    nullable: true,
  })
  deletedAt: Date | null;

  @OneToOne(() => AccountEntity, (account) => account.client, {
    cascade: ['insert'],
  })
  account: AccountEntity;

  @OneToOne(() => AppEntity, (app) => app.client, { cascade: ['insert'] })
  app: AppEntity;

  @OneToMany(() => TokenEntity, (token) => token.client, {
    cascade: ['insert'],
  })
  tokens: TokenEntity[];
}
