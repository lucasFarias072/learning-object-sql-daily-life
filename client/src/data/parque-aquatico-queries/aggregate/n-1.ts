

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN1(): QueryScenarioFrontend {
    return {
        // agregacao-1-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'agregacao', queryId: '1', 
        queryText: "Liste a descrição do local visitado, se a pessoa é sócia (coluna: esta_socio) e a média da hora de visita. Considere inclusas apenas as visitas às 10h ou posteriormente. Agrupe pelos locais correspondentes à listagem e do resultado dos grupos, mostre somente os com 2 ou mais visitas.",
        tables: getTables([9, 18, 20], 1),
        fields: getTableColumns([9, 18, 20]),
        tablesNames: getTables([9, 18, 20], 2),
        conditions: [],
        tricksterIds: [],
    }
}
