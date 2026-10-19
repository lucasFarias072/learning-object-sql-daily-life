

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#casa-ft
        scenario: 'casa', queryType: 'subconsulta', queryId: '2', 
        queryText: "Liste o nome dos membros da família, seus ids de membros, para os que têm alguma rotina na área 'Cozinha' ou 'Corredor' e que apareçam como membro de origem (membro_fk_de) em algum parentesco cujo (título_fk) seja de 1 dígito.",
        tables: getTables([1, 2, 3, 4], 1),
        fields: getTableColumns([1, 2, 3, 4]),
        tablesNames: getTables([1, 2, 3, 4], 2),
        conditions: [],
        tricksterIds: [],
    }
}
