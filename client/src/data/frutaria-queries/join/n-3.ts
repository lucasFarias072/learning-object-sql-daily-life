

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'join', queryId: '3',
        queryText: "Dentre todas as frutas cadastradas, liste a descrição da fruta e a sua quantidade em estoque, inclusive para aquelas que talvez não tenham sido registradas, para as frutas com preço quilo entre os valores R$ de 15 à 20 reais.",
        tables: getTables([11, 12], 1),
        fields: getTableColumns([11, 12]),
        tablesNames: getTables([11, 12], 2),
        conditions: [],
        tricksterIds: [],
    }
}
