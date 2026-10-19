

import type { QueryScenarioBackend } from '../types.ts';

export const onibusMOCK: QueryScenarioBackend[] = [
    {
        cenario: 'onibus-exemplo-9999',
        consultaTipo: 'exemplo',
        id: 9999,
        consulta: `
        select criador_id, nomenclatura, nascimento, comida_favorita, estado_mental, contribuicao
        from stakeholder;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    },
]
