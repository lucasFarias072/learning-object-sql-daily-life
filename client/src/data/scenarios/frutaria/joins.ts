

import type { QueryScenarioFrontend } from "../../types";
import { joinQueryN1 } from "../../frutaria-queries/join/n-1";
import { joinQueryN2 } from "../../frutaria-queries/join/n-2";
import { joinQueryN3 } from "../../frutaria-queries/join/n-3";
import { joinQueryN4 } from "../../frutaria-queries/join/n-4";

export const frutariaJOIN: QueryScenarioFrontend[] = [
    joinQueryN1(),
    joinQueryN2(),
    joinQueryN3(),
    joinQueryN4()
]
