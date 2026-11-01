

//*TESTADO-100

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN3(): QueryScenarioBackend {
    return {
        // case-when-3-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-case-when-3',
        consultaTipo: 'case-when',
        id: 3,
        // Crie uma classificação para como a pessoa se comportou após entrar no parque em relação aos seus locais internos visitados: Se a hora da visita for a mesma da entrada, defina 'visitou_assim_que_entrou' se a diferença entre esses dois horários for de 1 hora, defina 'visitou_rapido' e para qualquer outra coisa, defina 'visitou_mais_tarde'. Crie uma outra classificação em relação ao tipo de pessoa que entrou: baseie-se na coluna 'estah_socio' e defina 'socio' ou 'visita' como valores possíveis. Conte essas entradas com base nos grupos formados desses dois casos
        consulta: `
        select case
            when hora_entrada = hora_visita then 'visitou_assim_que_entrou'
            when hora_visita - hora_entrada = 1 then 'visitou_rapido'
            else 'visitou_mais_tarde'
            end as visita,
            case
            when esta_socio = 1 then 'socio'
            else 'visita'
            end as perfil_entrada,
            count(*) as total_entradas
        from parque_aquatico_entrada pae
        join parque_aquatico_visita pav on pav.pav_entrada_fk = pae.pa_entrada_id
        group by visita, perfil_entrada;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
