

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN3(): QueryScenarioFrontend {
    return {
        // agregacao-3-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'agregacao', queryId: '3', 
        queryText: "Liste somente a quantidade de avistamentos em cada grupo formado por membro da família, considerando os grupos com mais de 3 avistamentos.",
        tables: getTables([42], 1),
        fields: getTableColumns([42]),
        tablesNames: getTables([42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
