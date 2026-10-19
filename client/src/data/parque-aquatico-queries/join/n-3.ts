

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'join', queryId: '3', 
        queryText: "Liste a descrição do produto, a hora de entrada e a hora de visita, para os produtos que foram alugados cujo id seja de dois dígitos adiante e para visitas em locais do parque aquático que aconteceram de 2h depois da entrada adiante.",
        tables: getTables([18, 19, 20, 21], 1),
        fields: getTableColumns([18, 19, 20, 21]),
        tablesNames: getTables([18, 19, 20, 21], 2),
        conditions: [],
        tricksterIds: [],
    }
}
