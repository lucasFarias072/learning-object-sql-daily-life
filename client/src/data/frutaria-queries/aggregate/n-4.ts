

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN4(): QueryScenarioFrontend {
    return {
        // agregacao-4-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'agregacao', queryId: '4', 
        queryText: "Liste a descrição do local e traga a contagem de frutas que cada local possui, junto com a soma dos pesos para as frutas encontradas, com exclusão das frutas com preço até R$ 15.",
        tables: getTables([9, 11], 1),
        fields: getTableColumns([9, 11]),
        tablesNames: getTables([9, 11], 2),
        conditions: [],
        tricksterIds: [],
    }
}
