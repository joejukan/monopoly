import { Update } from 'api/types';

export const versions = (
  [
    {
      name: 'Added Players Table',
      revision: '0.0.1',
      install: async (db) => {
        const queries = [
          `CREATE TABLE games (id INTEGER PRIMARY KEY AUTOINCREMENT, start_time INTEGER DEFAULT unixepoch() NOT NULL, end_time INTEGER DEFAULT unixepoch() NOT NULL);`,
          `CREATE TABLE players (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL, first_name TEXT NOT NULL, last_name TEXT NOT NULL, avatar TEXT NULL);`
        ];
        for (const query of queries) {
          db.run(query);
        }
      }
    }
  ] as Array<Update>
).reduce((collector, version) => {
  collector.set(version.revision, version);
  return collector;
}, new Map<string, Update>());
