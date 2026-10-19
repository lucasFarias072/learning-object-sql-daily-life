

import type { QueryScenarioFrontend } from '../../types.js';
import { parqueAquaticoAGGREGATE } from './aggregate.js';
import { parqueAquaticoCASEWHEN } from './casewhen.js';
import { parqueAquaticoJOIN } from './joins.js';
import { parqueAquaticoSUBQUERY } from './subqueries.js';
import { parqueAquaticoMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioFrontend[]) =>
    queries.map((query) => ({ ...query, queryType: 'livre' as const }));

export const parqueAquaticoFREE: QueryScenarioFrontend[] = [
    ...setQueryAsFreeType(parqueAquaticoJOIN), 
    ...setQueryAsFreeType(parqueAquaticoAGGREGATE), 
    ...setQueryAsFreeType(parqueAquaticoSUBQUERY),
    ...setQueryAsFreeType(parqueAquaticoCASEWHEN),
    
    ...parqueAquaticoAGGREGATE,
    ...parqueAquaticoCASEWHEN,
    ...parqueAquaticoJOIN,                     
    ...parqueAquaticoSUBQUERY,
    ...parqueAquaticoMOCK
]
