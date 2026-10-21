

//*TESTADO-74

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#sinuca-bk 
        
        cenario: 'sinuca-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Crie uma coluna customizada com base em 4 variações de valores: (ganhou_ligeiro), (perdeu_azarado), (partida_suada), (partida_normal). Para quem ganhou ligeiro, a duração da partida não chegou nem em 5 minutos. Para quem perdeu azarado, a bola branca entrou no buraco já no início (valor 1). Para ser partida suada, o resultado das bolas dos dois jogadores da partida deve dar 7. Os demais se encaixam em partida normal. Agrupe pelo que foi criado e mostre a contagem das distribuições dos grupos.
        consulta: `
        select case
            when duracao_seg < 300 then 'ganhou_ligeiro'
            when bola_branca = 1 then 'perdeu_azarado'
            when dono_bolas + desafiante_bolas = 7 then 'partida_suada'
            else 'partida_normal'
            end as estado_da_partida,
            count(*) as total_partidas
        from partida_sinuca
        group by estado_da_partida;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
