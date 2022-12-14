import { Database } from 'sql.js';
export interface Update {
  success?: boolean;
  error?: string;
  name: string;
  revision: string;
  install?: (db: Database) => Promise<void>;
  uninstall?: (db: Database) => Promise<void>;
}
