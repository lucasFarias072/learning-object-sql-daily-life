

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN2(): QueryScenarioFrontend {
    return {
        // join-2-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'join', queryId: '2', 
        queryText: "Liste o número do ônibus e o seu horário de locomoção. Considere apenas locomoções com lotação superior a 20 passageiros e que tenham ocorrido antes das 8 ou a partir das 18 horas.",
        tables: getTables([43, 44], 1),
        fields: getTableColumns([43, 44]),
        tablesNames: getTables([43, 44], 2),
        conditions: [],
        tricksterIds: [],
    }
}
