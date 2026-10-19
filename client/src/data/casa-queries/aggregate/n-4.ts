

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN4(): QueryScenarioFrontend {
    return {
        // agregacao-4-!@#casa-ft
        scenario: 'casa', queryType: 'agregacao', queryId: '4',  
        queryText: "",
        tables: getTables([], 1),
        fields: getTableColumns([]),
        tablesNames: getTables([], 2),
        conditions: [],
        tricksterIds: [],
    }
}
