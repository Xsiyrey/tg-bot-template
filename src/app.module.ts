import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TgService } from './tg/tg.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TgService],
})
export class AppModule { }
