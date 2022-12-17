import type { ModuleThread } from 'threads';
import type { WorkerModule } from 'threads/dist/types/worker';
import { DbQuery } from './DbQuery';

interface ExecSqlOptions<V> {
  query: DbQuery<V> | Array<DbQuery<V>>;
  transaction?: boolean;
}
export interface DbWorker extends WorkerModule<any>, ModuleThread {
  startUp: () => Promise<void>;
  shutDown: () => Promise<void>;
  exec: <R = any, V = Record<string, any>>(options: ExecSqlOptions<V>) => Promise<R>;
}
