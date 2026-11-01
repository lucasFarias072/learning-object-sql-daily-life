

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN3(): QueryScenarioFrontend {
    return {
        // subconsulta-3-!@#casa-ft
        scenario: 'casa', queryType: 'subconsulta', queryId: '3', 
        queryText: "Liste o nome dos membros da família que têm alguma rotina na área ‘Corredor’ ou que aparecem como membro de origem (membro_fk_de) em algum parentesco com título de id de número 12.",
        tables: getTables([1, 2, 3, 4], 1),
        fields: getTableColumns([1, 2, 3, 4]),
        tablesNames: getTables([1, 2, 3, 4], 2),
        conditions: [],
        tricksterIds: [],
    }
}
