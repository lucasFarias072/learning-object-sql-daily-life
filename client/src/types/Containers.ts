export interface TableRecord {
  [coluna: string]: string | number;
}

export interface QueryScenarioFrontend {
  scenario: string;
  queryType: string; // ex.: 'livre', mas pode virar union type quando você tiver mais variações
  queryId: string;
  queryText: string;
  tables: string[];     // nomes/identificadores das tabelas envolvidas
  fields: string[][];
  tablesNames: string[];
  conditions: string[];
  tricksterIds: string[];
}
