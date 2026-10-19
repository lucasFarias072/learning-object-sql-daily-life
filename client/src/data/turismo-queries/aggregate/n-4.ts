

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN4(): QueryScenarioFrontend {
    return {
        // agregacao-4-!@#turismo-ft
        scenario: 'turismo', queryType: 'agregacao', queryId: '4', 
        queryText: "Para cada ponto turístico, conte os registros e também a média das notas de indicação deles, encontrados nos registros dos passeios. Só entram no agrupamento aqueles com sua avaliação atual com 4 pontos adiante. Do resultado dos grupos, deixe apenas os que tiveram mais de 1 passeio registrado.",
        tables: getTables([36, 38], 1),
        fields: getTableColumns([36, 38]),
        tablesNames: getTables([36, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
