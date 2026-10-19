

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function subqueryQueryN1(): QueryScenarioFrontend {
    return {
        // subconsulta-1-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'subconsulta', queryId: '1', 
        queryText: "Liste o nome de pessoas que estavam num mesmo local por onde um ônibus se locomovia na zona 'Norte' ou pessoas cujo local atual estejam no Fripisa.",
        tables: getTables([10, 43, 45, 46], 1),
        fields: getTableColumns([10, 43, 45, 46]),
        tablesNames: getTables([10, 43, 45, 46], 2),
        conditions: [],
        tricksterIds: [],
    }
}

/*
-- 

*/