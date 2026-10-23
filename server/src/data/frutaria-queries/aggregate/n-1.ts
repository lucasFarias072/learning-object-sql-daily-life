

//*TESTADO-2
import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#frutaria-bk 
        
        cenario: 'frutaria-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Para cada identificador de local, liste a quantidade de frutas cadastradas e o maior preço atual por quilo entre elas.
        consulta: `
        select local_fprod_fk, count(*) as quantas_frutas, max(preco_atual_kg) as fruta_mais_cara
        from frutaria_produto
        group by local_fprod_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
