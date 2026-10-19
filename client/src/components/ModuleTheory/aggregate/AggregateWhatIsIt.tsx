

import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function AggregateWhatIsIt() {
    return (
        <>
        <div className="flex column gap-sm">

            <div id="what-is-title-aggregate" className="mv-1">
                <h2 className="as-line round-title">O que são funções agregadoras?</h2>
            </div>

            <div id="what-is-body-aggregate" className="flex column gap-xsm theory-layout">
                <ul className="flex column gap-sm">
                    <li>⬩➤ São <Frame cmd='' label='operações'/> que <Frame cmd='shine i !u' label='geram dados estatísticos'/> para <Frame cmd='' label='grupos de valores'/>.</li>
                    <li>⬩➤ <Frame cmd='' label='Os grupos'/> podem ser <Frame cmd='' label='formados de valores sozinhos'/> (quando existe uma coluna no agrupamento) <Frame cmd='' label='ou combinados'/> (mais de uma coluna).</li>
                    <li>⬩➤ Com a formação desses grupos, as <Frame cmd='' label='funções agregadoras'/> podem <Frame cmd='' label='agir sobre eles'/> (contagem, média, soma total, menor/maior grandeza).</li>
                    <li>⬩➤ Cada <Frame cmd='' label='função agregadora'/> <Frame cmd='' label='opera com colunas numéricas'/> que dão <Frame cmd='' label='sentido estatístico às colunas passadas'/> ao <Sql word='group by'/>.</li>
                    <li>⬩➤ O <Sql word='group by'/> recebe colunas <Frame cmd='d-blue i !u' label='➜'/> vários valores <Frame cmd='d-blue i !u' label='➜'/> valores individuais formam grupos de linha <Frame cmd='d-blue i !u' label='➜'/> recebem operação da função agregadora.</li>
                </ul>
            </div>

        </div>                  
        </>
    )
}
