import path from 'path';
import fsp from 'fs/promises';
import fs from 'fs';
import initSqlJs, { Database } from 'sql.js';
const state = {
  db: null as Database,
  saving: false
};

const dbFilePath = path.resolve(process.env.DB_FILE);

export async function getDb() {
  if (state.db) {
    return state.db;
  }
  const buffer = fs.existsSync(dbFilePath) ? await fsp.readFile(dbFilePath) : null;
  const SQL = await initSqlJs();
  const db = new SQL.Database(buffer || []);
  state.db = db;

  return state.db;
}

export async function saveDb() {
  if (state.db && !state.saving) {
    try {
      state.saving = true;
      const buffer = Buffer.from(state.db.export());
      await fsp.writeFile(dbFilePath, buffer, 'utf-8');
      return true;
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      state.saving = false;
    }
  }
}
