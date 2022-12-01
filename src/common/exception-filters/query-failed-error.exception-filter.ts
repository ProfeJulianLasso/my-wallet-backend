import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedErrorExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let message = '';
    let statusCode = HttpStatus.CONFLICT;
    let error = '';

    switch (exception.driverError.code) {
      case '23505':
        if (exception.driverError.constraint === 'client_cli_email_Idx') {
          message = 'Email is already registered';
        } else if (
          exception.driverError.constraint === 'client_cli_phone_Idx'
        ) {
          message = 'The telephone number is already registered';
        }
        statusCode = HttpStatus.CONFLICT;
        error = `Code: ${exception.driverError.code} - ${exception.driverError.detail} `;
        break;
      default:
        message =
          'We have problems creating a client. Code: ' +
          exception.driverError.code +
          '. ' +
          exception.driverError.detail;
        statusCode = HttpStatus.CONFLICT;
    }

    response.status(statusCode).json({ statusCode, message, error });
  }
}
