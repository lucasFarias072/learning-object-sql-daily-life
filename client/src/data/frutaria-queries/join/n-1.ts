

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'join', queryId: '1', 
        queryText: "Liste o nome de cada fruta vendida, o tipo do local onde é vendida e o nome desse local.",
        tables: getTables([8, 9, 11], 1),
        fields: getTableColumns([8, 9, 11]),
        tablesNames: getTables([8, 9, 11], 2),
        conditions: [],
        tricksterIds: [],
    }
}
