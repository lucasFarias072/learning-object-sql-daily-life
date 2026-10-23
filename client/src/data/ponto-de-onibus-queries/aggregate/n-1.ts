

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'agregacao', queryId: '1', 
        queryText: "Liste somente a quantidade de locomoções em cada grupo formado por ônibus, considerando os registros a partir das 10h e os grupos com mais de 2 locomoções nesse período.",
        tables: getTables([43], 1),
        fields: getTableColumns([43]),
        tablesNames: getTables([43], 2),
        conditions: [],
        tricksterIds: [],
    }
}
