

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#onibus-ft
        scenario: 'onibus', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste o id do passageiro e sua altura, para o passageiro que está no assento de maior id e em estado 'ruim'.",
        tables: getTables([14, 15], 1),
        fields: getTableColumns([14, 15]),
        tablesNames: getTables([14, 15], 2),
        conditions: [],
        tricksterIds: [],
    }
}
