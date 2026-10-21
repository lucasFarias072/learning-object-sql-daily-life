

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#onibus-ft
        scenario: 'onibus', queryType: 'subconsulta', queryId: '2', 
        queryText: "Liste a credencial dos assentos em estado 'ruim' que estão ocupados por algum passageiro com peso inferior a 75 kg.",
        tables: getTables([14, 15], 1),
        fields: getTableColumns([14, 15]),
        tablesNames: getTables([14, 15], 2),
        conditions: [],
        tricksterIds: [],
    }
}
