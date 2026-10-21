

//*TESTADO-50

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#frutaria-bk 
        
        cenario: 'frutaria-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Crie uma coluna para frutas com base nas características (miuda_e_cara), (cara), (pesada), (comum). Frutas miudas caras (R$ 15 adiante e peso por unidade abaixo de 100g). Para frutas caras, dispense o peso médio e mantenha a lógica do preço falado anteriormente. Para pesada, são as frutas com peso por unidade a partir de 300g. O resto além disso, serão frutas comuns. Agrupe por essa coluna e traga a soma do estoque dos valores dela.
        consulta: `
        select case
            when preco_atual_kg >= 15 and peso_medio_unid_grama < 100 then 'miuda_e_cara'
            when preco_atual_kg >= 15 then 'cara'
            when peso_medio_unid_grama >= 300 then 'pesada'
            else 'comum'
            end as categoria,
            sum(qtd) as total_estoque
        from frutaria_produto fprod
        join estoque estq on estq.frutaria_produto_fk = fprod.frutaria_produto_id
        group by categoria;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
