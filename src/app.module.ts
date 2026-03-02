import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TenantModule } from './modules/tenant/tenant.module';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [AuthModule, UserModule, TenantModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
