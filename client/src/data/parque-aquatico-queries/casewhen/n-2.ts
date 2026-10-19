

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'case-when', queryId: '2',  
        queryText: "Liste os ids de entrada e crie uma coluna customizada de nome exato 'status', com base no status da pessoa que entrou e no horário do dia. As categorias são (visitante matutino), (visitante vespertino), (sócio matutino), (sócio vespertino). Os números 0 e 1 definem quem é sócio ou visitante. Para os horários, considere antes do meio dia como matutino e o resto como vespertino. Ordene pelo rótulo da coluna customizada.",
        tables: getTables([18], 1),
        fields: getTableColumns([18]),
        tablesNames: getTables([18], 2),
        conditions: [],
        tricksterIds: [],
    }
}
