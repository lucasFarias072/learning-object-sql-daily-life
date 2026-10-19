

//*TESTADO-29

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#frutaria-bk 
        
        cenario: 'frutaria-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Mostre quantos produtos de frutaria existem cadastrados por local, apenas para os produtos com preço até R$15 o quilo. Mostre apenas a coluna da contagem.
        consulta: `
        select count(*) as produtos_por_local
        from frutaria_produto
        where preco_atual_kg <= 15
        group by local_fprod_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}