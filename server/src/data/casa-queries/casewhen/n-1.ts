

//*TESTADO-85

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#casa-bk 
        
        cenario: 'casa-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Crie um campo customizado para criar uma disputa entre os campos (area_fk) e (rotina_fk). Quando 'area_fk' for superior, defina 'area' no resultado, se for o caso de 'rotina_fk' ser superior, então defina 'rotina' e, para os demais casos, use 'empate'. Conte as ocorrências, agrupe e ordene pelo campo criado.
        consulta: `
        select case
        when area_fk > rotina_fk then 'area'
        when rotina_fk > area_fk then 'rotina'
        else 'empate'
        end as area_vs_rotina, count(*) as qtd_vitorias
        from membro_rotina
        group by area_vs_rotina
        order by area_vs_rotina;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
