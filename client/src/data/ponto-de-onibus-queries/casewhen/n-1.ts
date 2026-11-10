

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'case-when', queryId: '1', 
        queryText: "Classifique os semáforos em três grupos com base na diferença entre a duração do sinal verde e a do vermelho: (rapido) para diferença acima de 3 segundos, (dinamico) para diferença maior que zero e até 3 segundos, e (truncado) para diferença igual ou menor que zero. Mostre a quantidade de semáforos em cada grupo e nomei-o 'qtd_semaforos'. Dê à classificação o alias 'fluxo', agrupe por esse alias e ordene os grupos na ordem (rapido), (dinamico), (truncado), usando os pesos 1, 2 e 3, respectivamente.",
        tables: getTables([22], 1),
        fields: getTableColumns([22]),
        tablesNames: getTables([22], 2),
        conditions: [],
        tricksterIds: [],
    }
}
