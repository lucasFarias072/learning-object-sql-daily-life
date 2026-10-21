

import { subqueryQueryN1 } from "../../exercicio-queries/subquery/n-1";
import { subqueryQueryN2 } from "../../exercicio-queries/subquery/n-2";
import { subqueryQueryN3 } from "../../exercicio-queries/subquery/n-3";
import { subqueryQueryN4 } from "../../exercicio-queries/subquery/n-4";
import type { QueryScenarioFrontend } from "../../types";

void [subqueryQueryN3, subqueryQueryN4];

export const exercicioSUBQUERY: QueryScenarioFrontend[] = [
    subqueryQueryN1(),
    subqueryQueryN2(),
    // subqueryQueryN3(),
    // subqueryQueryN4()
]
