

//*TESTADO-61

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN4(): QueryScenarioBackend {
    return {
        // agregacao-4-!@#frutaria-bk 
        
        cenario: 'frutaria-agregacao-4',
        consultaTipo: 'agregacao',
        id: 4,
        // Liste a descrição do local e traga a contagem de frutas que cada local possui, junto com a soma dos pesos para as frutas encontradas, com exclusão das frutas com preço até R$ 15.
        consulta: `
        select descricao_local, count(*), sum(peso_medio_unid_grama) from local lcl
        join frutaria_produto fprod on fprod.local_fprod_fk = lcl.local_id
        where preco_atual_kg > 15
        group by descricao_local;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
