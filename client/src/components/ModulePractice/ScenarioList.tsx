import { Link } from 'react-router-dom'
import { scenarios } from '../../data/scenarios'
import { ReturnBtn } from '../shared/ReturnBtn'

export function ScenarioList() {
    let cenariosUnicos = [...new Set(scenarios.map(s => s.scenario))]
    cenariosUnicos.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    return (
        <div className="win h100 flex column go-center gap-xsm area">
            <ReturnBtn/>
            <h1 className="generic-title" style={{fontSize: "1.5rem"}}>🧩 Cenários para treino</h1>
            <div className="flex column go-center gap-xsm mt-1">
                {cenariosUnicos.map(scenario => (
                    <Link key={scenario} to={`/pratico/${scenario}`} className="module wide15">
                        🏠︎ {scenario}
                    </Link>
                ))}
            </div>
        </div>
    )
}