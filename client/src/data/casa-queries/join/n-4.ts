

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN4(): QueryScenarioFrontend {
    return {
        // join-4-!@#casa-ft
        scenario: 'casa', queryType: 'join', queryId: '4', 
        queryText: "",
        tables: getTables([], 1),
        fields: getTableColumns([]),
        tablesNames: getTables([], 2),
        conditions: [],
        tricksterIds: [],
    }
}
