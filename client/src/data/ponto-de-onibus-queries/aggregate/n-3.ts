

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN3(): QueryScenarioFrontend {
    return {
        // agregacao-3-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'agregacao', queryId: '3',
        queryText: "Mostre a maior lotação registrada para cada ônibus, apenas a coluna da maior lotação. Após a formação de todos os grupos, considere apenas ônibus com 2 ou mais registros de locomoção.",
        tables: getTables([43], 1),
        fields: getTableColumns([43]),
        tablesNames: getTables([43], 2),
        conditions: [],
        tricksterIds: [],
    }
}
