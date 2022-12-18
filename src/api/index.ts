import path from 'path';
import express, { Router } from 'express';
import { ExpressApi } from 'api/types';
import { RegisterRoutes } from './routes';

const router = Router();
RegisterRoutes(router);

const api: ExpressApi = express();

api.use('/', router);

const imagesPath = path.join(process.cwd(), 'src', 'images');
api.use('/api/images', express.static(imagesPath));

export { api };
export default api;
