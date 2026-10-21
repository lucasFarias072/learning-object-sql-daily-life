

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#exercicio-ft
        scenario: 'exercicio', queryType: 'case-when', queryId: '2', 
        queryText: "Crie um campo customizado de apelido exato 'tipo_registro', com base em campos que indiquem o algo que foi visto e o horário desse avistamento. As variações são (nao_identificado), (hora_incerta), (dia), (tarde_ou_noite). Se algo não foi visto (registro não numérico) então defina 'nao_identificado', se algo não possui hora vista (registro não numérico), então defina 'hora_incerta', se algo foi visto antes das 12, defina 'dia' e o que vier depois, defina 'tarde_ou_noite'. Traga a contagem dos grupos formados, agrupe e ordene pelo apelido, embora a ordenação seja arbitrária. A ordem de pesos é: (1. dia), (2. tarde_ou_noite), (3. hora_incerta), (4 ou 'else'. nao_identificado).",
        tables: getTables([42], 1),
        fields: getTableColumns([42]),
        tablesNames: getTables([42], 2),
        conditions: [],
        tricksterIds: [],
    }
}
