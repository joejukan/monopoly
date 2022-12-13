import Chance from 'chance';
import { Update } from 'api/types';
import { $ } from '.';

export const versions = (
  [
    {
      name: 'Added Players Table',
      revision: '0.0.1',
      action: async (db) => {
        db.run(`
        CREATE TABLE players (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          first_name TEXT NOT NULL,
          last_name TEXT NOT NULL,
          money REAL DEFAULT 0 NOT NULL,
          avatar TEXT NULL
        );
      `);
      }
    }
  ] as Array<Update>
).reduce((collector, version) => {
  collector.set(version.revision, version);
  return collector;
}, new Map<string, Update>());
