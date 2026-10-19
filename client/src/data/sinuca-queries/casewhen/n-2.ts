

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'case-when', queryId: '2',  
        queryText: "Liste o apelido dos sinuquistas vitoriosos e uma coluna customizada para conceitar tipos de vitória. Os tipos de vitória são definidas pelo placar do vencedor tendo 4 bolas e o perdedor tento de 0 a 3 bolas, seja do lado do desafiante ou do dono. Para 'acirrada', 1 de diferença, para 'com vantagem', 2 de diferença, para 'confortável', 3 de diferença e o resto é denominado 'capote'. Traga a contagem das ocorrências e agrupe pelo grupos pertinentes.",
        tables: getTables([25, 26], 1),
        fields: getTableColumns([25, 26]),
        tablesNames: getTables([25, 26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
