

import type { QueryScenarioBackend } from '../types.ts';
import { subqueryQueryN1 } from '../../ponto-de-onibus-queries/subquery/n-1.js';
import { subqueryQueryN2 } from '../../ponto-de-onibus-queries/subquery/n-2.js';
import { subqueryQueryN3 } from '../../ponto-de-onibus-queries/subquery/n-3.js';
import { subqueryQueryN4 } from '../../ponto-de-onibus-queries/subquery/n-4.js';

export const pontoDeOnibusSUBQUERY: QueryScenarioBackend[] = [
    subqueryQueryN1(),
    subqueryQueryN2(),
    // subqueryQueryN3(),
    // subqueryQueryN4()
]