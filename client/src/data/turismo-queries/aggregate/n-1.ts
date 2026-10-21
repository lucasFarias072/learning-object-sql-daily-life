

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#turismo-ft
        scenario: 'turismo', queryType: 'agregacao', queryId: '1', 
        queryText: "Para cada guia, quantos passeios fez e qual a média das avaliações atribuidas a eles em cada passeio achado?",
        tables: getTables([38], 1),
        fields: getTableColumns([38]),
        tablesNames: getTables([38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
