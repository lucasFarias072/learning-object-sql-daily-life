

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#onibus-ft
        scenario: 'onibus', queryType: 'case-when', queryId: '1', 
        queryText: "Para cada passageiro sentado ou em pé (crie uma classificação customizada), agrupe pela contagem dessa distinção.",
        tables: getTables([14, 15], 1),
        fields: getTableColumns([14, 15]),
        tablesNames: getTables([14, 15], 2),
        conditions: [],
        tricksterIds: [],
    }
}
