

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'join', queryId: '2', 
        queryText: "Liste a descrição da fruta e sua quantidade em estoque para aquelas com preço por quilo de até R$ 18 e cuja quantidade em estoque tenha um dígito ou cujo peso esteja numa faixa de até dois dígitos.",
        tables: getTables([11, 12], 1),
        fields: getTableColumns([11, 12]),
        tablesNames: getTables([11, 12], 2),
        conditions: [],
        tricksterIds: [],
    }
}
