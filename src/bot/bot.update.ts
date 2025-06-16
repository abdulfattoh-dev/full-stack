import { Injectable } from '@nestjs/common';
import { BotService } from './bot.service';
import { Ctx, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
@Injectable()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  @Start()
  onStart(@Ctx() ctx: Context) {
    return this.botService.onStart(ctx);
  }

  @On('text')
  onText(@Ctx() ctx: Context) {
    return this.botService.onText(ctx);
  }
}
