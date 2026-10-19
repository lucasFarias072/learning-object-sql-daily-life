

//*TESTADO-55

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN3(): QueryScenarioBackend {
    return {
        // agregacao-3-!@#frutaria-bk 
        
        cenario: 'frutaria-agregacao-3',
        consultaTipo: 'agregacao',
        id: 3,
        // Liste a descrição do local, a descrição do tipo de local e a média do preço atual por kg das frutas e considere apenas frutas com peso médio por unidade a partir de 100g. Agrupe os campos necessários.
        consulta: `
        select descricao_local, descricao_local_tipo, avg(preco_atual_kg)
        from frutaria_produto fprod
        join local lcl on lcl.local_id = fprod.local_fprod_fk
        join local_tipo ltipo on ltipo.local_tipo_id = lcl.local_tipo_fk
        where peso_medio_unid_grama >= 100
        group by descricao_local, descricao_local_tipo;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
