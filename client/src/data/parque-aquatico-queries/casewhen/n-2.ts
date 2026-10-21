

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'case-when', queryId: '2',  
        queryText: "Liste os ids de entrada no parque aquático e crie uma coluna customizada com base no status da pessoa que entrou e no horário do dia. As categorias são (visita_matutina), (visita_vespertina), (socio_matutino), (socio_vespertino). Os valores 0 e 1 definem respectivamente quem é visitante ou sócio. Para os horários, considere antes do meio dia como matutino e o resto como vespertino. Ordene pelo rótulo da coluna customizada.",
        tables: getTables([18], 1),
        fields: getTableColumns([18]),
        tablesNames: getTables([18], 2),
        conditions: [],
        tricksterIds: [],
    }
}
