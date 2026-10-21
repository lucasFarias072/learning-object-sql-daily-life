

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#quarto-ft
        scenario: 'quarto', queryType: 'join', queryId: '2',  
        queryText: "Liste os IDs únicos dos quartos e os codinomes de seus donos, considerando os donos com as características 'Organizada' ou 'Otimista' ou cujos quartos tenham mês de adesão um mês antes do fim do ano.",
        tables: getTables([29, 32, 33, 34], 1),
        fields: getTableColumns([29, 32, 33, 34]),
        tablesNames: getTables([29, 32, 33, 34], 2),
        conditions: [],
        tricksterIds: [],
    }
}
