

//*TESTADO-54

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#frutaria-bk 
        
        cenario: 'frutaria-join-3',
        consultaTipo: 'join',
        id: 3,
        // Dentre todas as frutas cadastradas, liste a descrição da fruta e a sua quantidade em estoque, inclusive para aquelas que talvez não tenham sido registradas, para as frutas com preço quilo entre os valores R$ de 15 à 20 reais.
        consulta: `
        select descricao_fruta, qtd
        from frutaria_produto fprod
        left join estoque estq on estq.frutaria_produto_fk = fprod.frutaria_produto_id
        where preco_atual_kg >= 15 and preco_atual_kg <= 20;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
