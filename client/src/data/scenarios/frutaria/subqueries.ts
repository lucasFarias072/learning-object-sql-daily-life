

import type { QueryScenarioFrontend } from "../../types";
import { subqueryQueryN1 } from "../../frutaria-queries/subquery/n-1";
import { subqueryQueryN2 } from "../../frutaria-queries/subquery/n-2";
import { subqueryQueryN3 } from "../../frutaria-queries/subquery/n-3";
import { subqueryQueryN4 } from "../../frutaria-queries/subquery/n-4";

export const frutariaSUBQUERY: QueryScenarioFrontend[] = [
    subqueryQueryN1(),
    subqueryQueryN2(),
    subqueryQueryN3(),
    subqueryQueryN4()
]
