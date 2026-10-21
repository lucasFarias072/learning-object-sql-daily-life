

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#casa-ft
        scenario: 'casa', queryType: 'subconsulta', queryId: '2', 
        queryText: "Liste os nomes dos membros da família e seus IDs, considerando aqueles que têm alguma rotina na área 'Cozinha' ou 'Corredor' e aparecem como membro de origem (membro_fk_de) em algum parentesco cujo identificador de título (título_fk) tenha um único dígito.",
        tables: getTables([1, 2, 3, 4], 1),
        fields: getTableColumns([1, 2, 3, 4]),
        tablesNames: getTables([1, 2, 3, 4], 2),
        conditions: [],
        tricksterIds: [],
    }
}
