

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN2(): QueryScenarioFrontend {
    return {
        // agregacao-2-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'agregacao', queryId: '2', 
        queryText: "Mostre quantos produtos de frutaria existem cadastrados por local, apenas para os produtos com preço até R$15 o quilo. Mostre apenas a coluna da contagem.",
        tables: getTables([11], 1),
        fields: getTableColumns([11]),
        tablesNames: getTables([11], 2),
        conditions: [],
        tricksterIds: [],
    }
}
