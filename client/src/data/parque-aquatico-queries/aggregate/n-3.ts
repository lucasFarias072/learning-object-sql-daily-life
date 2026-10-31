

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN3(): QueryScenarioFrontend {
    return {
        // agregacao-3-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'agregacao', queryId: '3',
        queryText: "Mostre quantas entradas de sócios (coluna esta_socio) existem para cada hora de entrada. Mostre apenas a coluna da contagem.",
        tables: getTables([18], 1),
        fields: getTableColumns([18]),
        tablesNames: getTables([18], 2),
        conditions: [],
        tricksterIds: [],
    }
}
