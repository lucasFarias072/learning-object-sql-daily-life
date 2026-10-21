

import { caseWhenQueryN1 } from "../../casa-queries/casewhen/n-1";
import { caseWhenQueryN2 } from "../../casa-queries/casewhen/n-2";
import { caseWhenQueryN3 } from "../../casa-queries/casewhen/n-3";
import { caseWhenQueryN4 } from "../../casa-queries/casewhen/n-4";
import type { QueryScenarioFrontend } from "../../types";

void [caseWhenQueryN3, caseWhenQueryN4];

export const casaCASEWHEN: QueryScenarioFrontend[] = [
    caseWhenQueryN1(),
    caseWhenQueryN2(),
    // caseWhenQueryN3(),
    // caseWhenQueryN4()
]
