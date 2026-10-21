

import type { QueryScenarioFrontend } from "../../types";
import { subqueryQueryN1 } from "../../sinuca-queries/subquery/n-1";
import { subqueryQueryN2 } from "../../sinuca-queries/subquery/n-2";
import { subqueryQueryN3 } from "../../sinuca-queries/subquery/n-3";
import { subqueryQueryN4 } from "../../sinuca-queries/subquery/n-4";

void [subqueryQueryN3, subqueryQueryN4];

export const sinucaSUBQUERY: QueryScenarioFrontend[] = [
    subqueryQueryN1(),
    subqueryQueryN2(),
    // subqueryQueryN3(),
    // subqueryQueryN4()
]
