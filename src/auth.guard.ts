import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('Guard: Before');
    const result = true; // 인증 로직을 여기에 추가합니다.
    console.log('Guard: After');

    return result;
  }
}