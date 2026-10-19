

//*TESTADO-51

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN3(): QueryScenarioBackend {
    return {
        // subconsulta-3-!@#quarto-bk 
        
        cenario: 'quarto-subconsulta-3',
        consultaTipo: 'subconsulta',
        id: 3,
        // Liste os codinomes dos donos que tenham a característica 'Desleixada' e que possuam algum quarto com mês de adesão a partir de julho.
        consulta: `
        select codinome
        from dono
        where dono_id in (
            select dono_fk
            from dono_caracteristica
            where caract_fk in (
                select caract_id
                from caracteristica
                where descricao_caract = 'Desleixada'
            )
        )
        and dono_id in (
            select dono_fk
            from quarto_relatorio
            where mes_adesao >= 7
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
