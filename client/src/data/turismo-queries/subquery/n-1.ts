

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#turismo-ft
        scenario: 'turismo', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste a descrição e a avaliação dos pontos turísticos com avaliação alta (4.7 ou mais) que não possuem registros de passeios atualmente.",
        tables: getTables([36, 38], 1),
        fields: getTableColumns([36, 38]),
        tablesNames: getTables([36, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
