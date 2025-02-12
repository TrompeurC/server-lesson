import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  // 设置全局api前缀
  app.setGlobalPrefix('/api');
  // 添加全局管道
  app.use(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
