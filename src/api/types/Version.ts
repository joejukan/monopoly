import { Database } from 'sql.js';
export interface Update {
  success?: boolean;
  error?: string;
  name: string;
  revision: string;
  action?: (db: Database) => Promise<void>;
}
