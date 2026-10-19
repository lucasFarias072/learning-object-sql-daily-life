

import type { QueryScenarioFrontend } from '../../types.js';
import { frutariaAGGREGATE } from './aggregate.js';
import { frutariaCASEWHEN } from './casewhen.js';
import { frutariaJOIN } from './joins.js';
import { frutariaSUBQUERY } from './subqueries.js';
import { frutariaMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioFrontend[]) =>
    queries.map((query) => ({ ...query, queryType: 'livre' as const }));

export const frutariaFREE: QueryScenarioFrontend[] = [
    ...setQueryAsFreeType(frutariaJOIN), 
    ...setQueryAsFreeType(frutariaAGGREGATE), 
    ...setQueryAsFreeType(frutariaSUBQUERY),
    ...setQueryAsFreeType(frutariaCASEWHEN),
    
    ...frutariaAGGREGATE,
    ...frutariaCASEWHEN,
    ...frutariaJOIN,                     
    ...frutariaSUBQUERY,
    ...frutariaMOCK
]
