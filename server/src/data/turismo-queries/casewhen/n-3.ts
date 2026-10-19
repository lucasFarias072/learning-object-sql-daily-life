

//*TESTADO-40

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN3(): QueryScenarioBackend {
    return {
        // case-when-3-!@#turismo-bk 
        
        cenario: 'turismo-case-when-3',
        consultaTipo: 'case-when',
        id: 3,
        // Crie uma coluna customizada com os rótulos (aspirante), (explorador), (andarilho), para classificar pessoas de acordo com sua bagagem de viagens. Para ser aspirante pode ser nada ou uma viagem, para ser explorador já deve ter chegado até 3, e para além disso é andarilho. Conte esses rótulos e agrupe por eles.
        consulta: `
        select
            case
                when qtd_paises_conhecidos <= 1 then 'aspirante'
                when qtd_paises_conhecidos < 4 then 'explorador'
                else 'andarilho'
            end as perfil_viajante,
            count(*) as qtd_pessoas
        from pessoa
        group by perfil_viajante;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
