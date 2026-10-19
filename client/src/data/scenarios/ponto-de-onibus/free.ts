

import type { QueryScenarioFrontend } from '../../types.js';
import { pontoDeOnibusAGGREGATE } from './aggregate.js';
import { pontoDeOnibusCASEWHEN } from './casewhen.js';
import { pontoDeOnibusJOIN } from './joins.js';
import { pontoDeOnibusSUBQUERY } from './subqueries.js';
import { pontoDeOnibusMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioFrontend[]) =>
    queries.map((query) => ({ ...query, queryType: 'livre' as const }));

export const pontoDeOnibusFREE: QueryScenarioFrontend[] = [
    ...setQueryAsFreeType(pontoDeOnibusJOIN), 
    ...setQueryAsFreeType(pontoDeOnibusAGGREGATE), 
    ...setQueryAsFreeType(pontoDeOnibusSUBQUERY),
    ...setQueryAsFreeType(pontoDeOnibusCASEWHEN),
    
    ...pontoDeOnibusAGGREGATE,
    ...pontoDeOnibusCASEWHEN,
    ...pontoDeOnibusJOIN,                     
    ...pontoDeOnibusSUBQUERY,
    ...pontoDeOnibusMOCK
]
