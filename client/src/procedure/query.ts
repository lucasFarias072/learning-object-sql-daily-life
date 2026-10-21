

import type { QueryScenarioFrontend } from '../data/types.js'
// import type { QueryScenarioBackend } from '../../../server/src/data/scenarios/types.js'
import type { QueryScenarioBackend } from '../data/scenarioTypes.js'

export function nullQueryId(consultas: QueryScenarioFrontend[]): QueryScenarioFrontend[] {
    return consultas.map((item) => ({ ...item,  queryType: 'livre' }))
}

export function setQueryAsFreeToFront(consultas: QueryScenarioFrontend[]): QueryScenarioFrontend[] {
    return consultas.map((item) => ({ ...item,  queryType: 'livre' })) 
}

export function setQueryAsFreeToBack(consultas: QueryScenarioBackend[]): QueryScenarioBackend[] {
    return consultas.map((item) => ({ ...item,  consultaTipo: 'livre' }))
}
