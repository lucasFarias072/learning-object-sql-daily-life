import { TheorySlides, type TheorySection } from "../shared/TheorySlides"

import { SubqueryWhatIsIt } from "../subquery/SubqueryWhatIsIt"
import { SubqueryUtility } from "../subquery/SubqueryUtility"
import { SubqueryRequirements } from "../subquery/SubqueryRequirements"
import { SubqueryRepresentation } from "../subquery/SubqueryRepresentation"
import { SubqueryCasesIntro } from "../subquery/SubqueryCasesIntro"
import { SubqueryCaseMinimum } from "../subquery/SubqueryCaseMinimum"
import { SubqueryCaseEquals } from "../subquery/SubqueryCaseEquals"
import { SubqueryCaseJigsaw } from "../subquery/SubqueryJigsaw"
import { SubqueryReplaceJoin } from "../subquery/SubqueryReplaceJoin"
import { SubqueryHelpJoin } from "../subquery/SubqueryHelpJoin"
import { SubqueryCaseNotIn } from "../subquery/SubqueryNotIn"
import { SubqueryHaveInMind } from "../subquery/SubqueryHaveInMind"
import { SubqueryPractice } from "../subquery/SubqueryPractice"

const sections: TheorySection[] = [
    { id: "introduction", label: "O que é 'Sub consulta'?", slides: [{ content: <SubqueryWhatIsIt /> }] },
    { id: "usefullness", label: "Qual a utilidade?", slides: [{ content: <SubqueryUtility /> }] },
    { id: "requirements", label: "Do que precisa?", slides: [{ content: <SubqueryRequirements /> }] },
    { id: "representation", label: "Representação", slides: [{ content: <SubqueryRepresentation /> }] },
    {
            id: "cases",
            label: "Casos de uso",
            slides: [
                { content: <SubqueryCasesIntro /> },  
                { content: <SubqueryCaseMinimum/> },
                { content: <SubqueryCaseEquals/> },
                { content: <SubqueryCaseJigsaw/> },
                { content: <SubqueryHelpJoin/> },
                { content: <SubqueryReplaceJoin/> },
                { content: <SubqueryCaseNotIn/> },
            ],
        },
    { id: "have-in-mind", label: "Tenha em mente!", slides: [{ content: <SubqueryHaveInMind /> }] },
    { id: "practice", label: "Teste!", slides: [{ content: <SubqueryPractice /> }] },
]

export function SubqueryTheory() {
    return (
        <div className="flex column go-center gap-xsm squeeze-x theory">
            <article className="assunto-teorico">
                <TheorySlides sections={sections} />
            </article>
        </div>
    )
}
