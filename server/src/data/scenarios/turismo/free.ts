

import type { QueryScenarioBackend } from '../types.ts';
import { turismoAGGREGATE } from './aggregate.js';
import { turismoCASEWHEN } from './casewhen.js';
import { turismoJOIN } from './joins.js';
import { turismoSUBQUERY } from './subqueries.js';
import { turismoMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, consultaTipo: 'livre' as const }));

const setQueryAsFreeSubject = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, cenario: 'turismo-livre-' + query.cenario.split("-")[2] }));

export const turismoFREE: QueryScenarioBackend[] = [
    ...setQueryAsFreeSubject(setQueryAsFreeType(turismoAGGREGATE)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(turismoCASEWHEN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(turismoJOIN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(turismoSUBQUERY)),
    
    ...turismoAGGREGATE,
    ...turismoCASEWHEN,
    ...turismoJOIN, 
    ...turismoSUBQUERY,
    ...turismoMOCK
]
