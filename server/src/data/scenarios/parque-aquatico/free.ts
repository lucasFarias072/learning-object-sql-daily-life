

import type { QueryScenarioBackend } from '../types.ts';
import { parqueAquaticoAGGREGATE } from './aggregate.js';
import { parqueAquaticoCASEWHEN } from './casewhen.js';
import { parqueAquaticoJOIN } from './joins.js';
import { parqueAquaticoSUBQUERY } from './subqueries.js';
import { parqueAquaticoMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, consultaTipo: 'livre' as const }));

const setQueryAsFreeSubject = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, cenario: 'parque-aquatico-livre-' + query.cenario.split("-")[3] }));

export const parqueAquaticoFREE: QueryScenarioBackend[] = [
    ...setQueryAsFreeSubject(setQueryAsFreeType(parqueAquaticoAGGREGATE)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(parqueAquaticoCASEWHEN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(parqueAquaticoJOIN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(parqueAquaticoSUBQUERY)),
    
    ...parqueAquaticoAGGREGATE,
    ...parqueAquaticoCASEWHEN,
    ...parqueAquaticoJOIN, 
    ...parqueAquaticoSUBQUERY,
    ...parqueAquaticoMOCK
]
