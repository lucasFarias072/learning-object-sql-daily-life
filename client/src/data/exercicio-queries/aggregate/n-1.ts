

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'agregacao', queryId: '1', 
        queryText: "Para cada combinação de membro de uma família e tipo de local, quantos avistamentos foram registrados?",
        tables: getTables([2, 8, 42], 1),
        fields: getTableColumns([2, 8, 42]),
        tablesNames: getTables([2, 8, 42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
