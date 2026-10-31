

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'join', queryId: '3', 
        queryText: "Liste a descrição do algo e a descrição da cor, apenas para algo de natureza ‘coisa’ e de cor ‘vermelho’.",
        tables: getTables([39, 40, 41], 1),
        fields: getTableColumns([39, 40, 41]),
        tablesNames: getTables([39, 40, 41], 2),
        conditions: [],
        tricksterIds: [],
    }
}
