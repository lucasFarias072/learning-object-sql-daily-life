

import type { QueryScenarioFrontend } from '../../types.js';
import { onibusAGGREGATE } from './aggregate.js';
import { onibusCASEWHEN } from './casewhen.js';
import { onibusJOIN } from './joins.js';
import { onibusSUBQUERY } from './subqueries.js';
import { onibusMOCK } from './sample.js';

const setQueryAsFreeType = (queries: QueryScenarioFrontend[]) =>
    queries.map((query) => ({ ...query, queryType: 'livre' as const }));

export const onibusFREE: QueryScenarioFrontend[] = [
    ...setQueryAsFreeType(onibusJOIN), 
    ...setQueryAsFreeType(onibusAGGREGATE), 
    ...setQueryAsFreeType(onibusSUBQUERY),
    ...setQueryAsFreeType(onibusCASEWHEN),
    
    ...onibusAGGREGATE,
    ...onibusCASEWHEN,
    ...onibusJOIN,                     
    ...onibusSUBQUERY,
    ...onibusMOCK
]
