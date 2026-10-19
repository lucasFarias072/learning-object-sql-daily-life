

//*TESTADO-25

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#turismo-bk 
        
        cenario: 'turismo-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Para cada combinação de descrição do ponto turístico e identificador do guia, quantos passeios ocorreram?
        consulta: `
        select descricao_ponto, guia_fk, count(*) as qtd_passeios
        from passeio pas
        join ponto_turistico ptur on ptur.ponto_id = pas.ponto_fk
        group by descricao_ponto, guia_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
