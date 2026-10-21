

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'subconsulta', queryId: '2', 
        queryText: "Liste os nomes dos membros da família que registraram algum avistamento, mas que não sabem o que foi visto ou não se lembram do horário.",
        tables: getTables([2, 42], 1),
        fields: getTableColumns([2, 42]),
        tablesNames: getTables([2, 42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
