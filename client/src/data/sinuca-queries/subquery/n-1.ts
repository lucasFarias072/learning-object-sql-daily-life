

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste o nome de cada sinuquista que já foi dono da ficha em alguma partida.",
        tables: getTables([25, 26], 1),
        fields: getTableColumns([25, 26]),
        tablesNames: getTables([25, 26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
