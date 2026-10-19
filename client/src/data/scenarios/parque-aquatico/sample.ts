

import type { QueryScenarioFrontend } from "../../types";

export const parqueAquaticoMOCK: QueryScenarioFrontend[] = [
    {
        scenario: 'parque-aquatico', queryType: 'exemplo', queryId: '9999',
        queryText: "Liste todas as colunas da tabela stakeholder.",
        tables: ["stakeholder"],
        fields: [
            ['criador_id', 'nomenclatura', 'nascimento', 'comida_favorita', 'estado_mental', 'contribuicao'],
        ],
        tablesNames: ['Tabela: stakeholder'],
        conditions: [],
        tricksterIds: [],
    }
]
