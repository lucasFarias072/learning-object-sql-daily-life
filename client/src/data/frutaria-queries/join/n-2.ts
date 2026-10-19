

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'join', queryId: '2', 
        queryText: "Liste a descrição da fruta e a quantidade em estoque dela, para aquelas com preço do quilo até R$ 18 reais e que a quantidade em estoque esteja dentro do valor de um dígito ou que o peso esteja numa faixa de até 2 dígitos.",
        tables: getTables([11, 12], 1),
        fields: getTableColumns([11, 12]),
        tablesNames: getTables([11, 12], 2),
        conditions: [],
        tricksterIds: [],
    }
}
