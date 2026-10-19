

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#casa-ft
        scenario: 'casa', queryType: 'join', queryId: '1', 
        queryText: "Liste, para cada parentesco registrado, o nome do membro com parentesco de, o nome do membro com parentesco para e o título da relação entre eles (usar apelidos).",
        tables: getTables([2, 4, 6], 1),
        fields: getTableColumns([2, 4, 6]),
        tablesNames: getTables([2, 4, 6], 2),
        conditions: [],
        tricksterIds: [],
    }
}
