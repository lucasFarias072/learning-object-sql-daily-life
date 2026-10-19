

import type { QueryScenarioFrontend } from '../../types.js';
import { exercicioAGGREGATE } from './aggregate.js';
import { exercicioCASEWHEN } from './casewhen.js';
import { exercicioJOIN } from './joins.js';
import { exercicioSUBQUERY } from './subqueries.js';
import { exercicioMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioFrontend[]) =>
    queries.map((query) => ({ ...query, queryType: 'livre' as const }));

export const exercicioFREE: QueryScenarioFrontend[] = [
    ...setQueryAsFreeType(exercicioAGGREGATE), 
    ...setQueryAsFreeType(exercicioCASEWHEN),
    ...setQueryAsFreeType(exercicioJOIN), 
    ...setQueryAsFreeType(exercicioSUBQUERY),
    
    ...exercicioAGGREGATE,
    ...exercicioCASEWHEN,
    ...exercicioJOIN,                     
    ...exercicioSUBQUERY,
    ...exercicioMOCK
]
