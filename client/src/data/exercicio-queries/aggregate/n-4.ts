

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN4(): QueryScenarioFrontend {
    return {
        // agregacao-4-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'agregacao', queryId: '4', 
        queryText: "Liste a descrição de cada 'algo' e quantas vezes esse algo foi avistado. Considere apenas os avistamentos de algo cuja natureza seja 'animal'.",
        tables: getTables([40, 42], 1),
        fields: getTableColumns([40, 42]),
        tablesNames: getTables([40, 42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
