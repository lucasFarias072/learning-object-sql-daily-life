

import type { QueryScenarioFrontend } from '../../types.js';
import { casaAGGREGATE } from './aggregate.js';
import { casaCASEWHEN } from './casewhen.js';
import { casaJOIN } from './joins.js';
import { casaSUBQUERY } from './subqueries.js';
import { casaMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioFrontend[]) =>
    queries.map((query) => ({ ...query, queryType: 'livre' as const }));

export const casaFREE: QueryScenarioFrontend[] = [
    ...setQueryAsFreeType(casaAGGREGATE), 
    ...setQueryAsFreeType(casaCASEWHEN),
    ...setQueryAsFreeType(casaJOIN), 
    ...setQueryAsFreeType(casaSUBQUERY),
    
    ...casaAGGREGATE,
    ...casaCASEWHEN,
    ...casaJOIN,                     
    ...casaSUBQUERY,
    ...casaMOCK
]
