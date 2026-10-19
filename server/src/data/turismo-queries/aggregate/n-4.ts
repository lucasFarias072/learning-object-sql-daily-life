

//*TESTADO-49

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN4(): QueryScenarioBackend {
    return {
        // agregacao-4-!@#turismo-bk 
        
        cenario: 'turismo-agregacao-4',
        consultaTipo: 'agregacao',
        id: 4,
        // Para cada ponto turístico, conte os registros e também a média das notas de indicação deles, encontrados nos registros dos passeios. Só entram no agrupamento aqueles com sua avaliação atual com 4 pontos adiante. Do resultado dos grupos, deixe apenas os que tiveram mais de 1 passeio registrado.
        consulta: `
        select descricao_ponto, 
        count(*) as passeios_registrados, 
        avg(indicacao_nota) as media_avaliativa 
        from ponto_turistico ptur
        join passeio pass on pass.ponto_fk = ptur.ponto_id
        where avaliacao >= 4
        group by descricao_ponto
        having passeios_registrados > 1;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
