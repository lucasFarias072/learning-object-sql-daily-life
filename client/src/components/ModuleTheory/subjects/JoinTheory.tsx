import { TheorySlides, type TheorySection } from "../shared/TheorySlides"

import { JoinWhatIsIt } from "../join/JoinWhatIsIt"
import { JoinUtility } from "../join/JoinUtility"
import { JoinRequirements } from "../join/JoinRequirements"
import { JoinHaveInMind } from "../join/JoinHaveInMind"
import { JoinRepresentation } from "../join/JoinRepresentation"
import { JoinCasesIntro } from "../join/JoinCasesIntro"
import { JoinCaseMinimum } from "../join/JoinCaseMinimum"
import { JoinCaseSequential } from "../join/JoinCaseSequential"
import { JoinCasePolyreference } from "../join/JoinCasePolyreference"
import { JoinCaseSelfJoin } from "../join/JoinCaseSelfJoin"
import { JoinCaseJoinPlusOr } from "../join/JoinCaseJoinPlusOr"
import { JoinCaseLeftJoin } from "../join/JoinCaseLeftJoin"
import { JoinFiltersIntro } from "../join/JoinFiltersIntro"
import { JoinFilterJoinItself } from "../join/JoinFilterJoinItself"
import { JoinFilterWhereIsNull } from "../join/JoinFilterWhereIsNull"
import { JoinFilterAndPlusOr } from "../join/JoinFilterAndPlusOr"
import { JoinPractice } from "../join/JoinPractice"

const sections: TheorySection[] = [
    { id: "introduction", label: "O que é JOIN?", slides: [{ content: <JoinWhatIsIt /> }] },
    { id: "usefullness", label: "Qual a utilidade?", slides: [{ content: <JoinUtility /> }] },
    { id: "requirements", label: "Do que precisa?", slides: [{ content: <JoinRequirements /> }] },
    { id: "representation", label: "Representação", slides: [{ content: <JoinRepresentation /> }] },
    {
        id: "cases",
        label: "Casos de uso",
        slides: [
            { content: <JoinCasesIntro /> }, 
            { content: <JoinCaseMinimum /> }, 
            { content: <JoinCaseSequential /> }, 
            { content: <JoinCasePolyreference /> }, 
            { content: <JoinCaseSelfJoin /> }, 
            { content: <JoinCaseJoinPlusOr /> }, 
            { content: <JoinCaseLeftJoin /> }
        ],
    },
    {
        id: "filters",
        label: "Filtros pro JOIN",
        slides: [
            { content: <JoinFiltersIntro /> }, 
            { content: <JoinFilterJoinItself /> }, 
            { content: <JoinFilterWhereIsNull /> }, 
            { content: <JoinFilterAndPlusOr /> }
        ],
    },
    { id: "have-in-mind", label: "Tenha em mente!", slides: [{ content: <JoinHaveInMind /> }] },
    { id: "practice", label: "Teste!", slides: [{ content: <JoinPractice /> }] },
]

export function JoinTheory() {
    return (
        <div className="flex column go-center gap-xsm squeeze-x theory">
            <article className="assunto-teorico">
                <TheorySlides sections={sections} />
            </article>
        </div>
    )
}
