

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#turismo-ft
        scenario: 'turismo', queryType: 'join', queryId: '1', 
        queryText: "Liste, para cada passeio, o identificador do guia responsável, a pessoa atendida que contratou e o ponto turístico visitado.",
        tables: getTables([10, 36, 37, 38], 1),
        fields: getTableColumns([10, 36, 37, 38]),
        tablesNames: getTables([10, 36, 37, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
