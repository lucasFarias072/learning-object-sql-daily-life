

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'agregacao', queryId: '1', 
        queryText: "Para cada identificador de local, liste a quantidade de frutas cadastradas e o maior preço atual por quilo entre elas.",
        tables: getTables([11], 1),
        fields: getTableColumns([11]),
        tablesNames: getTables([11], 2),
        conditions: [],
        tricksterIds: [],
    }
}
