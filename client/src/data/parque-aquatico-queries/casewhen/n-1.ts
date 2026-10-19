

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'case-when', queryId: '1', 
        queryText: "Selecione a coluna de identificadores das entradas no parque e junto a isso, customize entradas como 'sócio' ou 'convidado'.",
        tables: getTables([18], 1),
        fields: getTableColumns([18]),
        tablesNames: getTables([18], 2),
        conditions: [],
        tricksterIds: [],
    }
}
