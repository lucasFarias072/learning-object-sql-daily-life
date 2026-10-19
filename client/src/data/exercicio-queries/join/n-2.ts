

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'join', queryId: '2', 
        queryText: "Liste o id do avistamento e o nome do membro da família que avistou, para os avistamentos onde o próprio membro não sabe o que avistou.",
        tables: getTables([2, 40, 42], 1),
        fields: getTableColumns([2, 40, 42]),
        tablesNames: getTables([2, 40, 42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
