

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN2(): QueryScenarioFrontend {
    return {
        // agregacao-2-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'agregacao', queryId: '2', 
        queryText: "Liste a descrição do local e a quantidade de visitas realizadas nele. Considere apenas visitas de sócios e mostre ao final, somente os locais que receberam visita única.",
        tables: getTables([9, 18, 20], 1),
        fields: getTableColumns([9, 18, 20]),
        tablesNames: getTables([9, 18, 20], 2),
        conditions: [],
        tricksterIds: [],
    }
}
