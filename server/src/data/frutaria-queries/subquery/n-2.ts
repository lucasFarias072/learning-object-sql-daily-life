

//*TESTADo-91

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN2(): QueryScenarioBackend {
    return {
        // subconsulta-2-!@#frutaria-bk 
        
        cenario: 'frutaria-subconsulta-2',
        consultaTipo: 'subconsulta',
        id: 2,
        // Liste a descrição das frutas que têm estoque atual entre 10 a 20 unidades e que a subtração da quantidade em estoque com o identificador estrangeiro do produto na tabela 'estoque' tenha resultado de valor par.
        consulta: `
        select descricao_fruta
        from frutaria_produto
        where frutaria_produto_id in (
            select frutaria_produto_fk
            from estoque
            where qtd >= 10 and qtd <= 20 and (qtd - frutaria_produto_fk) % 2 = 0
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
