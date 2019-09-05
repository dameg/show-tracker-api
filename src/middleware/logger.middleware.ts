import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
   console.group('Request:');
   console.log('#Params:');
   console.log(req.params);
   console.log('#Body:');
   console.log(req.body);
   console.groupEnd();
   next();
  }
}
