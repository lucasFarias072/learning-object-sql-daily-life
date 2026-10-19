

import { subqueryQueryN1 } from "../../quarto-queries/subquery/n-1";
import { subqueryQueryN2 } from "../../quarto-queries/subquery/n-2";
import { subqueryQueryN3 } from "../../quarto-queries/subquery/n-3";
import { subqueryQueryN4 } from "../../quarto-queries/subquery/n-4";
import type { QueryScenarioFrontend } from "../../types";

export const quartoSUBQUERY: QueryScenarioFrontend[] = [
    subqueryQueryN1(),
    subqueryQueryN2(),
    subqueryQueryN3(),
    subqueryQueryN4()
]
