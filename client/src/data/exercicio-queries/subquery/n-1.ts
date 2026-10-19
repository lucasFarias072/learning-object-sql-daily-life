

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste o id do avistamento, o identificador do algo que foi visto e o nome do membro da família, para avistamentos de algo de natureza 'coisa' cuja descrição termine com a letra 'a'.",
        tables: getTables([2, 40, 42], 1),
        fields: getTableColumns([2, 40, 42]),
        tablesNames: getTables([2, 40, 42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
