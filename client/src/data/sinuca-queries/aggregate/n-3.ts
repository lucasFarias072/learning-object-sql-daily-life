

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN3(): QueryScenarioFrontend {
    return {
        // agregacao-3-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'agregacao', queryId: '3', 
        queryText: "Liste a descrição da sinuca, a quantidade de partidas disputadas nela e a duração média dessas partidas. Dos grupos formados, considere apenas as sinucas cuja duração média das partidas resultou num valor ímpar (na parte inteira da duração).",
        tables: getTables([24, 26], 1),
        fields: getTableColumns([24, 26]),
        tablesNames: getTables([24, 26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
