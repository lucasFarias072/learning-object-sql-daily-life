

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN3(): QueryScenarioFrontend {
    return {
        // agregacao-3-!@#turismo-ft
        scenario: 'turismo', queryType: 'agregacao', queryId: '3', 
        queryText: "Liste a descrição de cada ponto turístico e a quantidade de passeios realizados nele, para os passeios conduzidos por guias cujo expediente de trabalho sejam manhã e tarde ou apenas noite (um turno é representado por traço no final do texto) e depois de agrupar, traga os pontos turísticos cuja descrição não iniciem com a letra 'P'.",
        tables: getTables([36, 37, 38], 1),
        fields: getTableColumns([36, 37, 38]),
        tablesNames: getTables([36, 37, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
