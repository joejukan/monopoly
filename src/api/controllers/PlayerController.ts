import { Controller, Get, Path, Route } from 'tsoa';

@Route('/players')
export class PlayerController extends Controller {
  @Get('/{id}')
  public async getPlayer(@Path() id: string) {
    return { id, heap: process.memoryUsage().heapUsed / 1024 / 1024 };
  }
}
