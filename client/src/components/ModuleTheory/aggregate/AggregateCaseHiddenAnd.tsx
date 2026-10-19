

import { Frame } from "../../shared/Frame"
import { Hint } from "../../shared/Hint"
import { Paint } from "../../shared/Paint"
import { Sql } from "../../shared/Sql"

export function AggregateCaseHiddenAnd() {
    return (
        <>
            <div className="flex column gap-sm case">
                <div className="flex column gap-sm">
                    <h2 className="case-header">União de grupos - and implícito</h2>
                    <p>⬩➤ <Frame cmd='ylw i !u' label='Para cada coluna não agregada'/> que se coloca junto ao <Frame cmd='ui' label='group by'/>, haverá <Frame cmd='' label='mais grupos formados'/>.</p>
                    <p>⬩➤ A <Frame cmd='ylw i !u' label='coluna não agregada'/> <Frame cmd='' label='não necessariamente'/> precisa estar no <Sql word='SELECT'/>, pois ele é <Frame cmd='' label='apenas o exibidor'/>, o dado é gerado pela função agregadora .</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex.:'/> obter todos os grupos/combinações desses locais e sua contagem (dados <Frame cmd='' label='de uma coluna'/>).</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex.:'/> obter todos os grupos/combinações possíveis desses locais e/com essas cores (dados <Frame cmd='' label='de duas colunas'/>).</p>
                    <Hint/>
                </div>

                <div className="flex row go-left gap-sm subtitles">
                    <h3 className="shine">Legenda ⬩➤</h3>
                    <Paint label='coluna(s) não agregadas' css='ylw' padding='p-mid' slender={false} />
                    <Paint label='local para colunas não agregadas' css='blue' padding='p-mid' slender={false} />
                    <Paint label='coluna agregada' css='d-blue' padding='p-mid' slender={false} />
                </div>

                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Frame cmd='ylw i !u' label='descricao_local'/>, <Frame cmd='d-blue i u' label='count(*)'/> <Sql word='as'/> semaforos_por_local <Sql word='from'/> semaforo</p>
                    <p><Sql word='join'/> local <Sql word='on'/> local.local_id = semaforo.local_sem_fk</p>
                    <p><Frame cmd='blue i u' label='group by'/> <Frame cmd='ylw i !u' label='descricao_local'/>;</p>
                </div>

                <div className="sql-code flex column gap-sm">
                    <p><Sql word='select'/> <Frame cmd='ylw i !u' label='descricao_local'/>, <Frame cmd='ylw i !u' label='cor'/>, <Frame cmd='d-blue i u' label='count(*)'/> <Sql word='as'/> semaforos_por_local <Sql word='from'/> semaforo</p>
                    <p><Sql word='join'/> local <Sql word='on'/> local.local_id = semaforo.local_sem_fk</p>
                    <p><Frame cmd='blue i u' label='group by'/> <Frame cmd='ylw i !u' label='descricao_local'/>, <Frame cmd='ylw i !u' label='cor'/>;</p>
                </div>
            </div>
        </>
    )
}
