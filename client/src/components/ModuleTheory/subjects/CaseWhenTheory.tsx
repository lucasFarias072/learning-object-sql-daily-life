import { TheorySlides, type TheorySection } from "../shared/TheorySlides"

import { CaseWhenWhatIsIt } from "../case-when/CaseWhenWhatIsIt"
import { CaseWhenUtility } from "../case-when/CaseWhenUtility"
import { CaseWhenRequirements } from "../case-when/CaseWhenRequirements"
import { CaseWhenRepresentation } from "../case-when/CaseWhenRepresentation"
import { CaseWhenCasesIntro } from "../case-when/CaseWhenCasesIntro"
import { CaseWhenOnSelect } from "../case-when/CaseWhenOnSelect"
import { CaseWhenOnOrderBy } from "../case-when/CaseWhenOnOrderBy"
import { CaseWhenOnGroupBy } from "../case-when/CaseWhenOnGroupBy"
import { CaseWhenOnAll } from "../case-when/CaseWhenOnAll"
import { CaseWhenHaveInMind } from "../case-when/CaseWhenHaveInMind"
import { CaseWhenPractice } from "../case-when/CaseWhenPractice"

const sections: TheorySection[] = [
    { id: "introduction", label: "O que é 'Case When'?", slides: [{ content: <CaseWhenWhatIsIt /> }] },
    { id: "usefullness", label: "Qual a utilidade?", slides: [{ content: <CaseWhenUtility /> }] },
    { id: "requirements", label: "Do que precisa?", slides: [{ content: <CaseWhenRequirements /> }] },
    { id: "representation", label: "Representação", slides: [{ content: <CaseWhenRepresentation /> }] },
    {
            id: "cases",
            label: "Casos de uso",
            slides: [
                { content: <CaseWhenCasesIntro /> }, 
                { content: <CaseWhenOnSelect /> }, 
                { content: <CaseWhenOnOrderBy /> }, 
                { content: <CaseWhenOnGroupBy /> }, 
                { content: <CaseWhenOnAll /> }, 
            ],
        },
    { id: "have-in-mind", label: "Tenha em mente!", slides: [{ content: <CaseWhenHaveInMind /> }] },
    { id: "practice", label: "Teste", slides: [{ content: <CaseWhenPractice /> }] },
]

export function CaseWhenTheory() {
    return (
        <div className="flex column go-center gap-xsm squeeze-x theory">
            <article className="assunto-teorico">
                <TheorySlides sections={sections} />
            </article>
        </div>
    )
}
