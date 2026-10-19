

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN4(): QueryScenarioFrontend {
    return {
        // subconsulta-4-!@#turismo-ft
        scenario: 'turismo', queryType: 'subconsulta', queryId: '4', 
        queryText: "",
        tables: getTables([], 1),
        fields: getTableColumns([]),
        tablesNames: getTables([], 2),
        conditions: [],
        tricksterIds: [],
    }
}
