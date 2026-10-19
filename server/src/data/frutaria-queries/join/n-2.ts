

//*TESTADO-43

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN2(): QueryScenarioBackend {
    return {
        // join-2-!@#frutaria-bk 
        
        cenario: 'frutaria-join-2',
        consultaTipo: 'join',
        id: 2,
        // Liste a descrição da fruta e a quantidade em estoque dela, para aquelas com preço do quilo até R$ 18 reais e que a quantidade em estoque esteja dentro do valor de um dígito ou que o peso esteja numa faixa de até 2 dígitos.
        consulta: `
        select descricao_fruta, qtd
        from frutaria_produto fprod
        join estoque estq on estq.frutaria_produto_fk = fprod.frutaria_produto_id
        where preco_atual_kg >= 18
        and (qtd < 10 or peso_medio_unid_grama <= 99);
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
