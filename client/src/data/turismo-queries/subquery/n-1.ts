

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#turismo-ft
        scenario: 'turismo', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste as descrições dos pontos turísticos, sua avaliação, para aqueles que não possuem registros de passeios atualmente e que possuem avaliação alta (4.7 adiante).",
        tables: getTables([36, 38], 1),
        fields: getTableColumns([36, 38]),
        tablesNames: getTables([36, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
