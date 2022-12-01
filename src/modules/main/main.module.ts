// Libraries
import { join } from 'path';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

// Exception Filters
import { QueryFailedErrorExceptionFilter } from '../../common/exception-filters/query-failed-error.exception-filter';

// Modules
import { AppModule } from '../app/app.module';
import { ClientModule } from '../client/client.module';
import { WalletModule } from '../wallet/wallet.module';
import { SecurityModule } from '../security/security.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
      ),
      isGlobal: true,
    }),
    AppModule,
    ClientModule,
    SecurityModule,
    WalletModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: QueryFailedErrorExceptionFilter,
    },
  ],
})
export class MainModule {}
