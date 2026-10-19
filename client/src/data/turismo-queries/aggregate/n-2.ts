

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN2(): QueryScenarioFrontend {
    return {
        // agregacao-2-!@#turismo-ft
        scenario: 'turismo', queryType: 'agregacao', queryId: '2',
        queryText: "Para cada combinação de descrição do ponto turístico e identificador do guia, quantos passeios ocorreram?",
        tables: getTables([36, 38], 1),
        fields: getTableColumns([36, 38]),
        tablesNames: getTables([36, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
