

//*TESTADO-2
import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#frutaria-bk 
        
        cenario: 'frutaria-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Para cada grupo de local, a contagem das frutas no local e também a fruta mais cara dentre as achadas.
        consulta: `
        select local_id, count(*) as quantas_frutas, max(preco_atual_kg) as fruta_mais_cara 
        from local lcl
        join frutaria_produto fprod on fprod.local_fprod_fk = lcl.local_id
        group by local_id;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
