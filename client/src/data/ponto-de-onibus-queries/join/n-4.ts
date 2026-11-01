

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN4(): QueryScenarioFrontend {
    return {
        // join-4-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'join', queryId: '4', 
        queryText: "Liste os números dos ônibus, descrição dos locais por onde passaram, tipo do local por onde passaram, a partir dos registros de locomoção",
        tables: getTables([8, 9, 43, 44], 1),
        fields: getTableColumns([8, 9, 43, 44]),
        tablesNames: getTables([8, 9, 43, 44], 2),
        conditions: [],
        tricksterIds: [],
    }
}
