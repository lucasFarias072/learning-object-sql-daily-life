

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN3(): QueryScenarioFrontend {
    return {
        // subconsulta-3-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'subconsulta', queryId: '3', 
        queryText: "",
        tables: getTables([], 1),
        fields: getTableColumns([]),
        tablesNames: getTables([], 2),
        conditions: [],
        tricksterIds: [],
    }
}
