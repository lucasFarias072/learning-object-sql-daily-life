

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN3(): QueryScenarioFrontend {
    return {
        // subconsulta-3-!@#turismo-ft
        scenario: 'turismo', queryType: 'subconsulta', queryId: '3', 
        queryText: "Liste a descrição do ponto turístico e a avaliação do guia nos passeios conduzidos por guias do estado 'rj'.",
        tables: getTables([36, 37, 38], 1),
        fields: getTableColumns([36, 37, 38]),
        tablesNames: getTables([36, 37, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
