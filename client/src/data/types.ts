

// import { type QueryType } from '../../../server/src/data/scenarios/types'
   import { type QueryType } from './scenarioTypes'

export interface QueryScenarioFrontend {
  scenario: string;
  queryType: QueryType;
  queryId: string;
  queryText: string;
  tables: string[];
  fields: string[][];
  tablesNames: string[];
  conditions: string[];
  tricksterIds: string[]
}

export type QueryFromHistory = {
  id: string;
  consulta: string;
  timestamp: Date;
};