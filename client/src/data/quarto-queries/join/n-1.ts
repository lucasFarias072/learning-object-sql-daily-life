

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#quarto-ft
        scenario: 'quarto', queryType: 'join', queryId: '1', 
        queryText: "Liste o codinome de cada dono de quarto e o nome do objeto que ele comprou por último.",
        tables: getTables([29, 30, 32], 1),
        fields: getTableColumns([29, 30, 32]),
        tablesNames: getTables([29, 30, 32], 2),
        conditions: [],
        tricksterIds: [],
    }
}
