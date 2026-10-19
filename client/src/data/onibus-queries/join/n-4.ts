

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN4(): QueryScenarioFrontend {
    return {
        // join-4-!@#onibus-ft
        scenario: 'onibus', queryType: 'join', queryId: '4', 
        queryText: "Liste o id do passageiro e a descrição de cada item que ele carrega, apenas para passageiros que estão sentados e que pesam 68 kg ou mais.",
        tables: getTables([13, 15, 16], 1),
        fields: getTableColumns([13, 15, 16]),
        tablesNames: getTables([13, 15, 16], 2),
        conditions: [],
        tricksterIds: [],
    }
}
