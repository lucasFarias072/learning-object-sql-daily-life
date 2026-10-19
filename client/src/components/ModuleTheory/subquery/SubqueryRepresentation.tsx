

import { Frame } from "../../shared/Frame"

export function SubqueryRepresentation() {
    return (
        <>
            <div className="flex column gap-sm">

                <div id="rep-title-subquery" className="mv-1">
                    <h2 className="as-line round-title">Representação</h2>
                </div>

                <div id="rep-body-subquery" className="flex column gap-xsm theory-layout">
                    <ul className="flex column gap-sm">
                        <li>⬩➤ <Frame cmd='' label='É improvável'/> que exista uma <Frame cmd='' label='representação que explique fielmente'/> a lógica de uma <Frame cmd='shine i !u' label='subconsulta'/>.</li>
                        <li><Frame cmd='shine i !u' label='⬩➤ Motivo'/>: ela é <Frame cmd='' label='escrita de fora para dentro'/>, mas <Frame cmd='' label='executada de dentro para fora'/>.</li>
                        <li><Frame cmd='shine i !u' label='⬩➤ Complexidade'/> em explicar: a <Frame cmd='shine i !u' label='subconsulta mais interna'/> <Frame cmd='' label='resolve'/> primeiro, a <Frame cmd='shine i !u' label='subconsulta logo acima'/> <Frame cmd='' label='usa o resultado'/> dela.</li>
                        <li>⬩➤ <Frame cmd='' label='Uma ideia'/> que <Frame cmd='' label='ajuda a lembrar'/> a ordem é a <Frame cmd='shine i !u' label='boneca russa'/> e <Frame cmd='shine i !u' label='boneca russa invertida'/>.</li>
                        <li><Frame cmd='shine i !u' label='⬩➤ Para quem cria (pessoa)'/> a consulta é montada de fora para dentro, como uma <Frame cmd='shine i !u' label='boneca russa invertida'/>.</li>
                        <li><Frame cmd='shine i !u' label='⬩➤ Para quem resolve (SQL)'/> a consulta é resolvida de dentro para fora, como uma <Frame cmd='shine i !u' label='boneca russa'/>.</li>
                        <li>⬩➤ <Frame cmd='shine i !u' label='Cada  subconsulta'/> <Frame cmd='' label='entrega o resultado'/> para <Frame cmd='' label='aquela que estiver logo acima'/> e assim <Frame cmd='' label='continua até chegar'/> à <Frame cmd='shine i !u' label='consulta externa'/>.</li>
                        <li>⬩➤ A boneca ajuda a exemplificar a ordem dos acontecimentos, mas a forma de <Frame cmd='' label='entender de verdade'/> é <Frame cmd='shine i !u' label='praticando'/>.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
