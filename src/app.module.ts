import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '7528396368:AAG7MmjxvcAxJFLb3GmzURfa7n1tu6pezwY',
    }),
    BotModule,
  ],
})
export class AppModule {}
