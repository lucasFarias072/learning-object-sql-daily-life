

import type { QueryScenarioFrontend } from '../../types.js';
import { sinucaAGGREGATE } from './aggregate.js';
import { sinucaCASEWHEN } from './casewhen.js';
import { sinucaJOIN } from './joins.js';
import { sinucaSUBQUERY } from './subqueries.js';
import { sinucaMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioFrontend[]) =>
    queries.map((query) => ({ ...query, queryType: 'livre' as const }));

export const sinucaFREE: QueryScenarioFrontend[] = [
    ...setQueryAsFreeType(sinucaAGGREGATE), 
    ...setQueryAsFreeType(sinucaCASEWHEN),
    ...setQueryAsFreeType(sinucaJOIN), 
    ...setQueryAsFreeType(sinucaSUBQUERY),
    
    ...sinucaAGGREGATE,
    ...sinucaCASEWHEN,
    ...sinucaJOIN,                     
    ...sinucaSUBQUERY,
    ...sinucaMOCK
]
