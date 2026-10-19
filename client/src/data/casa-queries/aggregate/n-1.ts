

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#casa-ft
        scenario: 'casa', queryType: 'agregacao', queryId: '1', 
        queryText: "Para cada grupo formado de identificadores de membro da família e área, quantas rotinas foram registradas?",
        tables: getTables([3], 1),
        fields: getTableColumns([3]),
        tablesNames: getTables([3], 2),
        conditions: [],
        tricksterIds: [],
    }
}
