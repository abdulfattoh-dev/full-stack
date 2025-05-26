import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT: number = Number(process.env.PORT);
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  await app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
    console.log(`Swagger is available at http://localhost:3000/swagger`);
  });
}
bootstrap();
