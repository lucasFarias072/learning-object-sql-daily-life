

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'subconsulta', queryId: '2',
        queryText: "Liste a descrição do local e a hora da visita, apenas para visitas de pessoas sócias.",
        tables: getTables([9, 18, 20], 1),
        fields: getTableColumns([9, 18, 20]),
        tablesNames: getTables([9, 18, 20], 2),
        conditions: [],
        tricksterIds: [],
    }
}
