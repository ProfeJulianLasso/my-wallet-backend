// Libraries
import {
  isEmail,
  IsEmail,
  isNumberString,
  IsNumberString,
  IsString,
  isURL,
  IsUrl,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewClientDTO {
  @ApiProperty({
    example: 'Julian Lasso',
    description: 'Nombre completo del cliente',
  })
  @IsString({ message: 'Data is not a valid character string' })
  @Length(5, 500, {
    message:
      'The minimum length of the full name is 5 characters and maximum 500 characters.',
  })
  fullName: string;

  @ApiProperty({
    example: 'julian.lasso@sofka.com.co',
    description: 'Correo del cliente',
  })
  @IsEmail(isEmail, { message: 'The data is not a valid email' })
  email: string;

  @ApiProperty({
    example: '1234567890',
    description: 'Número de teléfono del cliente',
  })
  @IsNumberString(isNumberString, {
    message: 'Data is not a valid phone number',
  })
  @Length(10, 10, { message: 'Data is not a valid phone number' })
  phone: string;

  @ApiProperty({
    example:
      'https://s.gravatar.com/avatar/875605e74d1bad33faa12f1e7ae1b155?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fju.png',
    description: 'URL de la foto del cliente',
  })
  @IsUrl(isURL, { message: 'Data is not a valid URL' })
  photo: string;

  // @IsString()
  // token: string;

  // @IsDateString()
  // tokenExpirationDate: Date;

  // app: NewAppSetup;
  // account: NewAccountSetup;
  // tokens: RegisterToken[];
}
