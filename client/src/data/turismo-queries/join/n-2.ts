

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#turismo-ft
        scenario: 'turismo', queryType: 'join', queryId: '2',
        queryText: "Liste a descrição dos pontos turísticos que ainda não receberam passeio e que tenham a letra 'a' na sua descrição.",
        tables: getTables([36, 38], 1),
        fields: getTableColumns([36, 38]),
        tablesNames: getTables([36, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
