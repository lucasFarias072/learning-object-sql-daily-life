

import type { QueryScenarioFrontend } from "../../types";
import { joinQueryN1 } from "../../sinuca-queries/join/n-1";
import { joinQueryN2 } from "../../sinuca-queries/join/n-2";
import { joinQueryN3 } from "../../sinuca-queries/join/n-3";
import { joinQueryN4 } from "../../sinuca-queries/join/n-4";

void [joinQueryN3, joinQueryN4];

export const sinucaJOIN: QueryScenarioFrontend[] = [
    joinQueryN1(),
    joinQueryN2(),
    // joinQueryN3(),
    // joinQueryN4()
]
