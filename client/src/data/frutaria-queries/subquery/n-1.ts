

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste a descrição das frutas que estão com estoque de um dígito ou com estoque de 25 unidades adiante.",
        tables: getTables([11, 12], 1),
        fields: getTableColumns([11, 12]),
        tablesNames: getTables([11, 12], 2),
        conditions: [],
        tricksterIds: [],
    }
}
