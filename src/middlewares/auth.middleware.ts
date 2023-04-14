import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from 'src/config';
import { UserService } from 'src/modules/user/user.service';
import { ExpressRequest } from 'src/types/expressRequest.interface';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, _: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const decode = verify(token, JWT_SECRET);

      if (decode['id']) {
        const user = await this.userService.getUserById(decode['id']);
        req.user = user;
        next();
        return;
      }

      req.user = null;
      next();
    } catch (error) {
      console.error(error);
      req.user = null;
      next();
    }
  }
}
