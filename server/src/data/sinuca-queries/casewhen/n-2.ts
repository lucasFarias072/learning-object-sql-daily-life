

//*TESTADO-75

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#sinuca-bk 
        
        cenario: 'sinuca-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Liste o apelido dos sinuquistas vitoriosos e uma coluna customizada para conceitar tipos de vitória. Os tipos de vitória são definidas pelo placar do vencedor tendo 4 bolas e o perdedor tento de 0 a 3 bolas, seja do lado do desafiante ou do dono. Para 'acirrada', 1 de diferença, para 'com vantagem', 2 de diferença, para 'confortável', 3 de diferença e o resto é denominado 'capote'. Traga a contagem das ocorrências e agrupe pelo grupos pertinentes.
        consulta: `
        select apelido, case
        when dono_bolas - desafiante_bolas = 1 or desafiante_bolas - dono_bolas = 1 then 'acirrada'
        when dono_bolas - desafiante_bolas = 2 or desafiante_bolas - dono_bolas = 2 then 'com vantagem'
        when dono_bolas - desafiante_bolas = 3 or desafiante_bolas - dono_bolas = 3 then 'confortável'
        else 'capote'
        end as vitoria, count(*)
        from partida_sinuca psin
        join sinuquista sinu on sinu.sinuquista_id = psin.vitorioso
        group by apelido, vitoria;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
