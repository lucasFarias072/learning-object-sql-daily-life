

import type { QueryScenarioFrontend } from "../../types";
import { aggregateQueryN1 } from "../../quarto-queries/aggregate/n-1";
import { aggregateQueryN2 } from "../../quarto-queries/aggregate/n-2";
import { aggregateQueryN3 } from "../../quarto-queries/aggregate/n-3";
import { aggregateQueryN4 } from "../../quarto-queries/aggregate/n-4";

void [aggregateQueryN2, aggregateQueryN3, aggregateQueryN4];

export const quartoAGGREGATE: QueryScenarioFrontend[] = [
    aggregateQueryN1(),
    // aggregateQueryN2(),
    // aggregateQueryN3(),
    // aggregateQueryN4()
]
