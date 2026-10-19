

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'join', queryId: '1', 
        queryText: "Liste, para cada avistamento, o nome do membro da família que avistou, o tipo de local onde ocorreu, descrição do que foi visto (quando souber o que era) e o horário.",
        tables: getTables([2, 8, 40, 42], 1),
        fields: getTableColumns([2, 8, 40, 42]),
        tablesNames: getTables([2, 8, 40, 42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
