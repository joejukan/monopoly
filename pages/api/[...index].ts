import { NextApiRequest, NextApiResponse } from 'next';
import api from 'api';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  api.handle(req, res);
}
