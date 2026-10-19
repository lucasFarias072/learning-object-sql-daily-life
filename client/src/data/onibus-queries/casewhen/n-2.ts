

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN2(): QueryScenarioFrontend {
    return {
        // case-when-2-!@#onibus-ft
        scenario: 'onibus', queryType: 'case-when', queryId: '2',  
        queryText: "Crie um campo com base em 4 características dos passageiros, sendo elas: (levantado), (sentado_pesado), (sentado_alto), (sentado_comum). O 'levantado' é para pessoas sem assento registrado, o 'sentado_pesado' é para os que tiverem peso a partir de 80kg, o 'sentado_alto' é para as pessoas de altura 180cm adiante e os demais recebem 'sentado_comum'. Conte a distribuição a partir disso e agrupe pelo campo criado.",
        tables: getTables([15], 1),
        fields: getTableColumns([15]),
        tablesNames: getTables([15], 2),
        conditions: [],
        tricksterIds: [],
    }
}
