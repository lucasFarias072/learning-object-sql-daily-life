

import { joinQueryN1 } from "../../exercicio-queries/join/n-1";
import { joinQueryN2 } from "../../exercicio-queries/join/n-2";
import { joinQueryN3 } from "../../exercicio-queries/join/n-3";
import { joinQueryN4 } from "../../exercicio-queries/join/n-4";
import type { QueryScenarioFrontend } from "../../types";

export const exercicioJOIN: QueryScenarioFrontend[] = [
    joinQueryN1(),
    joinQueryN2(),
    joinQueryN3(),
    joinQueryN4()
]
