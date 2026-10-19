

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#quarto-ft
        scenario: 'quarto', queryType: 'join', queryId: '2',  
        queryText: "Liste os ids dos quartos únicos, codinome dos donos dos quartos, para os donos de características 'Organizada' ou 'Otimista' ou que o mês de adesão do quarto tenha ocorrido um mês antes do fim do ano.",
        tables: getTables([29, 32, 33, 34], 1),
        fields: getTableColumns([29, 32, 33, 34]),
        tablesNames: getTables([29, 32, 33, 34], 2),
        conditions: [],
        tricksterIds: [],
    }
}
