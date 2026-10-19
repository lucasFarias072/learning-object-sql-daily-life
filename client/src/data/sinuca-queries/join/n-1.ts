

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'join', queryId: '1', 
        queryText: "Liste (sem repetir) os apelidos de todos os sinuquistas que apareceram em alguma partida, seja ele como dono da ficha, desafiante ou vitorioso.",
        tables: getTables([25, 26], 1),
        fields: getTableColumns([25, 26]),
        tablesNames: getTables([25, 26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
