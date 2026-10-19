

import type { QueryScenarioFrontend } from "../../types";
import { aggregateQueryN1 } from "../../sinuca-queries/aggregate/n-1";
import { aggregateQueryN2 } from "../../sinuca-queries/aggregate/n-2";
import { aggregateQueryN3 } from "../../sinuca-queries/aggregate/n-3";
import { aggregateQueryN4 } from "../../sinuca-queries/aggregate/n-4";

export const sinucaAGGREGATE: QueryScenarioFrontend[] = [
    aggregateQueryN1(),
    aggregateQueryN2(),
    aggregateQueryN3(),
    aggregateQueryN4()
]
