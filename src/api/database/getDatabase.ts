import path from 'path';
import fsp from 'fs/promises';
import fs from 'fs';
import initSqlJs, { Database } from 'sql.js';
const state = {
  db: null as Database
};

export async function getDb() {
  if (state.db) {
    return state.db;
  }

  const dbFilePath = path.resolve(process.env.DB_FILE);
  const buffer = fs.existsSync(dbFilePath) ? await fsp.readFile(dbFilePath) : null;
  const SQL = await initSqlJs();
  const db = new SQL.Database(buffer || []);
  state.db = db;

  return state.db;
}
