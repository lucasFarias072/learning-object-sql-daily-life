

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN4(): QueryScenarioFrontend {
    return {
        // join-4-!@#quarto-ft
        scenario: 'quarto', queryType: 'join', queryId: '4',  
        queryText: "(Uso de alias recomendado) Liste a descrição do objeto alvo, a descrição do objeto de referência e a descrição da coordenada, cuja relação de proximidade entre os objetos seja 'próximo' ou 'na frente'.",
        tables: getTables([28, 30, 31], 1),
        fields: getTableColumns([28, 30, 31]),
        tablesNames: getTables([28, 30, 31], 2),
        conditions: [],
        tricksterIds: [],
    }
}
