import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CheckIfEmailIsAvailableDto } from './dto/checkIfEmailIsAvailable.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('validate-email')
  checkIfEmailIsValid(
    @Body() checkIfEmailIsValidDto: CheckIfEmailIsAvailableDto,
  ): Promise<boolean> {
    return this.authService.checkIfEmailIsAvailable(checkIfEmailIsValidDto);
  }
}
