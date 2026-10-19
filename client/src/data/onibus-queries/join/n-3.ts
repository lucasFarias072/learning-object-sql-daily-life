

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#onibus-ft
        scenario: 'onibus', queryType: 'join', queryId: '3', 
        queryText: "Liste o id da conversa e o id do assento de cada um dos dois passageiros (apelidos diferentes para diferenciar), apenas para conversas em que os dois passageiros estavam sentados.",
        tables: getTables([15, 17], 1),
        fields: getTableColumns([15, 17]),
        tablesNames: getTables([15, 17], 2),
        conditions: [],
        tricksterIds: [],
    }
}
