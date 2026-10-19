

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN2(): QueryScenarioFrontend {
    return {
        // agregacao-2-!@#onibus-ft
        scenario: 'onibus', queryType: 'agregacao', queryId: '2', 
        queryText: "Liste a descrição de cada item e a quantidade de registros em que ele aparece. Considere apenas passageiros que estão sentados (assento com valor numérico definido). Agrupe pelos campos pertinentes.",
        tables: getTables([13, 15, 16], 1),
        fields: getTableColumns([13, 15, 16]),
        tablesNames: getTables([13, 15, 16], 2),
        conditions: [],
        tricksterIds: [],
    }
}
