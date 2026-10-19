

//*TESTADO-74

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#sinuca-bk 
        
        cenario: 'sinuca-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Rotule uma coluna com base em 4 variações de valores: (ganhou ligeiro), (perdeu azarado), (partida suada), (partida normal). Para quem ganhou ligeiro, a duração da partida não chegou nem em 5 minutos. Para quem perdeu azarado, a bola branca entrou no buraco já no início (valor 1). Para quem fez 4 bolas contra 3, sua some define os de partida suada. Os demais se encaixam em partida normal. Mostre a distribuição e agrupe pelo campo rotulador.
        consulta: `
        select case
            when duracao_seg < 300 then 'ganhou ligeiro'
            when bola_branca = 1 then 'perdeu azarado'
            when dono_bolas + desafiante_bolas = 7 then 'partida suada'
            else 'partida normal'
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
