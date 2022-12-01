import { NewAppSetup } from './new-app-setup.dto';
import { NewAccountSetup } from './new-account-setup.dto';
import { RegisterToken } from './register-token.dto';
// Libraries
import {
  IsDateString,
  isEmail,
  IsEmail,
  isNumberString,
  IsNumberString,
  IsString,
  isURL,
  IsUrl,
  Length,
} from 'class-validator';

export class NewClientDTO {
  @IsString({ message: 'Data is not a valid character string' })
  @Length(5, 500, {
    message:
      'The minimum length of the full name is 5 characters and maximum 500 characters.',
  })
  fullName: string;

  @IsEmail(isEmail, { message: 'The data is not a valid email' })
  email: string;

  @IsNumberString(isNumberString, {
    message: 'Data is not a valid phone number',
  })
  @Length(10, 10, { message: 'Data is not a valid phone number' })
  phone: string;

  @IsUrl(isURL, { message: 'Data is not a valid URL' })
  photo: string;

  @IsString()
  token: string;

  @IsDateString()
  tokenExpirationDate: Date;

  app: NewAppSetup;
  account: NewAccountSetup;
  tokens: RegisterToken[];
}
