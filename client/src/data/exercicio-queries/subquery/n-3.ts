

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN3(): QueryScenarioFrontend {
    return {
        // subconsulta-3-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'subconsulta', queryId: '3',
        queryText: "",
        tables: getTables([], 1),
        fields: getTableColumns([]),
        tablesNames: getTables([], 2),
        conditions: [],
        tricksterIds: [],
    }
}
