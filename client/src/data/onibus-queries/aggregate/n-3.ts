

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN3(): QueryScenarioFrontend {
    return {
        // agregacao-3-!@#onibus-ft
        scenario: 'onibus', queryType: 'agregacao', queryId: '3',
        queryText: "Liste o identificar do item do passageiro e sua quantidade, para os passageiros que estiverem sentados e com peso acima dos 65kg e altura acima dos 165cm. Depois de formar as grupos pelo identificador do item do passageiro, mostra apenas o item cuja quantidade deu apenas 1.",
        tables: getTables([15, 16], 1),
        fields: getTableColumns([15, 16]),
        tablesNames: getTables([15, 16], 2),
        conditions: [],
        tricksterIds: [],
    }
}
