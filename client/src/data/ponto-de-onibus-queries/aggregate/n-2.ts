

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN2(): QueryScenarioFrontend {
    return {
        // agregacao-2-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'agregacao', queryId: '2', 
        queryText: "Mostre a descrição de cada zona e a contagem dos ônibus estão vinculados a ela. Dos grupos formados, mostre apenas as zonas que comecem com a letra 'S'.",
        tables: getTables([45, 46], 1),
        fields: getTableColumns([45, 46]),
        tablesNames: getTables([45, 46], 2),
        conditions: [],
        tricksterIds: [],
    }
}
