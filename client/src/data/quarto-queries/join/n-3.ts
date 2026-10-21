

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#quarto-ft
        scenario: 'quarto', queryType: 'join', queryId: '3',  
        queryText: "Liste o codinome do dono do quarto e a descrição do último objeto que ele comprou para esse quarto. Considere apenas os quartos sem suíte e com mês de adesão a partir de julho.",
        tables: getTables([29, 30, 32], 1),
        fields: getTableColumns([29, 30, 32]),
        tablesNames: getTables([29, 30, 32], 2),
        conditions: [],
        tricksterIds: [],
    }
}
