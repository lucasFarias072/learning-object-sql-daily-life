

import type { QueryScenarioFrontend } from "../../types";
import { aggregateQueryN1 } from "../../onibus-queries/aggregate/n-1";
import { aggregateQueryN2 } from "../../onibus-queries/aggregate/n-2";
import { aggregateQueryN3 } from "../../onibus-queries/aggregate/n-3";
import { aggregateQueryN4 } from "../../onibus-queries/aggregate/n-4";

export const onibusAGGREGATE: QueryScenarioFrontend[] = [
    aggregateQueryN1(),
    aggregateQueryN2(),
    aggregateQueryN3(),
    aggregateQueryN4()
]
