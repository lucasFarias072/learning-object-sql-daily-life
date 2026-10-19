

import type { QueryScenarioFrontend } from '../../types.js';
import { quartoAGGREGATE } from './aggregate.js';
import { quartoCASEWHEN } from './casewhen.js';
import { quartoJOIN } from './joins.js';
import { quartoSUBQUERY } from './subqueries.js';
import { quartoMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioFrontend[]) =>
    queries.map((query) => ({ ...query, queryType: 'livre' as const }));

export const quartoFREE: QueryScenarioFrontend[] = [
    ...setQueryAsFreeType(quartoJOIN), 
    ...setQueryAsFreeType(quartoAGGREGATE), 
    ...setQueryAsFreeType(quartoSUBQUERY),
    ...setQueryAsFreeType(quartoCASEWHEN),
    
    ...quartoAGGREGATE,
    ...quartoCASEWHEN,
    ...quartoJOIN,                     
    ...quartoSUBQUERY,
    ...quartoMOCK
]
