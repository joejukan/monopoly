import { spawn, Thread, Worker, ModuleThread } from 'threads';
import { DbWorker } from '../types';

process.env.DB_FILE = 'private/db.sqlite';
describe('db worker unit tests', () => {
  let db: DbWorker = null;

  beforeEach(async () => {
    db = (await spawn<DbWorker>(new Worker('./db'))) as DbWorker;
    await db.startUp();
  });

  afterEach(async () => {
    await db.shutDown();
    Thread.terminate(db);
  });

  test('random test', async () => {
    const sql = `INSERT INTO people ($name, $age)`;
    await db.exec({
      query: [
        { sql, values: { name: 'Jane Doe', age: 36 } },
        { sql, values: { name: 'John Doe', age: 40 } }
      ]
    });
  }, 5000);
});
