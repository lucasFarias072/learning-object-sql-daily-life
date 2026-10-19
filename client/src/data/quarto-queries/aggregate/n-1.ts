

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#quarto-ft
        scenario: 'quarto', queryType: 'agregacao', queryId: '1', 
        queryText: "Liste o codinome do dono, o ano de adesão do quarto dele e a soma da quantidade de suites. Agrupe pelos campos listados pertinentes e do resultado, apresente aqueles cuja soma de quantidade de suites seja pelo menos 1.",
        tables: getTables([29, 32], 1),
        fields: getTableColumns([29, 32]),
        tablesNames: getTables([29, 32], 2),
        conditions: [],
        tricksterIds: [],
    }
}
