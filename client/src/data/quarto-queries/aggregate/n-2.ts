

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN2(): QueryScenarioFrontend {
    return {
        // agregacao-2-!@#quarto-ft
        scenario: 'quarto', queryType: 'agregacao', queryId: '2', 
        queryText: "Liste o codinome do dono, a quantidade de objetos registrados e o objeto alvo de menor identificador. Considere apenas registros que têm coordenada/referência (escolha uma dessas colunas) definida (existe valor para ela), filtrando antes de agrupar. Agrupe pelo codinome e depois de agrupar, mostre somente os donos com objeto alvo de menor identificador diferente da quantidade 2.",
        tables: getTables([29, 31], 1),
        fields: getTableColumns([29, 31]),
        tablesNames: getTables([29, 31], 2),
        conditions: [],
        tricksterIds: [],
    }
}
