

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#quarto-ft
        scenario: 'quarto', queryType: 'case-when', queryId: '2',  
        queryText: "Crie uma classificação para a época do quarto: (antigo) para antes de 2000, (quase_novo) até 2015 e (novo) nos demais casos. Crie outra classificação para a suíte: (sem_suite) quando suite for 0 e (com_suite) nos demais casos. Agrupe pelas duas classificações e liste a quantidade de quartos em cada grupo.",
        tables: getTables([32], 1),
        fields: getTableColumns([32]),
        tablesNames: getTables([32], 2),
        conditions: [],
        tricksterIds: [],
    }
}
