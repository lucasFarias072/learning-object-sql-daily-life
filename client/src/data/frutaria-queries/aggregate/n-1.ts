

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'agregacao', queryId: '1', 
        queryText: "Para cada grupo de local, a contagem das frutas no local e também a fruta mais cara dentre as achadas.",
        tables: getTables([9, 11], 1),
        fields: getTableColumns([9, 11]),
        tablesNames: getTables([9, 11], 2),
        conditions: [],
        tricksterIds: [],
    }
}
