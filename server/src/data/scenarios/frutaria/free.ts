

import type { QueryScenarioBackend } from '../types.ts';
import { frutariaAGGREGATE } from './aggregate.js';
import { frutariaCASEWHEN } from './casewhen.js';
import { frutariaJOIN } from './joins.js';
import { frutariaSUBQUERY } from './subqueries.js';
import { frutariaMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, consultaTipo: 'livre' as const }));

const setQueryAsFreeSubject = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, cenario: 'frutaria-livre-' + query.cenario.split("-")[2] }));

export const frutariaFREE: QueryScenarioBackend[] = [
    ...setQueryAsFreeSubject(setQueryAsFreeType(frutariaJOIN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(frutariaAGGREGATE)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(frutariaSUBQUERY)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(frutariaCASEWHEN)), 
    
    ...frutariaAGGREGATE,
    ...frutariaCASEWHEN,
    ...frutariaJOIN, 
    ...frutariaSUBQUERY,
    ...frutariaMOCK
]
