import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // HTTP for OIDC
  app.setGlobalPrefix('api');
  // console.log('protoPath', join(__dirname, '../proto/user_service.proto'))
  // gRPC for 内部服务
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: ['sso.auth.v1'],
      protoPath: [join(__dirname, '../proto/auth_service.proto')],
    },
  })


  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
