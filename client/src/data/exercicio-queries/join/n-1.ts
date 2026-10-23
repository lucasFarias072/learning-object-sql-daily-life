

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'join', queryId: '1', 
        queryText: "Para cada avistamento, liste o nome do membro da família que avistou, a descrição do tipo do local onde ocorreu, descrição do que foi visto (quando se soube o que era) e o horário.",
        tables: getTables([2, 8, 40, 42], 1),
        fields: getTableColumns([2, 8, 40, 42]),
        tablesNames: getTables([2, 8, 40, 42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
