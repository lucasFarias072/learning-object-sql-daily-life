

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'join', queryId: '1', 
        queryText: "Liste a descrição do local visitado e a hora de entrada. Considere apenas visitas de pessoas sócias (valor 1 numa certa tabela) cuja hora de entrada tenha sido antes das 9 ou a partir das 10.",
        tables: getTables([9, 18, 20], 1),
        fields: getTableColumns([9, 18, 20]),
        tablesNames: getTables([9, 18, 20], 2),
        conditions: [],
        tricksterIds: [],
    }
}
