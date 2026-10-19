

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN2(): QueryScenarioFrontend {
    return {
        // agregacao-2-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'agregacao', queryId: '2', 
        queryText: "Quantos tipos diferentes de 'algo' já foram avistados pela família?",
        tables: getTables([42], 1),
        fields: getTableColumns([42]),
        tablesNames: getTables([42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
