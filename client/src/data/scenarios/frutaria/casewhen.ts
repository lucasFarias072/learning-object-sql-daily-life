

import type { QueryScenarioFrontend } from "../../types";
import { caseWhenQueryN1 } from "../../frutaria-queries/casewhen/n-1";
import { caseWhenQueryN2 } from "../../frutaria-queries/casewhen/n-2";
import { caseWhenQueryN3 } from "../../frutaria-queries/casewhen/n-3";
import { caseWhenQueryN4 } from "../../frutaria-queries/casewhen/n-4";

void [caseWhenQueryN3, caseWhenQueryN4];

export const frutariaCASEWHEN: QueryScenarioFrontend[] = [
    caseWhenQueryN1(),
    caseWhenQueryN2(),
    // caseWhenQueryN3(),
    // caseWhenQueryN4()
]
