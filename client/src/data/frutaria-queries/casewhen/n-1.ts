

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'case-when', queryId: '1', 
        queryText: "Liste as frutas com uma faixa de pesos customizados (1 para peso abaixo de 100g, 2 para peso até 250g, 3 para aqueles acima disso) e ordene por essa faixa.",
        tables: getTables([11], 1),
        fields: getTableColumns([11]),
        tablesNames: getTables([11], 2),
        conditions: [],
        tricksterIds: [],
    }
}
