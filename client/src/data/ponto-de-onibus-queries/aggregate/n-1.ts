

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'agregacao', queryId: '1', 
        queryText: "Mostre quantos registros de locomoção (apenas a coluna do dado de quantidade) existem para os ônibus, durante os horários a partir das 10h. Mostre ao final, a contagem dos ônibus com mais de 2 registros de locomoção.",
        tables: getTables([43], 1),
        fields: getTableColumns([43]),
        tablesNames: getTables([43], 2),
        conditions: [],
        tricksterIds: [],
    }
}
