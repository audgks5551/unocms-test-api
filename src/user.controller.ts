import { Controller, Get, Query, UseGuards, UseInterceptors, UsePipes } from "@nestjs/common";
import { AppService } from './app.service';
import { AuthGuard } from "./auth.guard";

@Controller()
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get("/users")
  getUser(@Query('data') data: string): string {
    console.log("UserController.getUser() execute");
    return "get User";
  }
}
