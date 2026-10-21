

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN2(): QueryScenarioFrontend {
    return {
        // subconsulta-2-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'subconsulta', queryId: '2', 
        queryText: "Liste a descrição das frutas que têm estoque atual entre 10 e 20 unidades e cujo resultado da subtração entre a quantidade em estoque e o identificador estrangeiro do produto na tabela 'estoque' seja par.",
        tables: getTables([11, 12], 1),
        fields: getTableColumns([11, 12]),
        tablesNames: getTables([11, 12], 2),
        conditions: [],
        tricksterIds: [],
    }
}
