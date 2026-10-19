

import type { QueryScenarioFrontend } from "../../types";
import { aggregateQueryN1 } from "../../turismo-queries/aggregate/n-1";
import { aggregateQueryN2 } from "../../turismo-queries/aggregate/n-2";
import { aggregateQueryN3 } from "../../turismo-queries/aggregate/n-3";
import { aggregateQueryN4 } from "../../turismo-queries/aggregate/n-4";

export const turismoAGGREGATE: QueryScenarioFrontend[] = [
    aggregateQueryN1(),
    aggregateQueryN2(),
    aggregateQueryN3(),
    aggregateQueryN4()
]
