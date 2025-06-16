import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Context } from 'telegraf';

@Injectable()
export class BotService {
  constructor(private readonly httpService: HttpService) { }

  async onStart(ctx: Context) {
    try {
      ctx.reply('Wikipedia botiga xush kelibsiz');
    } catch (error) {
      console.log(error);
    }
  }

  async onText(ctx: Context) {
    try {
      if (ctx.message && 'text' in ctx.message) {
        const url = `https://uz.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(ctx.message.text.trim())}`;
        const res = await lastValueFrom(this.httpService.get(url));
        const data = res.data;

        console.log(data);

        if (!data.extract) {
          ctx.reply('❌ Bu mavzuga oid maqola topilmadi.');
        }

        let head = ``;

        if (data.description) {
          head = `📚 <b>${data.title} - ${data.description}</b>\n\n`;
        } else {
          head = `📚 <b>${data.title}</b>\n\n`;
        }

        const foot = `\n\n👉 <a href="${data.content_urls.desktop.page || data.content_urls.mobile.page}">Batafsil o'qish</a>`;
        const extract = data.extract.slice(0, (1024 - head.length - foot.length)) + "...";
        const message = head + extract + foot;

        if (
          data.originalimage?.source || data.thumbnail?.source
        ) {
          ctx.replyWithPhoto(
            data.originalimage?.source || data.thumbnail?.source,
            {
              caption: message,
              parse_mode: 'HTML',
            },
          );
        } else {
          ctx.reply(message, { parse_mode: 'HTML' });
        }
      } else {
        ctx.reply('❌ Bu mavzuga oid maqola topilmadi.');
      }
    } catch (error) {
      ctx.reply("❌ Ma'lumot olishda xatolik yuz berdi.");
      console.error('Error:', error?.response?.data || error.message || error);
    }
  }
}
