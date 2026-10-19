

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'case-when', queryId: '1', 
        queryText: "Rotule uma coluna com base em 4 variações de valores: (ganhou ligeiro), (perdeu azarado), (partida suada), (partida normal). Para quem ganhou ligeiro, a duração da partida não chegou nem em 5 minutos. Para quem perdeu azarado, a bola branca entrou no buraco já no início (valor 1). Para quem fez 4 bolas contra 3, sua some define os de partida suada. Os demais se encaixam em partida normal. Mostre a distribuição e agrupe pelo campo rotulador.",
        tables: getTables([26], 1),
        fields: getTableColumns([26]),
        tablesNames: getTables([26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
