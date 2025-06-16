import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './bot/bot.module';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: String(process.env.TOKEN),
    }),
    BotModule,
  ],
})
export class AppModule {}
