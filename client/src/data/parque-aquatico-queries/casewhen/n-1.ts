

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'case-when', queryId: '1', 
        queryText: "Liste a coluna de identificadores das entradas no parque e também customize uma coluna para o tipo de pessoa que entrou. Os tipos podem ser (socio) ou (convidado), observe as variações de valores em um determinado campo.",
        tables: getTables([18], 1),
        fields: getTableColumns([18]),
        tablesNames: getTables([18], 2),
        conditions: [],
        tricksterIds: [],
    }
}
