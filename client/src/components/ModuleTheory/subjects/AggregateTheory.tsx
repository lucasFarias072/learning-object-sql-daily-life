

import { TheorySlides, type TheorySection } from "../shared/TheorySlides"
import { AggregateWhatIsIt } from "../aggregate/AggregateWhatIsIt"
import { AggregateUtility } from "../aggregate/AggregateUtility"
import { AggregateRequirements } from "../aggregate/AggregateRequirements"
import { AggregationRepresentation } from "../aggregate/AggregateRepresentation"
// import { AggregationRepresentationPart2 } from "../aggregate/AggregateRepresentationPart2"
import { AggregateCasesIntro } from "../aggregate/AggregateCasesIntro"
import { AggregateCaseMinimum } from "../aggregate/AggregateCaseMinimum"
import { AggregateCaseGroupByMinimum } from "../aggregate/AggregateCaseGroupByMinimum"
// import { AggregateCaseHiddenAnd } from "../aggregate/AggregateCaseHiddenAnd"
import { AggregateCaseTwoFunctions } from "../aggregate/AggregateCaseTwoFunctions"
import { AggregateCaseWhere } from "../aggregate/AggregateCaseWhere"
import { AggregateCaseHaving } from "../aggregate/AggregateCaseHaving"
import { AggregateHiddenColumn } from "../aggregate/AggregateHiddenColumn"
import { AggregateHaveInMind } from "../aggregate/AggregateHaveInMind"

// Console
import { AggregatePractice } from "../aggregate/AggregatePractice"

const sections: TheorySection[] = [
    { id: "introduction", label: "O que são funções agregadoras?", slides: [{ content: <AggregateWhatIsIt /> }] },
    { id: "usefullness", label: "Qual a utilidade?", slides: [{ content: <AggregateUtility/> }] },
    { id: "requirements", label: "Do que precisa?", slides: [{ content: <AggregateRequirements/> }] },
    { id: "representation", label: "Representação", slides: [{ content: <AggregationRepresentation/> }] },
    // { id: "representation", label: "Representação - parte 2", slides: [{ content: <AggregationRepresentationPart2/> }] },
    {
        id: "cases",
        label: "Casos de uso",
        slides: [
            { content: <AggregateCasesIntro /> }, 
            { content: <AggregateCaseMinimum /> }, 
            { content: <AggregateCaseGroupByMinimum /> }, 
            { content: <AggregateHiddenColumn /> }, 
            // { content: <AggregateCaseHiddenAnd /> }, 
            { content: <AggregateCaseTwoFunctions /> }, 
            { content: <AggregateCaseWhere /> },
            { content: <AggregateCaseHaving /> }, 
        ],
    },

    { id: "have-in-mind", label: "Tenha em mente!", slides: [{ content: <AggregateHaveInMind /> }] },
    { id: "practice", label: "Teste!", slides: [{ content: <AggregatePractice /> }] },
]

export function AggregateTheory() {
    return (
        <div className="flex column go-center gap-xsm squeeze-x theory">
            <article className="assunto-teorico">
                <TheorySlides sections={sections} />
            </article>
        </div>
    )
}
