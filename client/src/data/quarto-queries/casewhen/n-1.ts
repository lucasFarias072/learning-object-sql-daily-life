

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#quarto-ft
        scenario: 'quarto', queryType: 'case-when', queryId: '1', 
        queryText: "Crie uma coluna customizada com os rótulos (sem suíte), (suíte simples), (suíte robusta) com base nos valores atuais de 'suite_qtd'. Conte a quantidade de cada grupo. Agrupe e ordene pelo próprio rótulo.",
        tables: getTables([32], 1),
        fields: getTableColumns([32]),
        tablesNames: getTables([32], 2),
        conditions: [],
        tricksterIds: [],
    }
}
