

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN4(): QueryScenarioFrontend {
    return {
        // join-4-!@#turismo-ft
        scenario: 'turismo', queryType: 'join', queryId: '4', 
        queryText: "Liste o nome das pessoas, sua quantidade de países conhecidos, para aquelas que não têm origem registrada e que são estrangeiras.",
        tables: getTables([10, 35], 1),
        fields: getTableColumns([10, 35]),
        tablesNames: getTables([10, 35], 2),
        conditions: [],
        tricksterIds: [],
    }
}
