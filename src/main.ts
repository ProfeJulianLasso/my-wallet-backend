// Libraries
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

// Configuration
import { PipeValidator } from './modules/main/configs/pipe-validator.config';
import { configDocumentBuilder } from './modules/main/configs/config.document-builder';
import { optionsCreateDocument } from './modules/main/configs/options.create-document';

// Modules
import { MainModule } from './modules/main/main.module';
import { ValidationPipe } from '@nestjs/common';

const bootstrap = async () => {
  const app = await NestFactory.create(MainModule);
  app.useGlobalPipes(new ValidationPipe(PipeValidator));
  app.setGlobalPrefix('api');

  SwaggerModule.setup(
    'docs/api',
    app,
    SwaggerModule.createDocument(
      app,
      configDocumentBuilder,
      optionsCreateDocument,
    ),
  );

  await app.listen(3000);
};
bootstrap();
