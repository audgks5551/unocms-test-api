import { Controller, ForbiddenException, Get, Query, UseGuards, UseInterceptors, UsePipes } from "@nestjs/common";
import { AppService } from './app.service';
import { AuthGuard } from "./auth.guard";
import { LoggingInterceptor } from "./logging.interceptor";
import { ValidationPipe } from "./validation.pipe";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard)
  @UseInterceptors(LoggingInterceptor)
  @UsePipes(ValidationPipe)
  getHello(@Query('data') data: string): string {
    console.log("AppController.getHello() execute");

    return "AppController.getHello() execute";
  }
}
