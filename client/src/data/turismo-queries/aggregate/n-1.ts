

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#turismo-ft
        scenario: 'turismo', queryType: 'agregacao', queryId: '1', 
        queryText: "Para cada identificador de guia, liste a quantidade de passeios realizados e a média das avaliações atribuídas a esses passeios.",
        tables: getTables([38], 1),
        fields: getTableColumns([38]),
        tablesNames: getTables([38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
