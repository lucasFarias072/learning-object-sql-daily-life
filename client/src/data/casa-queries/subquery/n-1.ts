

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#casa-ft
        scenario: 'casa', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste os nomes dos membros que têm nenhuma rotina registrada na área 'Escadaria'.",
        tables: getTables([1, 2, 3], 1),
        fields: getTableColumns([1, 2, 3]),
        tablesNames: getTables([1, 2, 3], 2),
        conditions: [],
        tricksterIds: [],
    }
}
