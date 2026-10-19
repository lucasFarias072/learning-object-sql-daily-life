

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN1(): QueryScenarioFrontend {
    return {
        // join-1-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'join', queryId: '1', 
        queryText: "Liste a descrição do local, a duração do verde e a duração do vermelho do semáforo. Considere apenas locais do tipo 'bairro' em que o semáforo fique mais tempo no verde do que no vermelho.",
        tables: getTables([8, 9, 22], 1),
        fields: getTableColumns([8, 9, 22]),
        tablesNames: getTables([8, 9, 22], 2),
        conditions: [],
        tricksterIds: [],
    }
}
