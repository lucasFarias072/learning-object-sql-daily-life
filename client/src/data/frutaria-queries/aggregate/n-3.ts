

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN3(): QueryScenarioFrontend {
    return {
        // agregacao-3-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'agregacao', queryId: '3',
        queryText: "Liste a descrição do local, a descrição do tipo de local e a média do preço atual por kg das frutas e considere apenas frutas com peso médio por unidade a partir de 100g. Agrupe os campos necessários.",
        tables: getTables([8, 9, 11], 1),
        fields: getTableColumns([8, 9, 11]),
        tablesNames: getTables([8, 9, 11], 2),
        conditions: [],
        tricksterIds: [],
    }
}
