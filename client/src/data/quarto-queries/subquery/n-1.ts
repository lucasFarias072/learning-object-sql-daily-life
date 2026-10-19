

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#quarto-ft
        scenario: 'quarto', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste o codinome de cada dono que possui suíte em seu quarto.",
        tables: getTables([29, 32], 1),
        fields: getTableColumns([29, 32]),
        tablesNames: getTables([29, 32], 2),
        conditions: [],
        tricksterIds: [],
    }
}
