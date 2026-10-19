

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#casa-ft
        scenario: 'casa', queryType: 'case-when', queryId: '2', 
        queryText: "Crie um campo customizado para definir terminações das descrições das áreas (ocorrências vindo da tabela 'membro_rotina') com as letras 'a' e 'o' e qualquer outra coisa. Para as palavras terminadas em 'a', defina 'fim_a', a mesma lógica para terminações em 'o', defina 'fim_o'. Para qualquer outra terminação, apenas defina 'fim_outro'. Conte as ocorrências, agrupe e ordene pelo campo criado.",
        tables: getTables([1, 3], 1),
        fields: getTableColumns([1, 3]),
        tablesNames: getTables([1, 3], 2),
        conditions: [],
        tricksterIds: [],
    }
}
