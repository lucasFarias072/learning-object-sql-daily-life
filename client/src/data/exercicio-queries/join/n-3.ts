

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'join', queryId: '3', 
        queryText: "",
        tables: getTables([], 1),
        fields: getTableColumns([]),
        tablesNames: getTables([], 2),
        conditions: [],
        tricksterIds: [],
    }
}
