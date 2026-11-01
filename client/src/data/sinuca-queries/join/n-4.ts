

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN4(): QueryScenarioFrontend {
    return {
        // join-4-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'join', queryId: '4', 
        queryText: "Liste o id da aposta, a descrição da sinuca e a duração da partida, apenas para apostas que acertaram no vitorioso, em partidas que duraram até 512 segundos.",
        tables: getTables([24, 26, 27], 1),
        fields: getTableColumns([24, 26, 27]),
        tablesNames: getTables([24, 26, 27], 2),
        conditions: [],
        tricksterIds: [],
    }
}
