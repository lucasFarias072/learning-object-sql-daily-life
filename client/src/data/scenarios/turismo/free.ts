

import type { QueryScenarioFrontend } from '../../types.js';
import { turismoAGGREGATE } from './aggregate.js';
import { turismoCASEWHEN } from './casewhen.js';
import { turismoJOIN } from './joins.js';
import { turismoSUBQUERY } from './subqueries.js';
import { turismoMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioFrontend[]) =>
    queries.map((query) => ({ ...query, queryType: 'livre' as const }));

export const turismoFREE: QueryScenarioFrontend[] = [
    ...setQueryAsFreeType(turismoJOIN), 
    ...setQueryAsFreeType(turismoAGGREGATE), 
    ...setQueryAsFreeType(turismoSUBQUERY),
    ...setQueryAsFreeType(turismoCASEWHEN),
    
    ...turismoAGGREGATE,
    ...turismoCASEWHEN,
    ...turismoJOIN,                     
    ...turismoSUBQUERY,
    ...turismoMOCK
]
