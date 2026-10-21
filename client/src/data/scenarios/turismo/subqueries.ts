

import type { QueryScenarioFrontend } from "../../types";
import { subqueryQueryN1 } from "../../turismo-queries/subquery/n-1";
import { subqueryQueryN2 } from "../../turismo-queries/subquery/n-2";
import { subqueryQueryN3 } from "../../turismo-queries/subquery/n-3";
import { subqueryQueryN4 } from "../../turismo-queries/subquery/n-4";

void [subqueryQueryN4];

export const turismoSUBQUERY: QueryScenarioFrontend[] = [
    subqueryQueryN1(),
    subqueryQueryN2(),
    subqueryQueryN3(),
    // subqueryQueryN4()
]
