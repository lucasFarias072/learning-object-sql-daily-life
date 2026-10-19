

import type { QueryScenarioBackend } from '../types.ts';

import { casaAGGREGATE } from './aggregate.js';
import { casaCASEWHEN } from './casewhen.js';
import { casaJOIN } from './joins.js';
import { casaSUBQUERY } from './subqueries.js';
import { casaMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, consultaTipo: 'livre' as const }));

const setQueryAsFreeSubject = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, cenario: 'casa-livre-' + query.cenario.split("-")[2] }));

export const casaFREE: QueryScenarioBackend[] = [
    ...setQueryAsFreeSubject(setQueryAsFreeType(casaAGGREGATE)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(casaCASEWHEN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(casaJOIN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(casaSUBQUERY)),
    
    ...casaAGGREGATE,
    ...casaCASEWHEN,
    ...casaJOIN, 
    ...casaSUBQUERY,
    ...casaMOCK
]
