

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#quarto-ft
        scenario: 'quarto', queryType: 'case-when', queryId: '2',  
        queryText: "Crie duas colunas customizadas, uma para definir época do quarto, outra para definir se o quarto tem banheiro. Use os rótulos (antigo) para antes dos anos 2000, (quase novo) para até o ano de 2015, (novo) para qualquer outra situação. Use os rótulos (sem suite) para os quartos com zero banheiros e (com suite) para qualquer coisa além de zero. Agrupe pelos rótulos e conte-os.",
        tables: getTables([32], 1),
        fields: getTableColumns([32]),
        tablesNames: getTables([32], 2),
        conditions: [],
        tricksterIds: [],
    }
}
