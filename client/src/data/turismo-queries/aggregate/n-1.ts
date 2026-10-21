

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#turismo-ft
        scenario: 'turismo', queryType: 'agregacao', queryId: '1', 
        queryText: "Para cada guia, mostre quantos passeios fez e a média das avaliações atribuídas a cada passeio realizado.",
        tables: getTables([38], 1),
        fields: getTableColumns([38]),
        tablesNames: getTables([38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
