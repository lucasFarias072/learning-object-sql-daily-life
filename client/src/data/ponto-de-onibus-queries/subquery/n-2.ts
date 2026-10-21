

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'subconsulta', queryId: '2', 
        queryText: "Liste os nomes das pessoas que estavam em um local classificado como bairro ou em um local onde a luz verde do semáforo durasse mais que a vermelha.",
        tables: getTables([8, 9, 10, 22], 1),
        fields: getTableColumns([8, 9, 10, 22]),
        tablesNames: getTables([8, 9, 10, 22], 2),
        conditions: [],
        tricksterIds: [],
    }
}
