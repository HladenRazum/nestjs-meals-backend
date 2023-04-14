import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { CheckIfEmailIsAvailableDto } from './dto/checkIfEmailIsAvailable.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async checkIfEmailIsAvailable(
    checkIfEmailIsValidDto: CheckIfEmailIsAvailableDto,
  ): Promise<boolean> {
    const existingUser = await this.userRepository.exist({
      where: {
        email: checkIfEmailIsValidDto.email,
      },
    });

    if (existingUser) {
      throw new HttpException(
        'Email is already in use. Please try with a different one.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    } else {
      return true;
    }
  }
}
