

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN3(): QueryScenarioFrontend {
    return {
        // case-when-3-!@#turismo-ft
        scenario: 'turismo', queryType: 'case-when', queryId: '3', 
        queryText: "Crie uma coluna customizada com os rótulos (aspirante), (explorador), (andarilho), para classificar pessoas de acordo com sua bagagem de viagens. Para ser aspirante pode ser nada ou uma viagem, para ser explorador já deve ter chegado até 3, e para além disso é andarilho. Conte esses rótulos e agrupe por eles.",
        tables: getTables([10], 1),
        fields: getTableColumns([10]),
        tablesNames: getTables([10], 2),
        conditions: [],
        tricksterIds: [],
    }
}
