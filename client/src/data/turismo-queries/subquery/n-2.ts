

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#turismo-ft
        scenario: 'turismo', queryType: 'subconsulta', queryId: '2',
        queryText: "Liste o id do passeio, o expediente do guia e a avaliação dele, apenas para passeios feitos em pontos turísticos com avaliação de 4.5.",
        tables: getTables([36, 37, 38], 1),
        fields: getTableColumns([36, 37, 38]),
        tablesNames: getTables([36, 37, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
