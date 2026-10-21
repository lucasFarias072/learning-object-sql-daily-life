

import type { QueryScenarioBackend } from '../types.js';
import { aggregateQueryN1 } from '../../quarto-queries/aggregate/n-1.js';
import { aggregateQueryN2 } from '../../quarto-queries/aggregate/n-2.js';
import { aggregateQueryN3 } from '../../quarto-queries/aggregate/n-3.js';
import { aggregateQueryN4 } from '../../quarto-queries/aggregate/n-4.js';

export const quartoAGGREGATE: QueryScenarioBackend[] = [
    aggregateQueryN1(),
    // aggregateQueryN2(),
    // aggregateQueryN3(),
    // aggregateQueryN4()
]
