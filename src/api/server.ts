import dotenv from 'dotenv';
import express, { json, urlencoded, Router } from 'express';
import path from 'path';
import { RegisterRoutes } from './routes';
import { getDb } from './database';

dotenv.config();
export async function run() {
  console.info(RegisterRoutes);
  const app = express();
  const api = Router();
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(api);
  RegisterRoutes(api);

  const port = parseInt(process.env.API_PORT || '3000');

  if (process.env.NODE_ENV === 'production') {
    console.info({ path: path.join(__dirname, '..', 'ui') });
    app.use(express.static(path.join(__dirname, '..', 'ui')));
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'ui', 'index.html'));
    });
  }

  getDb();

  app.listen(port);
}

run();
