

import type { QueryScenarioBackend } from '../types.ts';
import { sinucaAGGREGATE } from './aggregate.js';
import { sinucaCASEWHEN } from './casewhen.js';
import { sinucaJOIN } from './joins.js';
import { sinucaSUBQUERY } from './subqueries.js';
import { sinucaMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, consultaTipo: 'livre' as const }));

const setQueryAsFreeSubject = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, cenario: 'sinuca-livre-' + query.cenario.split("-")[2] }));

export const sinucaFREE: QueryScenarioBackend[] = [
    ...setQueryAsFreeSubject(setQueryAsFreeType(sinucaAGGREGATE)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(sinucaCASEWHEN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(sinucaJOIN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(sinucaSUBQUERY)),
    
    ...sinucaAGGREGATE,
    ...sinucaCASEWHEN,
    ...sinucaJOIN, 
    ...sinucaSUBQUERY,
    ...sinucaMOCK
]
