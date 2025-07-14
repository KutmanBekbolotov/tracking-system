import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://checkauto.netlify.app', 'http://localhost:5173'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 1200, '0.0.0.0');
}
bootstrap();