

import type { QueryScenarioFrontend } from "../../types";
import { aggregateQueryN1 } from "../../frutaria-queries/aggregate/n-1";
import { aggregateQueryN2 } from "../../frutaria-queries/aggregate/n-2";
import { aggregateQueryN3 } from "../../frutaria-queries/aggregate/n-3";
import { aggregateQueryN4 } from "../../frutaria-queries/aggregate/n-4";

export const frutariaAGGREGATE: QueryScenarioFrontend[] = [
    aggregateQueryN1(),
    aggregateQueryN2(),
    aggregateQueryN3(),
    aggregateQueryN4()
]
