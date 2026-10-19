

import type { QueryScenarioBackend } from '../types.ts';
import { quartoAGGREGATE } from './aggregate.js';
import { quartoCASEWHEN } from './casewhen.js';
import { quartoJOIN } from './joins.js';
import { quartoSUBQUERY } from './subqueries.js';
import { quartoMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, consultaTipo: 'livre' as const }));

const setQueryAsFreeSubject = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, cenario: 'quarto-livre-' + query.cenario.split("-")[2] }));

export const quartoFREE: QueryScenarioBackend[] = [
    ...setQueryAsFreeSubject(setQueryAsFreeType(quartoAGGREGATE)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(quartoCASEWHEN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(quartoJOIN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(quartoSUBQUERY)),
    
    ...quartoAGGREGATE,
    ...quartoCASEWHEN,
    ...quartoJOIN, 
    ...quartoSUBQUERY,
    ...quartoMOCK
]
