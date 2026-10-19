

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#casa-ft
        scenario: 'casa', queryType: 'case-when', queryId: '1', 
        queryText: "Crie um campo customizado para criar uma disputa entre os campos (area_fk) e (rotina_fk). Quando 'area_fk' for superior, defina 'area' no resultado, se for o caso de 'rotina_fk' ser superior, então defina 'rotina' e, para os demais casos, use 'empate'. Conte as ocorrências, agrupe e ordene pelo campo criado.",
        tables: getTables([3], 1),
        fields: getTableColumns([3]),
        tablesNames: getTables([3], 2),
        conditions: [],
        tricksterIds: [],
    }
}
