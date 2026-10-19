

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN3(): QueryScenarioFrontend {
    return {
        // agregacao-3-!@#casa-ft
        scenario: 'casa', queryType: 'agregacao', queryId: '3',  
        queryText: "Liste o nome do membro da família, a descrição da rotina e a quantidade de vezes que ele executa essa rotina. Mostre ao final da formação dos grupos, apenas as combinações que aparecem 1 vez.",
        tables: getTables([2, 3, 5], 1),
        fields: getTableColumns([2, 3, 5]),
        tablesNames: getTables([2, 3, 5], 2),
        conditions: [],
        tricksterIds: [],
    }
}
