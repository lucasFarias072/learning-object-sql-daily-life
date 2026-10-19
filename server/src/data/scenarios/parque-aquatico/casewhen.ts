

import type { QueryScenarioBackend } from '../types.ts';
import { caseWhenQueryN1 } from '../../parque-aquatico-queries/casewhen/n-1.js';
import { caseWhenQueryN2 } from '../../parque-aquatico-queries/casewhen/n-2.js';
import { caseWhenQueryN3 } from '../../parque-aquatico-queries/casewhen/n-3.js';
import { caseWhenQueryN4 } from '../../parque-aquatico-queries/casewhen/n-4.js';

export const parqueAquaticoCASEWHEN: QueryScenarioBackend[] = [
    caseWhenQueryN1(),
    caseWhenQueryN2(),
    caseWhenQueryN3(),
    caseWhenQueryN4()
]
