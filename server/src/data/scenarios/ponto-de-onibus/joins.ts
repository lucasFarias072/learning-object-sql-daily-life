

import { joinQueryN1 } from '../../ponto-de-onibus-queries/join/n-1.js';
import { joinQueryN2 } from '../../ponto-de-onibus-queries/join/n-2.js';
import { joinQueryN3 } from '../../ponto-de-onibus-queries/join/n-3.js';
import { joinQueryN4 } from '../../ponto-de-onibus-queries/join/n-4.js';
import type { QueryScenarioBackend } from '../types.ts';

export const pontoDeOnibusJOIN: QueryScenarioBackend[] = [
    joinQueryN1(),
    joinQueryN2(),
    joinQueryN3(),
    joinQueryN4()
]
