

import type { QueryScenarioFrontend } from "../../types";
import { aggregateQueryN1 } from "../../casa-queries/aggregate/n-1";
import { aggregateQueryN2 } from "../../casa-queries/aggregate/n-2";
import { aggregateQueryN3 } from "../../casa-queries/aggregate/n-3";
import { aggregateQueryN4 } from "../../casa-queries/aggregate/n-4";

export const casaAGGREGATE: QueryScenarioFrontend[] = [
    aggregateQueryN1(),
    aggregateQueryN2(),
    aggregateQueryN3(),
    aggregateQueryN4()
]
