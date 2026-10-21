

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#turismo-ft
        scenario: 'turismo', queryType: 'case-when', queryId: '2',
        queryText: "(1) Liste os ids dos guias e com uma coluna customizada, classifique pelos rótulos (manha) (tarde) (noite) (dois_turnos) as suas jornadas (2) Dê ao case o alias exato 'jornada' (3) Inicie a ordenação dando peso 0 para 'dois turnos' e incremente o valor dos outros pesos em +1, de acordo com a ordem normal de um dia.",
        tables: getTables([37], 1),
        fields: getTableColumns([37]),
        tablesNames: getTables([37], 2),
        conditions: [],
        tricksterIds: [],
    }
}
