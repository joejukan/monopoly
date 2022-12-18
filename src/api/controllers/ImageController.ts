import path from 'path';
import fs from 'fs';
import { lookup } from 'mrmime';
import { Controller, Get, Route, Request } from 'tsoa';

const imagesPath = path.join(process.cwd(), 'src', 'images');

@Route('/images')
export class ImageController extends Controller {
  @Get('/*')
  public async getImage(@Request() req: Request) {
    const parts = /\/images\/(.*)/.exec(req.url);
    if (parts.length > 1) {
      const filePath = path.resolve(imagesPath, parts[1]);
      this.setHeader('Content-Type', lookup(filePath) || '');

      if (fs.existsSync(filePath)) {
        this.setStatus(200);
        return fs.createReadStream(filePath);
      }
    }

    this.setStatus(404);
  }
}
