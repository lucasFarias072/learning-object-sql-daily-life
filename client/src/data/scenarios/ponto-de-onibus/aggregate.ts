

import type { QueryScenarioFrontend } from "../../types";
import { aggregateQueryN1 } from "../../ponto-de-onibus-queries/aggregate/n-1";
import { aggregateQueryN2 } from "../../ponto-de-onibus-queries/aggregate/n-2";
import { aggregateQueryN3 } from "../../ponto-de-onibus-queries/aggregate/n-3";
import { aggregateQueryN4 } from "../../ponto-de-onibus-queries/aggregate/n-4";

void [aggregateQueryN4];

export const pontoDeOnibusAGGREGATE: QueryScenarioFrontend[] = [
    aggregateQueryN1(),
    aggregateQueryN2(),
    aggregateQueryN3(),
    // aggregateQueryN4()
]
