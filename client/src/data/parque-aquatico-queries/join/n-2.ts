

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'join', queryId: '2', 
        queryText: "Liste a descrição do local visitado e a descrição do produto alugado (pode repetir) para casos de visitas de pessoas não sócias (zero em algum lugar) que entraram no parque aquático das 10 horas adiante.",
        tables: getTables([9, 18, 19, 20, 21], 1),
        fields: getTableColumns([9, 18, 19, 20, 21]),
        tablesNames: getTables([9, 18, 19, 20, 21], 2),
        conditions: [],
        tricksterIds: [],
    }
}
