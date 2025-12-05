import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
  origin: [
    'http://localhost:5173', 
    'https://https://library-xi-orpin.vercel.app/.com' 
  ],
  credentials: true,
});

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Server listening on ${port}`);
}
bootstrap();