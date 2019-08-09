import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            return false;
        }
        await this.validateToken(request.headers.authorization);
            return true;
  }

  async validateToken (providedToken : string) {
      if (providedToken.split(' ')[0] !== 'Bearer') {
          throw new HttpException('Invalid token type.', HttpStatus.FORBIDDEN)
      }

      try {
        const token = providedToken.split(' ')[1];
        const decodedToken = await jwt.verify(token, 'test');
            return decodedToken;

      } catch (err) {
        const message = `Token error : ${err.message}`;
            throw new HttpException(message, HttpStatus.FORBIDDEN);
      }
  }
}