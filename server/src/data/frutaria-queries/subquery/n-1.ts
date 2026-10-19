

//*TESTADO-35

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN1(): QueryScenarioBackend {
    return {
        // subconsulta-1-!@#frutaria-bk 
        
        cenario: 'frutaria-subconsulta-1',
        consultaTipo: 'subconsulta',
        id: 1,
        // Liste a descrição das frutas que estão com estoque de um dígito ou com estoque de 25 unidades adiante.
        /* Outra versão 
            select descricao_fruta
            from frutaria_produto
            where frutaria_produto_id in (
                select frutaria_produto_fk from estoque where qtd < 10
            ) or frutaria_produto_id in (
                select frutaria_produto_fk from estoque where qtd >= 25
            );
        */
        consulta: `
        select descricao_fruta
        from frutaria_produto
        where frutaria_produto_id in (
            select frutaria_produto_fk from estoque where qtd < 10 or qtd >= 25
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
