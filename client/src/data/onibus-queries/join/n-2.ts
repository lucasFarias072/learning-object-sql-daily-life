

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#onibus-ft
        scenario: 'onibus', queryType: 'join', queryId: '2', 
        queryText: "Liste os identificadores dos passageiros (repetições possíveis) que participaram de alguma conversa no ônibus, seja como pessoa_x ou pessoa_y.",
        tables: getTables([15, 17], 1),
        fields: getTableColumns([15, 17]),
        tablesNames: getTables([15, 17], 2),
        conditions: [],
        tricksterIds: [],
    }
}
