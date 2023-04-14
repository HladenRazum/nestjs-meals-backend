import { IsEmail } from 'class-validator';

export class CheckIfEmailIsAvailableDto {
  @IsEmail()
  readonly email: string;
}
