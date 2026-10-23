

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#onibus-ft
        scenario: 'onibus', queryType: 'join', queryId: '1', 
        queryText: "Liste o identificador de cada passageiro sentado, a credencial do assento e a descrição de cada item que ele carrega.",
        tables: getTables([13, 14, 15, 16], 1),
        fields: getTableColumns([13, 14, 15, 16]),
        tablesNames: getTables([13, 14, 15, 16], 2),
        conditions: [],
        tricksterIds: [],
    }
}
