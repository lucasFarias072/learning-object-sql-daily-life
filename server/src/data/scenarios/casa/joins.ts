

import type { QueryScenarioBackend } from '../types.ts';
import { joinQueryN1 } from '../../casa-queries/join/n-1.js';
import { joinQueryN2 } from '../../casa-queries/join/n-2.js';
import { joinQueryN3 } from '../../casa-queries/join/n-3.js';
import { joinQueryN4 } from '../../casa-queries/join/n-4.js';

export const casaJOIN: QueryScenarioBackend[] = [
    joinQueryN1(),
    joinQueryN2(),
    joinQueryN3(),
    joinQueryN4()
]
