

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function aggregateQueryN4(): QueryScenarioFrontend {
    return {
        // agregacao-4-!@#sinuca-ft
        scenario: 'sinuca', queryType: 'agregacao', queryId: '4', 
        queryText: "Liste o nome do sinuquista e a descrição da sinuca, junto com a duração média das partidas em que ele foi o vitorioso. Considere apenas partidas em que a ficha de id 2 foram jogadas. Dos grupos formados, elimine os que conseguiram tempo médio abaixo de 6 minutos.",
        tables: getTables([24, 25, 26], 1),
        fields: getTableColumns([24, 25, 26]),
        tablesNames: getTables([24, 25, 26], 2),
        conditions: [],
        tricksterIds: [],
    }
}
