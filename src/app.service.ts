import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getChoronos(): string {
    return 'Amich Choronos';
  }
}
