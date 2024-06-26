import { MiddlewareConsumer, Module, ValidationPipe } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { HttpExceptionFilter } from "./http-exception.filter";
import { LoggingInterceptor } from "./logging.interceptor";
import { AuthGuard } from "./auth.guard";
import { LoggerMiddleware } from "./logger.middleware";
import { UserController } from "./user.controller";

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [
    // { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    // { provide: APP_PIPE, useClass: ValidationPipe },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    AppService
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
