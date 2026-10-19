

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'join', queryId: '2', 
        queryText: "Liste, para cada partida, o apelido do dono da ficha, do desafiante e do vitorioso (use apelidos).",
        tables: getTables([25, 26], 1),
        fields: getTableColumns([25, 26]),
        tablesNames: getTables([25, 26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
