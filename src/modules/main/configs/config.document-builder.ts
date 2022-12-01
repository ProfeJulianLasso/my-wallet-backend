import { DocumentBuilder } from '@nestjs/swagger';

export const configDocumentBuilder = new DocumentBuilder()
  .setTitle('My Wallet')
  .setDescription('My Wallet API description')
  .setVersion('1.0')
  .addTag(
    'App',
    'Description of the APIs corresponding to the application handling',
  )
  .addTag(
    'Client',
    'Description of the APIs corresponding to the client handling',
  )
  .addTag(
    'Security',
    'Description of the APIs corresponding to the security management in the application.',
  )
  .addTag(
    'Wallet',
    'Description of the APIs corresponding to the wallet management.',
  )
  .build();
