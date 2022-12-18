import type { IncomingMessage, ServerResponse } from 'http';
import type { Express } from 'express';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextRequest, NextResponse } from 'next/server';
export interface ExpressApi extends Express {
  handle?: (
    req: NextApiRequest | NextRequest | IncomingMessage,
    res: NextApiResponse | NextResponse | ServerResponse
  ) => any | Promise<any>;
}
