

import { joinQueryN1 } from "../../turismo-queries/join/n-1";
import { joinQueryN2 } from "../../turismo-queries/join/n-2";
import { joinQueryN3 } from "../../turismo-queries/join/n-3";
import { joinQueryN4 } from "../../turismo-queries/join/n-4";
import type { QueryScenarioFrontend } from "../../types";

void [joinQueryN4];

export const turismoJOIN: QueryScenarioFrontend[] = [
    joinQueryN1(),
    joinQueryN2(),
    joinQueryN3(),
    // joinQueryN4()
]
