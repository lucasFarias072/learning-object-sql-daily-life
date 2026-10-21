

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'join', queryId: '3', 
        queryText: "Liste o nome da pessoa e a descrição do local em que ela se encontra. Considere apenas pessoas em locais onde a luz do semáforo está verde e a diferença entre a duração da luz vermelha e a da luz verde seja superior a 5 segundos, ou cuja duração da luz vermelha seja maior que 30 segundos (repetições possíveis).",
        tables: getTables([9, 10, 22], 1),
        fields: getTableColumns([9, 10, 22]),
        tablesNames: getTables([9, 10, 22], 2),
        conditions: [],
        tricksterIds: [],
    }
}
