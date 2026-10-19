

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'subconsulta', queryId: '2',  
        queryText: "Liste os apelidos dos sinuquistas que nunca venceram uma partida, mas que já participaram como desafiante pelo menos uma vez.",
        tables: getTables([25, 26], 1),
        fields: getTableColumns([25, 26]),
        tablesNames: getTables([25, 26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
