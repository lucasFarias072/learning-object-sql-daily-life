

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN3(): QueryScenarioFrontend {
    return {
        // case-when-3-!@#parque-aquatico-ft
        scenario: 'parque-aquatico', queryType: 'case-when', queryId: '3',  
        queryText: "Crie uma classificação para como a pessoa se comportou após entrar no parque em relação aos seus locais internos visitados: Se a hora da visita for a mesma da entrada, defina 'visitou_assim_que_entrou' se a diferença entre esses dois horários for de 1 hora, defina 'visitou_rapido' e para qualquer outra coisa, defina 'visitou_mais_tarde'. Crie uma outra classificação em relação ao tipo de pessoa que entrou: baseie-se na coluna 'estah_socio' e defina 'socio' ou 'visita' como valores possíveis. Conte essas entradas com base nos grupos formados desses dois casos.",
        tables: getTables([18, 20], 1),
        fields: getTableColumns([18, 20]),
        tablesNames: getTables([18, 20], 2),
        conditions: [],
        tricksterIds: [],
    }
}
