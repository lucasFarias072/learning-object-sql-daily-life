

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN4(): QueryScenarioFrontend {
    return {
        // agregacao-4-!@#turismo-ft
        scenario: 'turismo', queryType: 'agregacao', queryId: '4', 
        queryText: "Para cada ponto turístico, conte os registros e calcule a média das notas de indicação dos passeios realizados nele. Considere no agrupamento apenas os pontos turísticos com avaliação atual de 4 pontos ou mais. Do resultado, mantenha apenas aqueles que tiveram mais de 1 passeio registrado.",
        tables: getTables([36, 38], 1),
        fields: getTableColumns([36, 38]),
        tablesNames: getTables([36, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
