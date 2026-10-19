

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'subconsulta', queryId: '2', 
        queryText: "Liste os nomes de pessoa que estavam num local que é listado como do tipo bairro ou cujo local tenha um semáforo de cor verde mais duradoura que a luz vermelha.",
        tables: getTables([8, 9, 10, 22], 1),
        fields: getTableColumns([8, 9, 10, 22]),
        tablesNames: getTables([8, 9, 10, 22], 2),
        conditions: [],
        tricksterIds: [],
    }
}
