

//*TESTADO-86

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#casa-bk 
        
        cenario: 'casa-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Crie um campo customizado para definir terminações das descrições das áreas (ocorrências vindo da tabela 'membro_rotina') com as letras 'a' e 'o' e qualquer outra coisa. Para as palavras terminadas em 'a', defina 'fim_a', a mesma lógica para terminações em 'o', defina 'fim_o'. Para qualquer outra terminação, apenas defina 'fim_outro'. Conte as ocorrências, agrupe e ordene pelo campo criado.
        consulta: `
        select case
            when descricao_area like '%a' then 'fim_a'
            when descricao_area like '%o' then 'fim_o'
            else 'fim_outro'
            end as terminacao_palavra,
            count(*) as contagem
        from membro_rotina mrot
        join area ar on ar.area_id = mrot.area_fk
        group by terminacao_palavra;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
