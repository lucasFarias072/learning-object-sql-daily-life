

import type { QueryScenarioFrontend } from "../../types";
import { aggregateQueryN1 } from "../../exercicio-queries/aggregate/n-1";
import { aggregateQueryN2 } from "../../exercicio-queries/aggregate/n-2";
import { aggregateQueryN3 } from "../../exercicio-queries/aggregate/n-3";
import { aggregateQueryN4 } from "../../exercicio-queries/aggregate/n-4";

export const exercicioAGGREGATE: QueryScenarioFrontend[] = [
    aggregateQueryN1(),
    aggregateQueryN2(),
    aggregateQueryN3(),
    aggregateQueryN4()
]
