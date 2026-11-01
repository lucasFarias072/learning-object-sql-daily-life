

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'join', queryId: '3', 
        queryText: "Liste o apelido do sinuquista vitorioso e a duração da partida, apenas para partidas que duraram 300 segundos ou mais e em que o desafiante fez 2 bolas ou menos.",
        tables: getTables([25, 26], 1),
        fields: getTableColumns([25, 26]),
        tablesNames: getTables([25, 26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
