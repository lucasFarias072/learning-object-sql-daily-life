

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste a descrição dos produtos do parque aquático que nunca foram alugados.",
        tables: getTables([19, 21], 1),
        fields: getTableColumns([19, 21]),
        tablesNames: getTables([19, 21], 2),
        conditions: [],
        tricksterIds: [],
    }
}
