

export type QueryType =
  | 'join'
  | 'filtro-composto'
  | 'agregacao'
  | 'subconsulta'
  | 'funcao-escalar'
  | 'conjunto-distinct'
  | 'livre'
  | 'exemplo'
  | 'case-when'
  | 'misturado';

export interface QueryScenarioBackend {
  cenario: string;
  consultaTipo: QueryType;
  id: number;
  consulta: string;
  tabelas: string[];
  campos: string[];
  nomes: string[];
  condicoes: string[];
  numbers: number[];
}