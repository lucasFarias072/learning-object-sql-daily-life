

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN3(): QueryScenarioFrontend {
    return {
        // agregacao-3-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'agregacao', queryId: '3',
        queryText: "",
        tables: getTables([], 1),
        fields: getTableColumns([]),
        tablesNames: getTables([], 2),
        conditions: [],
        tricksterIds: [],
    }
}
