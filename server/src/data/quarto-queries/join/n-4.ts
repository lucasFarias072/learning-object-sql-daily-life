

//*TESTADO-53

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN4(): QueryScenarioBackend {
    return {
        // join-4-!@#quarto-bk 
        
        cenario: 'quarto-join-4',
        consultaTipo: 'join',
        id: 4,
        // (Uso de alias recomendado) Liste a descrição do objeto alvo, a descrição do objeto de referência e a descrição da coordenada, cuja relação de proximidade entre os objetos seja 'próximo' ou 'na frente'.
        consulta: `
        select alvo.descricao_objeto, ref.descricao_objeto,
        descricao_coord
        from objeto_coordenada objc
        join coordenada cd on cd.coordenada_id = objc.coordenada_fk
        join objeto alvo on alvo.objeto_id = objc.objeto_fk_alvo
        join objeto ref on ref.objeto_id = objc.objeto_fk_ref
        where descricao_coord in ('próximo', 'na frente');
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
