

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'case-when', queryId: '1', 
        queryText: "Classifique os avistamentos pela natureza do 'algo' que foi avistado com os rótulos (é animal) (é coisa) (não se sabe), contando cada grupo, incluso aqueles que não foram avistados.",
        tables: getTables([40, 42], 1),
        fields: getTableColumns([40, 42]),
        tablesNames: getTables([40, 42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
