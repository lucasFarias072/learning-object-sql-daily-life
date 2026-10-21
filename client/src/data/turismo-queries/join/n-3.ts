

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#turismo-ft
        scenario: 'turismo', queryType: 'join', queryId: '3', 
        queryText: "Liste os IDs dos passeios e os nomes dos guias que trabalham em expedientes de apenas 1 turno (representados por uma letra no texto) e que conduziram passeios cuja nota de indicação foi de 4.5 ou mais e cuja avaliação do guia superou a nota de indicação. (Cláusula 'in' recomendada).",
        tables: getTables([10, 37, 38], 1),
        fields: getTableColumns([10, 37, 38]),
        tablesNames: getTables([10, 37, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
