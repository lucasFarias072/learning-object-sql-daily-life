

import type { QueryScenarioFrontend } from "../../types";
import { caseWhenQueryN1 } from "../../turismo-queries/casewhen/n-1";
import { caseWhenQueryN2 } from "../../turismo-queries/casewhen/n-2";
import { caseWhenQueryN3 } from "../../turismo-queries/casewhen/n-3";
import { caseWhenQueryN4 } from "../../turismo-queries/casewhen/n-4";

void [caseWhenQueryN4];

export const turismoCASEWHEN: QueryScenarioFrontend[] = [
    caseWhenQueryN1(),
    caseWhenQueryN2(),
    caseWhenQueryN3(),
    // caseWhenQueryN4()
]
