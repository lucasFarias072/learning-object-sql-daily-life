

import { Frame } from "../../shared/Frame"

export function AggregateCasesIntro() {
    return (
        <>
            <div className="flex column gap-sm">
                
                <div id="cases-title-intro-aggregate" className="mv-1">
                    <h2 className="title-what-is as-line round-title">Vamos aos casos!</h2>
                </div>

                <div id="cases-body-intro-aggregate" className="flex column gap-mid">
                    <h2 className="minor-title">
                        ✦ Vamos entender melhor <Frame cmd='u' label='funções agregadoras'/> com exemplos de casos de uso a seguir.
                    </h2>
                </div>

            </div>
        </>
    )
}
