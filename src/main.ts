import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Implement banking API')
    .setDescription(
      'This server for banking API which have information about user banks, transactions and categories.',
    )
    .setVersion('1.0.0')
    .addTag('Banking API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(PORT, () => console.log(`Server started on PORT=${PORT}`));
}
bootstrap();
