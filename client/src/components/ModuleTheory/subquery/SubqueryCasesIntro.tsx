

import { Frame } from "../../shared/Frame"

export function SubqueryCasesIntro() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="cases-title-intro-subquery" className="mv-1">
                    <h2 className="as-line round-title">Vamos aos casos!</h2>
                </div>

                <div id="cases-body-intro-subquery" className="flex column gap-mid">
                    <h2 className="minor-title">
                        ✦ Vamos entender melhor <Frame cmd='u' label='subconsultas'/> com exemplos de casos de uso a seguir.
                    </h2>
                </div>

            </div>
        </>
    )
}
