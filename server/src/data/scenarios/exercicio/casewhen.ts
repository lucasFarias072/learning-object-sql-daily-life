

import type { QueryScenarioBackend } from '../types.ts';
import { caseWhenQueryN1 } from '../../exercicio-queries/casewhen/n-1.js';
import { caseWhenQueryN2 } from '../../exercicio-queries/casewhen/n-2.js';
import { caseWhenQueryN3 } from '../../exercicio-queries/casewhen/n-3.js';
import { caseWhenQueryN4 } from '../../exercicio-queries/casewhen/n-4.js';

export const exercicioCASEWHEN: QueryScenarioBackend[] = [
    caseWhenQueryN1(),
    caseWhenQueryN2(),
    caseWhenQueryN3(),
    caseWhenQueryN4()
]
