

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'case-when', queryId: '2',  
        queryText: "Liste o apelido dos sinuquistas vitoriosos e uma coluna customizada para conceitar tipos de vitória, sendo elas: (acirrada), (com_vantagem), (confortavel), (capote). Os tipos de vitória são definidas pelo placar do vencedor tendo 4 bolas e o perdedor tento de 0 a 3 bolas, seja do lado do desafiante ou do dono. Para ser acirrada, a diferença é 1, para ser com_vantagem, a diferença é de 2, para ser confortável, a diferença é 3, e o que resta é denominado de capote. Traga a contagem das ocorrências e agrupe pelo grupos que fizerem sentido pra consulta.",
        tables: getTables([25, 26], 1),
        fields: getTableColumns([25, 26]),
        tablesNames: getTables([25, 26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
