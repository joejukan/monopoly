import { Controller, Get, Path, Route } from 'tsoa';

@Route('/users')
export class UserController extends Controller {
  @Get('/{userId}')
  public async getUser(@Path() userId: string) {
    return { userId };
  }
}
