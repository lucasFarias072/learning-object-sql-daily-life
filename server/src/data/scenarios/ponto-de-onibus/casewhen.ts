

import type { QueryScenarioBackend } from '../types.ts';
import { caseWhenQueryN1 } from '../../ponto-de-onibus-queries/casewhen/n-1.js';
import { caseWhenQueryN2 } from '../../ponto-de-onibus-queries/casewhen/n-2.js';
import { caseWhenQueryN3 } from '../../ponto-de-onibus-queries/casewhen/n-3.js';
import { caseWhenQueryN4 } from '../../ponto-de-onibus-queries/casewhen/n-4.js';

export const pontoDeOnibusCASEWHEN: QueryScenarioBackend[] = [
    caseWhenQueryN1(),
    caseWhenQueryN2(),
    caseWhenQueryN3(),
    caseWhenQueryN4()
]
