

import type { QueryScenarioFrontend } from "../../types";
import { caseWhenQueryN1 } from "../../ponto-de-onibus-queries/casewhen/n-1";
import { caseWhenQueryN2 } from "../../ponto-de-onibus-queries/casewhen/n-2";
import { caseWhenQueryN3 } from "../../ponto-de-onibus-queries/casewhen/n-3";
import { caseWhenQueryN4 } from "../../ponto-de-onibus-queries/casewhen/n-4";

void [caseWhenQueryN3, caseWhenQueryN4];

export const pontoDeOnibusCASEWHEN: QueryScenarioFrontend[] = [
    caseWhenQueryN1(),
    caseWhenQueryN2(),
    // caseWhenQueryN3(),
    // caseWhenQueryN4()
]
