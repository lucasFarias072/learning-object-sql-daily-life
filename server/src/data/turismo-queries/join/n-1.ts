

//*TESTADO-15

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN1(): QueryScenarioBackend {
    return {
        // join-1-!@#turismo-bk 
        
        cenario: 'turismo-join-1',
        consultaTipo: 'join',
        id: 1,
        // Liste, para cada passeio, o identificador do guia responsável, a pessoa atendida que contratou e o ponto turístico visitado.
        consulta: `
        select guia_id, nome, descricao_ponto
        from passeio pas
        join guia gui on gui.guia_id = pas.guia_fk
        join pessoa pess on pess.pessoa_id = pas.pessoa_fk
        join ponto_turistico ptur on ptur.ponto_id = pas.ponto_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
