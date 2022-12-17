import { expose } from 'threads';
import type { Statement, QueryExecResult } from 'sql.js';

import { DbWorker } from 'api/types';
import { getDb, prepareQuery, saveDb } from 'api/database';

const state = {
  init: false,
  handle: null
};

const startUp: DbWorker['startUp'] = async () => {
  await getDb();
  if (!state.init) {
    state.init = true;
    state.handle = setInterval(() => {
      saveDb();
    }, 5000);
  }
};

const shutDown: DbWorker['shutDown'] = async () => {
  clearInterval(state.handle);
  const db = await getDb();
  db.close();
  state.init = false;
};

const exec: DbWorker['exec'] = async ({ transaction = false, ...props }) => {
  const db = await getDb();

  try {
    if (Array.isArray(props.query)) {
      const queries = props.query.map((q) => prepareQuery(q));
      if (transaction) {
        const sqlQuery =
          queries.reduce((collector, { sql, values }) => {
            return collector + db.prepare(sql, values).getNormalizedSQL() + ';\n';
          }, 'BEGIN;\n') + 'COMMIT;';

        console.info(sqlQuery);
      }
    } else {
      const query = prepareQuery(props.query);
    }
    return null;
  } catch (err) {
    if (transaction) {
      try {
        db?.run('ROLLBACK');
      } catch (e) {
        console.error('ROLLBACK FAILED:', e);
      }
    }
    throw err;
  }
};

export default expose({ startUp, shutDown, exec } as DbWorker);
