

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#frutaria-ft
        scenario: 'frutaria', queryType: 'case-when', queryId: '2', 
        queryText: "Crie uma coluna para frutas com base nas características (miuda e cara), (cara), (pesada), (comum). Frutas miudas caras (R$ 15 adiante e peso por unidade abaixo de 100g). Para frutas caras, dispense o peso médio e mantenha a lógica do preço falado anteriormente. Para pesada, são as frutas com peso por unidade a partir de 300g. O resto além disso, serão frutas comuns. Agrupe por essa coluna e traga a soma do estoque dos valores dela.",
        tables: getTables([11, 12], 1),
        fields: getTableColumns([11, 12]),
        tablesNames: getTables([11, 12], 2),
        conditions: [],
        tricksterIds: [],
    }
}
