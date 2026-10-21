

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'case-when', queryId: '1', 
        queryText: "Crie uma coluna customizada com base em 4 variações de valores: (ganhou_ligeiro), (perdeu_azarado), (partida_suada), (partida_normal). Para quem ganhou ligeiro, a duração da partida não chegou nem em 5 minutos. Para quem perdeu azarado, a bola branca entrou no buraco já no início (valor 1). Para ser partida suada, o resultado das bolas dos dois jogadores da partida deve dar 7. Os demais se encaixam em partida normal. Agrupe pelo que foi criado e mostre a contagem das distribuições dos grupos.",
        tables: getTables([26], 1),
        fields: getTableColumns([26]),
        tablesNames: getTables([26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
