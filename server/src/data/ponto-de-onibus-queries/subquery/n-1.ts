

//*TESTADO-41

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN1(): QueryScenarioBackend {
    return {
        // subconsulta-1-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-subconsulta-1',
        consultaTipo: 'subconsulta',
        id: 1,
        // Liste o nome de pessoas que estavam num mesmo local por onde um ônibus se locomovia na zona 'Norte' ou pessoas cujo local atual estejam no Fripisa.
        consulta: `
        select nome
        from pessoa
        where local_pess_fk in (
            select local_loc_fk from locomocao
            where onibus_loc_fk in (
                select onibus_fk from onibus_zona
                where zona_fk in (
                    select zona_id from zona where descricao_zona = 'Norte'
                )
            )
        ) or local_pess_fk = (
            select local_id from local 
            where descricao_local = 'Fripisa'
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
