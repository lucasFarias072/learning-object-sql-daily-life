

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#turismo-ft
        scenario: 'turismo', queryType: 'case-when', queryId: '1', 
        queryText: "Liste o nome de cada pessoa e uma classificação customizada que indique se ela é 'estrangeira' ou 'nativa'.",
        tables: getTables([10], 1),
        fields: getTableColumns([10]),
        tablesNames: getTables([10], 2),
        conditions: [],
        tricksterIds: [],
    }
}
