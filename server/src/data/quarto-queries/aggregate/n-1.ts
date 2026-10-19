

//*TESTADO-56

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#quarto-bk 
        
        cenario: 'quarto-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Liste o codinome do dono, o ano de adesão do quarto dele e a soma da quantidade de suites. Agrupe pelos campos listados pertinentes e do resultado, apresente aqueles cuja soma de quantidade de suites seja pelo menos 1.
        consulta: `
        select codinome, ano_adesao, sum(suite_qtd)
        from quarto_relatorio qr
        join dono dn on dn.dono_id = qr.dono_fk
        group by codinome, ano_adesao
        having sum(suite_qtd) >= 1;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
