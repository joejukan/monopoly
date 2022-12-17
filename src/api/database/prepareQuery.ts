import { DbQuery } from 'api/types';
import { $ } from '.';

export function prepareQuery({ sql, values }: DbQuery) {
  return {
    sql,
    values: Array.isArray(values) ? [...values] : $(values || {})
  } as DbQuery;
}
