

import type { QueryScenarioBackend } from '../types.ts';
import { pontoDeOnibusAGGREGATE } from './aggregate.js';
import { pontoDeOnibusCASEWHEN } from './casewhen.js';
import { pontoDeOnibusJOIN } from './joins.js';
import { pontoDeOnibusSUBQUERY } from './subqueries.js';
import { pontoDeOnibusMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, consultaTipo: 'livre' as const }));

const setQueryAsFreeSubject = (queries: QueryScenarioBackend[]) =>
    queries.map((query) => ({ ...query, cenario: 'ponto-de-onibus-livre-' + query.cenario.split("-")[4] }));

export const pontoDeOnibusFREE: QueryScenarioBackend[] = [
    ...setQueryAsFreeSubject(setQueryAsFreeType(pontoDeOnibusAGGREGATE)),
    ...setQueryAsFreeSubject(setQueryAsFreeType(pontoDeOnibusCASEWHEN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(pontoDeOnibusJOIN)), 
    ...setQueryAsFreeSubject(setQueryAsFreeType(pontoDeOnibusSUBQUERY)),
    
    ...pontoDeOnibusAGGREGATE,
    ...pontoDeOnibusCASEWHEN,
    ...pontoDeOnibusJOIN, 
    ...pontoDeOnibusSUBQUERY,
    ...pontoDeOnibusMOCK
]
