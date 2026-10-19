

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN2(): QueryScenarioFrontend {
    return {
        // agregacao-2-!@#casa-ft
        scenario: 'casa', queryType: 'agregacao', queryId: '2', 
        queryText: "Liste o nome do membro da família, a descrição da área e a quantidade de rotinas. Considere apenas rotinas feitas nas áreas 'Cozinha' ou 'Banheiro' (antes de agrupar). Então, agrupe pelos campos pertinentes.",
        tables: getTables([1, 2, 3], 1),
        fields: getTableColumns([1, 2, 3]),
        tablesNames: getTables([1, 2, 3], 2),
        conditions: [],
        tricksterIds: [],
    }
}
