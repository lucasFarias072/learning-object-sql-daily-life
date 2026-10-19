

import type { QueryScenarioFrontend } from "../../types";
import { caseWhenQueryN1 } from "../../exercicio-queries/casewhen/n-1";
import { caseWhenQueryN2 } from "../../exercicio-queries/casewhen/n-2";
import { caseWhenQueryN3 } from "../../exercicio-queries/casewhen/n-3";
import { caseWhenQueryN4 } from "../../exercicio-queries/casewhen/n-4";

export const exercicioCASEWHEN: QueryScenarioFrontend[] = [
    caseWhenQueryN1(),
    caseWhenQueryN2(),
    caseWhenQueryN3(),
    caseWhenQueryN4()
]
