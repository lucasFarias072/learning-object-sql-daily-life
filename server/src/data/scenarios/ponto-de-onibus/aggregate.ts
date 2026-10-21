

import type { QueryScenarioBackend } from '../types.js';
import { aggregateQueryN1 } from '../../ponto-de-onibus-queries/aggregate/n-1.js';
import { aggregateQueryN2 } from '../../ponto-de-onibus-queries/aggregate/n-2.js';
import { aggregateQueryN3 } from '../../ponto-de-onibus-queries/aggregate/n-3.js';
import { aggregateQueryN4 } from '../../ponto-de-onibus-queries/aggregate/n-4.js';

export const pontoDeOnibusAGGREGATE: QueryScenarioBackend[] = [
    aggregateQueryN1(),
    aggregateQueryN2(),
    // aggregateQueryN3(),
    // aggregateQueryN4()
]
