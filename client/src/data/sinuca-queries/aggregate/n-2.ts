

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN2(): QueryScenarioFrontend {
    return {
        // agregacao-2-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'agregacao', queryId: '2', 
        queryText: "Para cada tipo de sinuca favoritada, traga a contagem da distribuição de cada tipo.",
        tables: getTables([25], 1),
        fields: getTableColumns([25]),
        tablesNames: getTables([25], 2),
        conditions: [],
        tricksterIds: [],
    }
}
