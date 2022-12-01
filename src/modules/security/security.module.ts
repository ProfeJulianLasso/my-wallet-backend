// Libraries
import { Module } from '@nestjs/common';

// Controllers
import { SecurityController } from './controllers/security.controller';

// Services
import { SecurityService } from './services/security.service';

// Guards
import { TokenVerificationGuard } from './guards/token-verification.guard';

@Module({
  controllers: [SecurityController],
  providers: [SecurityService, TokenVerificationGuard],
  exports: [TokenVerificationGuard],
})
export class SecurityModule {}
