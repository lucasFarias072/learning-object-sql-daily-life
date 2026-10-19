

import { BottomTraveler } from "./shared/BottomTraveler"
import { Frame } from "../shared/Frame"
import { Paint } from "../shared/Paint"

interface ContainerProps {
    subject: string
    order: number
    description: string
}

export function ContainerJoin({subject, order, description}: ContainerProps) {
    
    function loadJoinWhatIsIt() {
        return (
            <>
            <div id="about-head" className="mv-3">
                    <h2 className="as-line round-title">O que é JOIN?</h2>
                </div>
                
                <div id="about-body" className="flex column gap-xsm body-layout">
                    <ul className="flex column gap-sm">
                        <li><span className="upper">join</span> é uma <Frame cmd='' label="cláusula"/> <Frame cmd='ui' label="sql"/> que <Frame cmd='' label="junta"/>, numa única consulta, <Frame cmd='' label="colunas"/> que vêm de <Frame cmd='' label="tabelas diferentes"/>.</li>
                        <li>Uma tabela sozinha só enxerga suas próprias colunas.</li>
                        <li>Quando a <Frame cmd='' label="informação"/> que você precisa está <Frame cmd='' label="espalhada"/> em mais de uma tabela, o <Frame cmd='ui' label="join"/> <Frame cmd='' label="une todas"/> essas tabelas numa só.</li>
                    </ul>
                </div>
            </>
        )
    }

    function loadJoinUtility() {
        return (
            <>
                <div id="usefullness-head" className="mv-3">
                    <h2 className="title-what-is as-line round-title">Qual a utilidade?</h2>
                </div>

                <div id="usefullness-body" className="flex column gap-xsm body-layout">
                    <ul className="flex column gap-sm">
                        <li><Frame cmd='' label="Responder perguntas"/> que exigem <Frame cmd='' label="informação"/> de <Frame cmd='' label="mais de uma tabela"/> ao mesmo tempo.</li>
                        <li>Perguntas costumam envolver diversas informações/dados, que se dividem em tabelas diferentes.</li>
                        <li>O <Frame cmd='ui' label="join"/> faz parte do <span className="upper">sql</span> e faz sentido devido ao <Frame cmd='' label="seguinte fluxo"/>.</li>
                        <li>SQL é uma linguagem de bancos de dados relacionais.</li>
                        <li>Bancos de dados relacionais compõem tabelas.</li>
                        <li>Tabelas compõem colunas (características) e linhas (dados).</li>
                        <li>Dados estão espalhados entre tabelas diferentes.</li>
                        <li>Tabelas se juntam pelos dados únicos delas.</li>
                        <li>Quem junta tabelas é a cláusula <span className="upper">join</span>.</li>
                    </ul>
                </div>
            </>
        )
    }

    function loadJoinRequirements() {
        return (
            <>
                <div id="requirements-head" className="mv-3">
                    <h2 className="title-what-is as-line round-title">Do que precisa?</h2>
                </div>

                <div id="requirements-body" className="flex column gap-xsm body-layout">
                    <ul className="flex column gap-sm">
                        <li>O <span className="upper">join</span> precisa de <Frame cmd='' label="3 elementos"/>.</li>
                        <li><Frame cmd='' label="Duas ou mais tabelas"/>.</li>
                        <li>Pelo menos um <Frame cmd='' label="dado único"/> que exista <Frame cmd='' label="entre tabelas"/>.</li>
                        <li>A cláusula <Frame cmd='ui' label="join + on"/> representam a <Frame cmd='' label="chamada"/> e <Frame cmd='' label="ponto de junção"/> entre as tabelas.</li>  
                    </ul>
                </div>
            </>
        )
    }

    function loadJoinRepresentation() {
        return (
            <>
                <div id="representation-head">
                    <h2 className="title-what-is as-line round-title">Representação</h2>
                </div>

                <div id="representation-body" className="flex column gap-xsm body-layout">
                    <ul className="flex column gap-sm">
                        <li>Imagine uma <span className="item-s p-sm">folha de papel</span> como se fosse uma <span className="item-s p-sm">tabela</span>.</li>
                        <li>Imagine que existam <span className="item-s p-sm">traços verticais</span> distribuídos nessa folha.</li>
                        <li>Cada espaço tracejado é uma <span className="item-s p-sm">coluna</span> dessa tabela.</li>
                        <li>Para realizar um <span className="upper">join</span>, imagine uma <span className="item-s p-sm">colagem horizontal</span> entre <span className="item-s p-sm">folhas de papel</span>.</li>
                        <li>A <span className="item-s p-sm">cola</span> que juntou as duas folhas é uma <span className="item-s p-sm">coluna da folha 1</span> que se <span className="item-s p-sm">repete na folha 2</span>.</li>
                    </ul>
                </div>
            </>
        )
    }

    function loadJoinMinimumCase() {
        return (
            <>
                <div className="flex column gap-sm case case-one">
                    <div className="flex column gap-sm">
                        <h2 className="case-header">Caso 1: caso mínimo</h2>
                        <p>⬩➤ Nesse primeiro caso, apenas duas tabelas são usadas.</p>
                        <p>⬩➤ A tabela <span className="item-y p-sm">local</span> tem um <span className="item-s p-sm">dado único transferível</span> pra tabela <span className="item-db p-sm">pessoa</span>.</p>
                        <p>⬩➤ Observe as tabelas: <span className="item-y p-sm">local</span> e <span className="item-db p-sm">pessoa</span>.</p>
                    </div>
                    
                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda ⬩➤</h3>
                        <p className="item-y p-mid">folha de papel 1</p>
                        <p className="item-db p-mid">folha de papel 2</p>
                        <Paint label="a cola" css="blue" padding="p-mid" slender={false}/>
                        <p className="item-r p-mid">cópia</p>
                        <p className="item-y2 p-mid">coluna que cola</p>
                    </div>
                    
                    <div className="sql-code flex column gap-sm">
                        <p><span className="upper">select</span> nome, descricao_local <span className="upper">from</span> <span className="item-y p-sm">local</span></p>
                        <p><Frame cmd='blue i u' label="join"/> <span className="item-db p-sm">pessoa</span> <Frame cmd='blue i u' label="on"/> pessoa.<span className="item-r p-sm">local_pess_fk</span> = local.<span className="item-y2 p-sm">local_id</span>;</p>
                        <BottomTraveler tagId="#exec" reversed={false}></BottomTraveler>
                    </div>
                </div>
            </>
        )
    }

    return <>
        {subject === 'join' && order === 1 && loadJoinWhatIsIt()}
        {subject === 'join' && order === 2 && loadJoinUtility()}
        {subject === 'join' && order === 3 && loadJoinRequirements()}
        {subject === 'join' && order === 4 && loadJoinRepresentation()}
        {subject === 'join' && order === 5 && loadJoinMinimumCase()}
    </>
}

