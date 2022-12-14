import dotenv from 'dotenv';
import express, { json, urlencoded, Router } from 'express';
import path from 'path';
import { RegisterRoutes } from './routes';

dotenv.config();
export async function run() {
  const app = express();
  const api = Router();
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(api);
  RegisterRoutes(api);

  const port = parseInt(process.env.API_PORT || '3000');

  if (process.env.NODE_ENV === 'production') {
    const uiBuildPath = path.join(__dirname, '..', 'ui');
    const imagesPath = path.join(process.cwd(), 'src', 'images');
    console.info({ imagesPath, uiBuildPath });

    app.use('/images', express.static(imagesPath));
    app.use(express.static(uiBuildPath));

    // single page app setup
    app.get('/', (req, res) => {
      res.sendFile(path.join(uiBuildPath, 'index.html'));
    });
  }

  const server = app.listen(port);

  process.on('SIGTERM', () => {
    console.info('SIGTERM: shutting down server');
    server.close((err) => {
      err ? console.error(err) : console.info('SIGTERM: server successfully shutdown');
    });
  });
}

run();
