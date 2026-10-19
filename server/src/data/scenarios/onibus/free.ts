

import type { QueryScenarioBackend } from '../types.ts';
import { onibusAGGREGATE } from './aggregate.js';
import { onibusCASEWHEN } from './casewhen.js';
import { onibusJOIN } from './joins.js';
import { onibusSUBQUERY } from './subqueries.js';
import { onibusMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, consultaTipo: 'livre' as const }));

const setQueryAsFreeSubject = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, cenario: 'onibus-livre-' + query.cenario.split("-")[2] }));

export const onibusFREE: QueryScenarioBackend[] = [
    ...setQueryAsFreeSubject(setQueryAsFreeType(onibusAGGREGATE)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(onibusCASEWHEN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(onibusJOIN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(onibusSUBQUERY)),
    
    ...onibusAGGREGATE,
    ...onibusCASEWHEN,
    ...onibusJOIN, 
    ...onibusSUBQUERY,
    ...onibusMOCK
]
