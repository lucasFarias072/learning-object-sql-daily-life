

import type { QueryScenarioBackend } from '../types.ts';
import { joinQueryN1 } from '../../turismo-queries/join/n-1.js';
import { joinQueryN2 } from '../../turismo-queries/join/n-2.js';
import { joinQueryN3 } from '../../turismo-queries/join/n-3.js';
import { joinQueryN4 } from '../../turismo-queries/join/n-4.js';

export const turismoJOIN: QueryScenarioBackend[] = [
    joinQueryN1(),
    joinQueryN2(),
    joinQueryN3(),
    // joinQueryN4()
]
