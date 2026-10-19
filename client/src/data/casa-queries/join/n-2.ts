

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#casa-ft
        scenario: 'casa', queryType: 'join', queryId: '2', 
        queryText: "Liste o nome do membro da família e a descrição da área, para as rotinas registradas pelo membro 'Elano' ou que aconteceram na área 'Banheiro'.",
        tables: getTables([1, 2, 3], 1),
        fields: getTableColumns([1, 2, 3]),
        tablesNames: getTables([1, 2, 3], 2),
        conditions: [],
        tricksterIds: [],
    }
}
