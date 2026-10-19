

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function joinQueryN3(): QueryScenarioFrontend {
    return {
        // join-3-!@#turismo-ft
        scenario: 'turismo', queryType: 'join', queryId: '3', 
        queryText: "Liste os ids de passeio e o nome dos guias que trabalham nos expedientes de apenas 1 turno (os de 1 letra no alfabeto no seu texto) e que trabalharam em passeios que a nota de indicação foi de 4.5 ou mais e que a avaliação do guia tenha superado a de indicação. (cláusula 'in' recomendada).",
        tables: getTables([10, 37, 38], 1),
        fields: getTableColumns([10, 37, 38]),
        tablesNames: getTables([10, 37, 38], 2),
        conditions: [],
        tricksterIds: [],
    }
}
