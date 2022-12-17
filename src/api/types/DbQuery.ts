export interface DbQuery<V extends Record<string, any> = Record<string, any>> {
  sql: string;
  values?: V | Array<any>;
}
