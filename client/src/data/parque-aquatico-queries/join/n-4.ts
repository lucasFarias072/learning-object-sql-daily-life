

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN4(): QueryScenarioFrontend {
    return {
        // join-4-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'join', queryId: '4', 
        queryText: "",
        tables: getTables([], 1),
        fields: getTableColumns([]),
        tablesNames: getTables([], 2),
        conditions: [],
        tricksterIds: [],
    }
}
