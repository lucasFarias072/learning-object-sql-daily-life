

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#quarto-ft
        scenario: 'quarto', queryType: 'subconsulta', queryId: '2', 
        queryText: "Liste o codinome de donos de quarto que obtiveram quartos no mesmo mês do dono de quarto com menor mês de adesão.",
        tables: getTables([29, 32], 1),
        fields: getTableColumns([29, 32]),
        tablesNames: getTables([29, 32], 2),
        conditions: [],
        tricksterIds: [],
    }
}
