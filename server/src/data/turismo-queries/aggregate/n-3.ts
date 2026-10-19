

//*TESTADO-46

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN3(): QueryScenarioBackend {
    return {
        // agregacao-3-!@#turismo-bk 
        
        cenario: 'turismo-agregacao-3',
        consultaTipo: 'agregacao',
        id: 3,
        // Liste a descrição de cada ponto turístico e a quantidade de passeios realizados nele, para os passeios conduzidos por guias cujo expediente de trabalho sejam manhã e tarde ou apenas noite (um turno é representado por traço no final do texto) e depois de agrupar, traga os pontos turísticos cuja descrição não iniciem com a letra 'P'.
        consulta: `
        select descricao_ponto, count(*) as passeios_registrados
        from passeio pass
        join guia gui on gui.guia_id = pass.guia_fk
        join ponto_turistico ptur on ptur.ponto_id = pass.ponto_fk
        where expediente = 'mt' or expediente = 'n-'
        group by descricao_ponto
        having descricao_ponto not like 'P%'
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
