

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN3(): QueryScenarioFrontend {
    return {
        // subconsulta-3-!@#quarto-ft
        scenario: 'quarto', queryType: 'subconsulta', queryId: '3',
        queryText: "Liste os codinomes dos donos que tenham a característica 'Desleixada' e que possuam algum quarto com mês de adesão a partir de julho.",
        tables: getTables([29, 32, 33, 34], 1),
        fields: getTableColumns([29, 32, 33, 34]),
        tablesNames: getTables([29, 32, 33, 34], 2),
        conditions: [],
        tricksterIds: [],
    }
}
