

import type { QueryScenarioFrontend } from "../../types";
import { getTables, getTableColumns } from "../../../procedure/table-admin";

export function caseWhenQueryN1(): QueryScenarioFrontend {
    return {
        // case-when-1-!@#ponto-de-onibus-ft
        scenario: 'ponto-de-onibus', queryType: 'case-when', queryId: '1', 
        queryText: "(1) Gere uma única coluna com os possíveis rótulos (rápido) (dinâmico) (truncado) com base nas durações das cores verde em relação à vermelha, dos semáforos. (2) É considerado rápido aquele com mais de 3 segundos de vantagem pro sinal verde, dinâmico é abaixo disso mas ainda positivo, e de zero adiante é truncado. (3) Dê ao case o alias 'fluxo', agrupe pelo alias, ordene com pesos (1, 2, 3) baseados na mesma ordem de apresentação dos rótulos.",
        tables: getTables([22], 1),
        fields: getTableColumns([22]),
        tablesNames: getTables([22], 2),
        conditions: [],
        tricksterIds: [],
    }
}
