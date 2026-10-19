

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'agregacao', queryId: '1', 
        queryText: "Qual é o valor médio das fichas de sinuca disponíveis?",
        tables: getTables([23], 1),
        fields: getTableColumns([23]),
        tablesNames: getTables([23], 2),
        conditions: [],
        tricksterIds: [],
    }
}
