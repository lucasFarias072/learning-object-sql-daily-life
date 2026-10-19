

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN3(): QueryScenarioFrontend {
    return {
        // case-when-3-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'case-when', queryId: '3',  
        queryText: "",
        tables: getTables([], 1),
        fields: getTableColumns([]),
        tablesNames: getTables([], 2),
        conditions: [],
        tricksterIds: [],
    }
}
