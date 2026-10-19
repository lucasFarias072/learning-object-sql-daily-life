

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#onibus-ft
        scenario: 'onibus', queryType: 'agregacao', queryId: '1',
        queryText: "Liste a descrição do item e a quantidade de registros em que ele aparece dentre os passageiros. Agrupe pela listagem pertinente e depois mantenha a descrição dos itens com 3 registros encontrados ou adiante.",
        tables: getTables([13, 16], 1),
        fields: getTableColumns([13, 16]),
        tablesNames: getTables([13, 16], 2),
        conditions: [],
        tricksterIds: [],
    }
}
