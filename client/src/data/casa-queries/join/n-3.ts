

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#casa-ft
        scenario: 'casa', queryType: 'join', queryId: '3', 
        queryText: "Liste o nome dos membros da família que não têm rotina registrada.",
        tables: getTables([2, 3], 1),
        fields: getTableColumns([2, 3]),
        tablesNames: getTables([2, 3], 2),
        conditions: [],
        tricksterIds: [],
    }
}
