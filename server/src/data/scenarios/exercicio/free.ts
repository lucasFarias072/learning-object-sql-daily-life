

import type { QueryScenarioBackend } from '../types.ts';
import { exercicioAGGREGATE } from './aggregate.js';
import { exercicioCASEWHEN } from './casewhen.js';
import { exercicioJOIN } from './joins.js';
import { exercicioSUBQUERY } from './subqueries.js';
import { exercicioMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, consultaTipo: 'livre' as const }));

const setQueryAsFreeSubject = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, cenario: 'exercicio-livre-' + query.cenario.split("-")[2] }));

export const exercicioFREE: QueryScenarioBackend[] = [
    ...setQueryAsFreeSubject(setQueryAsFreeType(exercicioJOIN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(exercicioAGGREGATE)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(exercicioSUBQUERY)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(exercicioCASEWHEN)), 
    
    ...exercicioAGGREGATE,
    ...exercicioCASEWHEN,
    ...exercicioJOIN, 
    ...exercicioSUBQUERY,
    ...exercicioMOCK
]
