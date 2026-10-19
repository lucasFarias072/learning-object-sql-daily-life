

import { Frame } from "../../shared/Frame"

export function JoinFiltersIntro() {
    return (
        <>
            <div className="flex column gap-sm">
                
                <div id="filters-title-intro-join" className="mv-1">
                    <h2 className="as-line round-title">
                        Filtros pro <Frame cmd='u' label='join'/>
                    </h2>
                </div>

                <div id="filters-body-intro-join" className="flex column gap-mid">
                    <h2 className="minor-title">
                        ✦ Vejamos casos no qual existem filtros implícitos ou explícitos para o <Frame cmd='u' label='join'/>.
                    </h2>
                </div>

            </div>
        </>
    )
}
