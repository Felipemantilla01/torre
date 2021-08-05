import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
const logger = new Logger('Main');

async function bootstrap() {
  logger.debug(process.env.ENV_DESCRIPTION, 'ENV_DESCRIPTION');
  logger.debug(process.env.MONGODB_HOST, 'MONGODB_HOST');
  logger.debug(process.env.PORT, 'PORT');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
