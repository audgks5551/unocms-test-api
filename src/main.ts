import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  // NestJS 애플리케이션 인스턴스를 생성하는 비동기 작업을 기다립니다.
  const app = await NestFactory.create(AppModule);

  // 애플리케이션이 포트 3000에서 서버를 시작하는 비동기 작업을 기다립니다.
  await app.listen(3000);

  // 이제 애플리케이션이 정상적으로 실행 중입니다.
}
bootstrap();
