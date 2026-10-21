

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'join', queryId: '3', 
        queryText: "Liste a descrição do produto, a hora de entrada e a hora da visita para os produtos alugados cujo ID tenha dois dígitos ou mais e para as visitas em locais do parque aquático que tenham ocorrido duas horas ou mais após a entrada.",
        tables: getTables([18, 19, 20, 21], 1),
        fields: getTableColumns([18, 19, 20, 21]),
        tablesNames: getTables([18, 19, 20, 21], 2),
        conditions: [],
        tricksterIds: [],
    }
}
