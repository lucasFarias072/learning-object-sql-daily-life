

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'case-when', queryId: '2', 
        queryText: "Liste os ids de locomoção e crie uma coluna customizada de nome exato 'relatorio', com base na lotação e horário das locomoções. As variações são (vago-dia), (vago-tarde-noite), (enchendo-dia), (enchendo-tarde-noite). A lotação 'vago' vai até 20 pessoas, além disso será 'enchendo'. Para os horários, considere antes do meio dia como condição para os rótulos com 'dia' na sua escrita, e do meio dia adiante, se enquadram os rótulos 'tarde-noite'. Ordene pelo rótulo da coluna customizada usando uma ordenação arbitrária. A ordem de pesos é: (1. vago-dia), (2. enchendo-dia), (3. vago-tarde-noite), (4 ou 'else'. enchendo-tarde-noite)",
        tables: getTables([43], 1),
        fields: getTableColumns([43]),
        tablesNames: getTables([43], 2),
        conditions: [],
        tricksterIds: [],
    }
}
