

import type { QueryScenarioFrontend } from "../../types";
import { caseWhenQueryN1 } from "../../sinuca-queries/casewhen/n-1";
import { caseWhenQueryN2 } from "../../sinuca-queries/casewhen/n-2";
import { caseWhenQueryN3 } from "../../sinuca-queries/casewhen/n-3";
import { caseWhenQueryN4 } from "../../sinuca-queries/casewhen/n-4";

export const sinucaCASEWHEN: QueryScenarioFrontend[] = [
    caseWhenQueryN1(),
    caseWhenQueryN2(),
    caseWhenQueryN3(),
    caseWhenQueryN4()
]
