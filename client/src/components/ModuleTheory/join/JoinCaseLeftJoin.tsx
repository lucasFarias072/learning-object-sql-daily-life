

import { Hint } from "../../shared/Hint"
import { Frame } from "../../shared/Frame"
import { Sql } from "../../shared/Sql"

export function JoinCaseLeftJoin() {
    return (
        <>
            <div className="flex column gap-sm case">

                <div id="case-left-join-title-join" className="mv-1">
                    <h2 className="case-header">Caso: <Frame cmd='u' label='left join' /></h2>
                </div>

                <div id="case-left-join-body-join" className="flex column gap-sm theory-layout">
                    <p>⬩➤ <Sql word='left join'/> é um <Frame cmd='red i !u' label='opositor'/> à lógica do <Sql word='join'/>.</p>
                    <p>⬩➤ Enquanto <Sql word='join'/> <Frame cmd='' label='retira chaves sem correspondência'/> do resultado, <Sql word='left join'/> <Frame cmd='' label='evidencia'/>.</p>
                    <p>⬩➤ <Sql word='left join'/>, portanto, tem uma <Frame cmd='' label='relação direta'/> com a <Frame cmd='red i !u' label='não correspondência'/>.</p>
                    <p>⬩➤ Ao juntar, a <Frame cmd='' label='tabela exposta'/> ao <Sql word='left join'/>, tem <Frame cmd='' label='todas colunas'/> com <Frame cmd='red i !u' label='valor nulo'/> do <Frame cmd='shine i !u' label='lado direito da junção'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 1'/> mostra isso, a <Frame cmd='' label='tabela'/> <Frame cmd='d-blue i !u' label='passageiro'/>, coloca todas suas <Frame cmd='' label='linhas'/> como <Frame cmd='red i !u' label='nulo'/>, quando <Frame cmd='red i !u' label='não há correspondência'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> <Sql word='where campo nulo is null'/> é o <Frame cmd='' label='filtro'/> para mostrar as <Frame cmd='red i !u' label='não correspondência'/> (usar algum <Frame cmd='shine i !u' label='campo do lado direito da junção'/>).</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs.'/> Uma <Frame cmd='shine i !u' label='forma de depurar'/> <Sql word='left join'/>, e usando <Sql word='select *'/>, sem passar colunas.</p>
                    <p><Frame cmd='shine i !u' label='⬩➤ Obs.'/> <Frame cmd='d-cyan i !u' label='⬩➤ Ex. 2'/> Ao escolher um <Frame cmd='shine i !u' label='campo do lado direito da junção'/> <Frame cmd='' label='optar pelos que são'/> campo de <Frame cmd='' label='chave primária/estrangeira'/>, ao invés dos campos comuns.</p>
                    <Hint/>
                </div>
                
                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 1'/>
                        </div>
                        <Frame cmd='ylw p !u' label='folha de papel 1'/>
                        <Frame cmd='d-blue p !u' label='folha de papel 2 = tabela exposta'/>
                        <Frame cmd='pk p !u' label="cópia da referência" />
                        <Frame cmd='cream p !u' label="referência" />
                        <Frame cmd='blue p !u' label='cola'/>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='assento'/></p>
                        <p><Frame cmd='blue i u' label='left join'/> <Frame cmd='d-blue i !u' label='passageiro'/> <Sql word='on'/> passageiro.<Frame cmd='pk i !u' label='assento_fk'/> = assento.<Frame cmd='cream i !u' label='assento_id'/></p>
                    </div>
                </div>

                <div className="frame-example ex-join mt-1">
                    <div className="flex row go-left gap-sm subtitles">
                        <div className="flex column gap-xsm">
                            <Frame cmd='shine p !u' label='Legenda ⬩➤'/>
                            <Frame cmd='d-cyan p !u' label='⬩➤ Ex. 2'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='ylw p !u' label='folha de papel 1'/>
                            <Frame cmd='d-blue p !u' label='folha de papel 2 = tabela exposta'/>
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='cream p !u' label="referência" />
                            <Frame cmd='pk p !u' label="cópia da referência" />
                        </div>
                        <div className="flex column gap-xsm">
                            <Frame cmd='blue p !u' label='cola'/>
                            <Frame cmd='ppl p !u' label='filtro para a não correspondência'/>
                        </div>
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> * <Sql word='from'/> <Frame cmd='ylw i !u' label='assento'/></p>
                        <p><Frame cmd='blue i u' label='left join'/> <Frame cmd='d-blue i !u' label='passageiro'/> <Sql word='on'/> passageiro.<Frame cmd='pk i !u' label='assento_fk'/> = assento.<Frame cmd='cream i !u' label='assento_id'/></p>
                        <p><Frame cmd='ppl i u' label='where' /> passageiro_id <Frame cmd='ppl i u' label='is null'/>;</p>
                    </div>
                </div>

                {/* <div className="flex row go-left gap-sm subtitles"> */}
                    {/* <h3 className="shine">Legenda 2 ⬩➤</h3> */}
                    {/* <Paint label='correspondência' css='cream' padding='p-mid' slender={false} /> 
                    <Paint label='cláusula da não correspondência' css='ppl' padding='p-mid' slender={false} /> */}
                {/* </div> */}

                {/* <div className="flex column gap-sm"> */}
                    {/* <p><Frame cmd='' label='⬩➤ Imagine o seguinte'/>: <Frame cmd='' label='condição 1'/> <Sql word='and'/> <Frame cmd='' label='condição 2'/></p>
                    <p className="item-y p-sm"> 
                        <Sql word='left join'/> passageiro <Sql word='on'/> passageiro.assento_fk = assento.assento_id <Sql word='and'/> assento_id % 2 = 0
                    </p>
                    <p>⬩➤ Isso significa que agora são <Frame cmd='' label='duas condições'/>, não é mais apenas o <Frame cmd='u' label='left join'/> na sua igualdade de chaves.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Regra: 2 elevado à quantidade de condições'/> = duas, resulta em <Frame cmd='' label='4 possibillidades'/>.</p>
                    <p>⬩➤ As 4 possibilidades: <Frame cmd='' label='(true, true)'/> <Frame cmd='' label='(true, false)'/> <Frame cmd='' label='(false, true)'/> <Frame cmd='' label='(false, false)'/>.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Porque são 2 booleanos por possibilidade?'/> por que são duas condições, podendo gerar 2 booleanos delas.</p>
                    <p><Frame cmd='d-cyan i !u' label='⬩➤ Regra booleana aqui:'/> <Frame cmd='ui' label='true && true'/> derivado de <Frame cmd='' label='condição 1'/> <Sql word='and'/> <Frame cmd='' label='condição 2'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='Linhas'/> no <Frame cmd='u' label='left join'/> <Frame cmd='' label='contradizem'/> a regra booleana: <Frame cmd='' label='(false, true)'/> <Frame cmd='' label='(true, false)'/> <Frame cmd='' label='(false, false)'/>.</p>
                    
                    <p>⬩➤ É isso que acontece na consulta descrita abaixo.</p>

                    <div className="flex row go-left gap-sm subtitles">
                        <h3 className="shine">Legenda 2 ⬩➤</h3>
                        <Paint label='condição 1 natural do left join (true ou false)' css='ylw' padding='p-mid' slender={false} /> 
                        <Paint label='condição 2 (true ou false)' css='d-blue' padding='p-mid' slender={false} />
                    </div>

                    <div className="sql-code flex column gap-sm">
                        <p><Sql word='select'/> assento_id, assento_credencial <Sql word='from'/> assento</p>
                        <p><Sql word='left join'/> passageiro <Sql word='on'/> <Frame cmd='ylw i !u' label='passageiro.assento_fk = assento.assento_id'/> <Sql word='and'/> <Frame cmd='d-blue i !u' label='assento_id % 2 = 0'/></p>
                        <p><Sql word='where'/> passageiro.assento_fk <Sql word='is'/> <Sql word='null'/>;</p>
                    </div>

                    <p>⬩➤ A <Frame cmd='' label='consulta cima'/> retorna <Frame cmd='' label='16 linhas'/>, subdividas da seguinte maneira:</p>
                    <p>⬩➤ <Frame cmd='' label='(false, true)'/> <Sql word='D10, E5, E13'/> <Frame cmd='ylw i !u' label='🔴 não corresponde no cruzamento das chaves'/> <Frame cmd='d-blue i !u' label='🟢 ids pares'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='(false, false)'/> <Sql word='D1, D3, E8, E10'/> <Frame cmd='ylw i !u' label='🔴 não corresponde no cruzamento das chaves'/> <Frame cmd='d-blue i !u' label='🔴 ids ímpares'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='(true, false)'/> <Sql word='D5, D7, D9, D11, D13, E2, E4, E6, E12'/> <Frame cmd='ylw i !u' label='🟢 corresponde no cruzamento das chaves'/> <Frame cmd='d-blue i !u' label='🔴 ids ímpares'/>.</p>
                    <p>⬩➤ <Frame cmd='' label='(true, true)'/> não foram chamados, note isso pelos <Frame cmd='' label='assento_id que faltam'/> no resultado.</p>
                    <p><span className="shine">⬩➤ Teste</span> <Frame cmd='' label='se retirada a condição'/> <Sql word='and'/>, <Frame cmd='' label='ficam'/> apenas as <Frame cmd='' label='linhas sem correspondência de chaves'/>.</p>
                    <p><span className="shine">⬩➤ Teste</span> <Frame cmd='' label='mova a condição'/> <Sql word='and'/> para depois do <Frame cmd='ui' label='where is null'/> e observe como <Frame cmd='' label='ele filtra após o agrupamento'/>.</p> */}
                {/* </div> */}
            </div>
        </>
    )
}
