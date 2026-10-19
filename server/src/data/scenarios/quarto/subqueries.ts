

import type { QueryScenarioBackend } from '../types.ts';
import { subqueryQueryN1 } from '../../quarto-queries/subquery/n-1.js';
import { subqueryQueryN2 } from '../../quarto-queries/subquery/n-2.js';
import { subqueryQueryN3 } from '../../quarto-queries/subquery/n-3.js';
import { subqueryQueryN4 } from '../../quarto-queries/subquery/n-4.js';

export const quartoSUBQUERY: QueryScenarioBackend[] = [
    subqueryQueryN1(),
    subqueryQueryN2(),
    subqueryQueryN3(),
    subqueryQueryN4()
]