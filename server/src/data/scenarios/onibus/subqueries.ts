

import { subqueryQueryN1 } from '../../onibus-queries/subquery/n-1.js';
import { subqueryQueryN2 } from '../../onibus-queries/subquery/n-2.js';
import { subqueryQueryN3 } from '../../onibus-queries/subquery/n-3.js';
import { subqueryQueryN4 } from '../../onibus-queries/subquery/n-4.js';
import type { QueryScenarioBackend } from '../types.ts';

export const onibusSUBQUERY: QueryScenarioBackend[] = [
    subqueryQueryN1(),
    subqueryQueryN2(),
    subqueryQueryN3(),
    subqueryQueryN4()
]