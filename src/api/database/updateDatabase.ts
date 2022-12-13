import { Database } from 'sql.js';
import { versions } from './versions';

export async function updateDatabase(db: Database) {
  const keys = Array.from(versions.keys()).sort();
  for (const key of keys) {
    await versions.get(key).action(db);
  }
}
