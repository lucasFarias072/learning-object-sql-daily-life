

class JoinTemplate:
    last_update = '13/09/2026'

    def join_case_five_tsx():
        """
        import { Hint } from "../../shared/Hint"
        import { Ink } from "../../shared/Ink"
        import { Paint } from "../../shared/Paint"
        import { Sql } from "../../shared/Sql"

        export function JoinCaseFive() {
            return (
                <>
                    <div className="flex column gap-sm case case-five">
                        <div className="flex column gap-sm">
                            <h2 className="case-header"><Ink label='join + or' css='' padding='' slender={true} /></h2>
                            <p>⬩➤ Uso de uma <Ink label='mesma tabela' css='mixed' padding='p-sm' slender={false} /> para <Ink label='pegar algo' css='mixed' padding='p-sm' slender={false} /> que está <Ink label='dividido' css='mixed' padding='p-sm' slender={false} /> nela e <Ink label='juntar' css='mixed' padding='p-sm' slender={false} />.</p>
                            <p>⬩➤ Esse caso é o <Ink label='inverso do caso anterior' css='mixed' padding='p-sm' slender={false} />, pois ele quer <Ink label='juntar algo que está divido' css='mixed' padding='p-sm' slender={false} /> em uma única coisa.</p>
                            <p>⬩➤ <Ink label='Ex.: Lâmpada e TV' css='mixed' padding='p-sm' slender={false} /> ⬩➤ a lâmpada é o objeto alvo e a TV é o objeto referência pra dizer onde a lâmpada está.</p>
                            <p>⬩➤ Dessa vez, se quer saber todos os objetos de alguém, então não faz sentido separar o que é alvo do que é referência.</p>
                            <p>⬩➤ A consulta <Ink label='não distingue' css='mixed' padding='p-sm' slender={false} /> mais os papéis, por isso o <Ink label='join + or' css='mixed' padding='p-sm' slender={true} /> é <Ink label='apropriado' css='mixed' padding='p-sm' slender={false} />.</p>
                            <p>⬩➤ Vamos novamente usa as tabelas <Ink label='dono' css='ylw' padding='p-sm' slender={false} />, <Ink label='objeto_coordenada' css='d-blue' padding='p-sm' slender={false} /> e <Ink label='objeto' css='d-cyan' padding='p-sm' slender={false} />, que está <Ink label='fazendo' css='mixed' padding='p-sm' slender={false} /> <Ink label='self join' css='mixed' padding='p-sm' slender={true} /></p>
                            <Hint/>
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Paint label='folha de papel 1' css='ylw' padding='p-mid' slender={false} />
                            <Paint label='folha de papel 2' css='d-blue' padding='p-mid' slender={false} />
                            <Paint label='folha de papel 3' css='d-cyan' padding='p-mid' slender={false} />
                            <Paint label='a cola' css='blue' padding='p-mid' slender={false} />
                            <Paint label='cópia' css='red' padding='p-mid' slender={false} />
                            <Paint label='coluna que cola' css='cream' padding='p-mid' slender={false} />
                        </div>

                        <div className="sql-code flex column gap-sm">
                            <p><Sql word='select'/> * <Sql word='from'/> <Ink label='dono' css='ylw' padding='p-sm' slender={false} /></p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='objeto_coordenada' css='d-blue' padding='p-sm' slender={false} /> <Ink label='on' css='blue' padding='p-sm' slender={true} /> objeto_coordenada.<Ink label='dono_fk' css='red' padding='p-sm' slender={false} /> = dono.<Ink label='dono_id' css='cream' padding='p-sm' slender={false} /></p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='objeto' css='d-cyan' padding='p-sm' slender={false} /> <Ink label='on' css='blue' padding='p-sm' slender={true} /> objeto.<Ink label='objeto_id' css='cream' padding='p-sm' slender={false} /> = objeto_coordenada.<Ink label='objeto_fk_alvo' css='red' padding='p-sm' slender={false} /> <Ink label='or' css='blue' padding='p-sm' slender={true} /> objeto.<Ink label='objeto_id' css='cream' padding='p-sm' slender={false} /> = objeto_coordenada.<Ink label='objeto_fk_ref' css='red' padding='p-sm' slender={false} />;</p>
                        </div>
                    </div>
                </>
            )
        }
        """

    def join_case_four_tsx():
        """
        import { Hint } from "../../shared/Hint"
        import { Ink } from "../../shared/Ink"
        import { Paint } from "../../shared/Paint"
        import { Sql } from "../../shared/Sql"

        export function JoinCaseFour() {
            return (
                <>
                    <div className="flex column gap-sm case case-four">
                        <div className="flex column gap-sm">
                            <h2 className="case-header"><Ink label='self join' css='' padding='' slender={true} /></h2>
                            <p>⬩➤ Uso de uma <Ink label='mesma referência de tabela' css='mixed' padding='p-sm' slender={false}/> duas ou mais vezes.</p>
                            <p><Ink label='⬩➤ Porque isso seria necessário?' css='d2-cyan' padding='p-sm' slender={false} /></p>
                            <p>⬩➤ Por que uma <Ink label='tabela' css='mixed' padding='p-sm' slender={false} /> pode ter a mesma referência <Ink label='repetida' css='mixed' padding='p-sm' slender={false} /> duas vezes, para fins de assumir <Ink label='papéis diferentes' css='mixed' padding='p-sm' slender={false} />.</p>
                            <p>⬩➤ No <Ink label='exemplo' css='mixed' padding='p-sm' slender={false} /> abaixo, um objeto assume papel de <Ink label='alvo' css='mixed' padding='p-sm' slender={false} /> e um outro objeto assume papel de <Ink label='referência' css='mixed' padding='p-sm' slender={false} /> dele.</p>
                            <p>⬩➤ <Ink label='Ex.: Lâmpada e TV' css='mixed' padding='p-sm' slender={false} /> ⬩➤ a lâmpada é o objeto alvo e a <Ink label='tv' css='mixed' padding='p-sm' slender={true} /> é o objeto referência pra <Ink label='dizer onde está' css='mixed' padding='p-sm' slender={false} /> a <Ink label='lâmpada' css='mixed' padding='p-sm' slender={false} />.</p>
                            <p>⬩➤ Os objetos pertencem a mesma coluna, mas seus papéis são outros, é preciso então juntar <Ink label='objeto' css='d-cyan' padding='p-sm' slender={false} /> <Ink label='2 vezes' css='mixed' padding='p-sm' slender={false} />.</p>
                            <p>⬩➤ <Ink label='self join' css='' padding='' slender={true} /> é apropriado em consultas que distinguem os papéis.</p>
                            <p>⬩➤ Para <Ink label='self join' css='mixed' padding='p-sm' slender={true} /> é preciso <Ink label='dar apelidos' css='ppl' padding='p-sm' slender={false} /> <Ink label='diferentes em ambas referências' css='mixed' padding='p-sm' slender={false} />, pois não são a mesma tabela.</p>
                            <Hint/>
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Paint label='folha de papel 1' css='ylw' padding='p-mid' slender={false} /> 
                            <Paint label='folha de papel 2' css='d-blue' padding='p-mid' slender={false} /> 
                            <Paint label='folha de papel 3' css='d-cyan' padding='p-mid' slender={false} /> 
                            <Paint label='apelido' css='ppl' padding='p-mid' slender={false} /> 
                            <Paint label='a cola' css='blue' padding='p-mid' slender={false} /> 
                            <Paint label='cópia' css='red' padding='p-mid' slender={false} /> 
                            <Paint label='coluna que cola' css='cream' padding='p-mid' slender={false} />
                        </div>

                        <div className="sql-code flex column gap-sm">
                            <p><Sql word='select'/> * <Sql word='from'/> <Ink label='dono' css='ylw' padding='p-sm' slender={false} /></p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='objeto_coordenada' css='d-blue' padding='p-sm' slender={false}/> <Ink label='on' css='blue' padding='p-sm' slender={true} /> objeto_coordenada.<Ink label='dono_fk' css='red' padding='p-sm' slender={false}/> = dono.<Ink label='dono_id' css='cream' padding='p-sm' slender={false}/> </p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='objeto' css='d-cyan' padding='p-sm' slender={false} /> <Ink label='obj_alvo' css='ppl' padding='p-sm' slender={false} /> <Ink label='on' css='blue' padding='p-sm' slender={true} /> obj_alvo.<Ink label='objeto_id' css='cream' padding='p-sm' slender={false}/> = objeto_coordenada.<Ink label='objeto_fk_alvo' css='red' padding='p-sm' slender={false}/></p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='objeto' css='d-cyan' padding='p-sm' slender={false} /> <Ink label='obj_ref' css='ppl' padding='p-sm' slender={false} /> <Ink label='on' css='blue' padding='p-sm' slender={true} /> obj_ref.<Ink label='objeto_id' css='cream' padding='p-sm' slender={false}/> = objeto_coordenada.<Ink label='objeto_fk_ref' css='red' padding='p-sm' slender={false}/>;</p>
                        </div>
                    </div>
                </>
            )
        }
        """

    def join_case_one_tsx():
        """
        import { Hint } from "../../shared/Hint"
        import { Ink } from "../../shared/Ink"
        import { Paint } from "../../shared/Paint"
        import { Sql } from "../../shared/Sql"

        export function JoinCaseOne() {
            return (
                <>
                    <div className="flex column gap-sm case case-one">
                        <div className="flex column gap-sm">
                            <h2 className="case-header">Caso mínimo</h2>
                            <p>⬩➤ O caso mínimo para o <Ink label='join' css='' padding='' slender={true}/> são <Ink label='duas tabelas' css='mixed' padding='p-sm' slender={false}/>.</p>
                            <p>⬩➤ A tabela <Ink label='local' css='ylw' padding='p-sm' slender={false} /> tem um <Ink label='dado único transferível' css='mixed' padding='p-sm' slender={false}/> pra tabela <Ink label='pessoa' css='d-blue' padding='p-sm' slender={false} />.</p>
                            <Hint/>
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Paint label='folha de papel 1' css='ylw' padding='p-mid' slender={false} /> 
                            <Paint label='folha de papel 2' css='d-blue' padding='p-mid' slender={false} /> 
                            <Paint label='a cola' css='blue' padding='p-mid' slender={false} /> 
                            <Paint label='cópia' css='red' padding='p-mid' slender={false} /> 
                            <Paint label='coluna que cola' css='d-cyan' padding='p-mid' slender={false} />
                        </div>

                        <div className="sql-code flex column gap-sm">
                            <p><Sql word='select'/> nome, descricao_local <Sql word='from'/> <Ink label='local' css='ylw' padding='p-sm' slender={false} /></p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='pessoa' css='d-blue' padding='p-sm' slender={false} /> <Ink label='on' css='blue' padding='p-sm' slender={true} /> pessoa.<Ink label='local_fk' css='red' padding='p-sm' slender={false}/> = local.<Ink label='local_id' css='d-cyan' padding='p-sm' slender={false}/>;</p>
                        </div>
                    </div>
                </>
            )
        }
        """

    def join_cases_intro_tsx():
        """
        import { Ink } from "../../shared/Ink"

        export function JoinCasesIntro() {
            return (
                <>
                    <div id="take-a-look-head" className="mv-3">
                        <h2 className="title-what-is as-line round-title">Olha aqui!</h2>
                    </div>
                    <div className="flex column gap-mid">
                        <h2 className="minor-title">
                            ✦ Vejamos contextos de uso do <Ink label='join' css='' padding='' slender={true}/> com o auxílio do contexto da folha de papel.
                        </h2>
                    </div>
                </>
            )
        }
        """

    def join_case_six_tsx():
        """
        import { Hint } from "../../shared/Hint"
        import { Ink } from "../../shared/Ink"
        import { Paint } from "../../shared/Paint"
        import { Sql } from "../../shared/Sql"

        export function JoinCaseSix() {
            return (
                <>
                    <div className="flex column gap-sm case case-six">
                        <div className="flex column gap-sm">
                            <h2 className="case-header"><Ink label='left join' css='' padding='' slender={true}/></h2>
                            <p>⬩➤ O <Ink label='join' css='' padding='' slender={true}/>, na sua forma regular, anula chaves sem correspondência dos dois lados (tabelas que se cruzam por chave fk).</p>
                            <p>⬩➤ No caso do <Ink label='left join' css='' padding='' slender={true}/>, ele realiza o oposto: ele <Ink label='busca a não correspondência' css='mixed' padding='p-sm' slender={false}/>.</p>
                            <p>⬩➤ E isso acontece por causa da declaração: <Ink label='where' css='mixed' padding='p-sm' slender={true}/> <Ink label='campo' css='mixed' padding='p-sm' slender={false}/> <Ink label='is null' css='mixed' padding='p-sm' slender={true}/>.</p>
                            <p>⬩➤ Na <Ink label='forma regular' css='mixed' padding='p-sm' slender={false}/> do <Ink label='left join' css='' padding='' slender={true}/>, existe apenas <Ink label='uma condição' css='mixed' padding='p-sm' slender={false}/>: <Ink label='chave_a = chave_b' css='mixed' padding='p-sm' slender={false}/> = <Ink label='espera false' css='mixed' padding='p-sm' slender={false}/>.</p>
                            <p><Ink label='⬩➤ Para cada condição: 2 elevado à quantidade de condições' css='d-cyan' padding='p-sm' slender={false}/> = 2 possibilidades (true) (false).</p>
                            <p><Ink label='⬩➤ Regra booleana aqui:' css='d-cyan' padding='p-sm' slender={false}/> <Ink label='true' css='mixed' padding='p-sm' slender={true}/> pois a condição busca igualdade.</p>
                            <p><Ink label='⬩➤ Ou seja:' css='d-cyan' padding='p-sm' slender={false}/> <Ink label='tudo' css='mixed' padding='p-sm' slender={false}/> aquilo que <Ink label='contradizer' css='mixed' padding='p-sm' slender={false}/> a <Ink label='regra booleana' css='mixed' padding='p-sm' slender={false}/> estabelecida, <Ink label='é capturado' css='mixed' padding='p-sm' slender={false}/> pelo <Ink label='left join' css='mixed' padding='p-sm' slender={true}/>.</p>
                            
                            <p>⬩➤ Veja abaixo como fica a <Ink label='⬩➤ regra geral' css='d-cyan' padding='p-sm' slender={false}/></p>
                            <Hint/>
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda 1 ⬩➤</h3>
                            <Paint label='tabela universo com todos os dados' css='ylw' padding='p-mid minor-minor-title' slender={false} /> 
                            <Paint label='tabela relacionada que pode faltar correspondência' css='d-blue' padding='p-mid minor-minor-title' slender={false} /> 
                            <Paint label='dono da regra booleana' css='blue' padding='p-mid' slender={false} />
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda 2 ⬩➤</h3>
                            <Paint label='correspondência' css='cream' padding='p-mid' slender={false} /> 
                            <Paint label='cláusula da não correspondência' css='ppl' padding='p-mid' slender={false} />
                        </div>

                        {/* Exemplo de consulta */}
                        <div className="sql-code flex column gap-sm">
                            <p><Sql word='select'/> campo <Sql word='from'/> <Ink label='tabela_uni' css='ylw' padding='p-sm' slender={false}/></p>
                            <p><Sql word='left join'/> <Ink label='tabela_rel' css='d-blue' padding='p-sm' slender={false}/> <Ink label='on' css='blue' padding='p-sm' slender={true} /> tabela_rel.chave_fk_copiada <Ink label='=' css='cream' padding='p-sm' slender={false}/> tabela_uni.chave_pk_emprestada</p>
                            <p><Ink label='where' css='ppl' padding='p-sm' slender={true}/> tabela_rel.campo_dessa_tabela <Ink label='is null' css='ppl' padding='p-sm' slender={true}/></p>
                        </div>

                        <div className="flex column gap-sm">
                            <p><Ink label='⬩➤ Imagine o seguinte' css='mixed' padding='p-sm' slender={false}/>: <Ink label='condição 1' css='mixed' padding='p-sm' slender={false}/> <Sql word='and'/> <Ink label='condição 2' css='mixed' padding='p-sm' slender={false}/></p>
                            <p className="item-y p-sm"> 
                                <Sql word='left join'/> passageiro <Sql word='on'/> passageiro.assento_fk = assento.assento_id <Sql word='and'/> assento_id % 2 = 0
                            </p>
                            <p>⬩➤ Isso significa que agora são <Ink label='duas condições' css='mixed' padding='p-sm' slender={false}/>, não é mais apenas o <Ink label='left join' css='' padding='' slender={true}/> na sua igualdade de chaves.</p>
                            <p><Ink label='⬩➤ Regra: 2 elevado à quantidade de condições' css='d-cyan' padding='p-sm' slender={false}/> = duas, resulta em <Ink label='4 possibillidades' css='mixed' padding='p-sm' slender={false}/>.</p>
                            <p>⬩➤ As 4 possibilidades: <Ink label='(true, true)' css='mixed' padding='p-sm' slender={false}/> <Ink label='(true, false)' css='mixed' padding='p-sm' slender={false}/> <Ink label='(false, true)' css='mixed' padding='p-sm' slender={false}/> <Ink label='(false, false)' css='mixed' padding='p-sm' slender={false}/>.</p>
                            <p><Ink label='⬩➤ Porque são 2 booleanos por possibilidade?' css='d-cyan' padding='p-sm' slender={false}/> por que são duas condições, podendo gerar 2 booleanos delas.</p>
                            <p><Ink label='⬩➤ Regra booleana aqui:' css='d-cyan' padding='p-sm' slender={false}/> <Ink label='true && true' css='mixed' padding='p-sm' slender={true}/> derivado de <Ink label='condição 1' css='mixed' padding='p-sm' slender={false}/> <Sql word='and'/> <Ink label='condição 2' css='mixed' padding='p-sm' slender={false}/>.</p>
                            <p>⬩➤ <Ink label='Linhas' css='mixed' padding='p-sm' slender={false}/> no <Ink label='left join' css='' padding='' slender={true}/> <Ink label='contradizem' css='mixed' padding='p-sm' slender={false}/> a regra booleana: <Ink label='(false, true)' css='mixed' padding='p-sm' slender={false}/> <Ink label='(true, false)' css='mixed' padding='p-sm' slender={false}/> <Ink label='(false, false)' css='mixed' padding='p-sm' slender={false}/>.</p>
                            
                            <p>⬩➤ É isso que acontece na consulta descrita abaixo.</p>

                            <div className="flex row go-left gap-sm subtitles">
                                <h3 className="shine">Legenda 2 ⬩➤</h3>
                                <Paint label='condição 1 natural do left join (true ou false)' css='ylw' padding='p-mid' slender={false} /> 
                                <Paint label='condição 2 (true ou false)' css='d-blue' padding='p-mid' slender={false} />
                            </div>

                            <div className="sql-code flex column gap-sm">
                                <p><Sql word='select'/> assento_id, assento_credencial <Sql word='from'/> assento</p>
                                <p>left join passageiro on <Ink label='passageiro.assento_fk = assento.assento_id' css='ylw' padding='p-sm' slender={false}/> <Sql word='and'/> <Ink label='assento_id % 2 = 0' css='d-blue' padding='p-sm' slender={false}/>.</p>
                                <p><Sql word='where'/> passageiro.assento_fk <Sql word='is'/> null;</p>
                            </div>

                            <p>⬩➤ A <Ink label='consulta cima' css='mixed' padding='p-sm' slender={false}/> retorna <Ink label='16 linhas' css='mixed' padding='p-sm' slender={false}/>, subdividas da seguinte maneira:</p>
                            <p>⬩➤ <Ink label='(false, true)' css='mixed' padding='p-sm' slender={false}/> <Sql word='D10, E5, E13'/> <Ink label='🔴 não corresponde no cruzamento das chaves' css='ylw' padding='p-sm' slender={false}/> <Ink label='🟢 ids pares' css='d-blue' padding='p-sm' slender={false}/>.</p>
                            <p>⬩➤ <Ink label='(false, false)' css='mixed' padding='p-sm' slender={false}/> <Sql word='D1, D3, E8, E10'/> <Ink label='🔴 não corresponde no cruzamento das chaves' css='ylw' padding='p-sm' slender={false}/> <Ink label='🔴 ids ímpares' css='d-blue' padding='p-sm' slender={false}/>.</p>
                            <p>⬩➤ <Ink label='(true, false)' css='mixed' padding='p-sm' slender={false}/> <Sql word='D5, D7, D9, D11, D13, E2, E4, E6, E12'/> <Ink label='🟢 corresponde no cruzamento das chaves' css='ylw' padding='p-sm' slender={false}/> <Ink label='🔴 ids ímpares' css='d-blue' padding='p-sm' slender={false}/>.</p>
                            <p>⬩➤ <Ink label='(true, true)' css='mixed' padding='p-sm' slender={false}/> não foram chamados, note isso pelos <Ink label='assento_id que faltam' css='mixed' padding='p-sm' slender={false}/> no resultado.</p>
                            <p><span className="shine">⬩➤ Teste</span> <Ink label='se retirada a condição' css='mixed' padding='p-sm' slender={false}/> <Sql word='and'/>, <Ink label='ficam' css='mixed' padding='p-sm' slender={false}/> apenas as <Ink label='linhas sem correspondência de chaves' css='mixed' padding='p-sm' slender={false}/>.</p>
                            <p><span className="shine">⬩➤ Teste</span> <Ink label='mova a condição' css='mixed' padding='p-sm' slender={false}/> <Sql word='and'/> para depois do <Ink label='where is null' css='mixed' padding='p-sm' slender={true}/> e observe como <Ink label='ele filtra após o agrupamento' css='mixed' padding='p-sm' slender={false}/>.</p>
                        </div>
                    </div>
                </>
            )
        }
        """

    def join_case_three_tsx():
        """
        import { Ink } from "../../shared/Ink"
        import { Paint } from "../../shared/Paint"
        import { Sql } from "../../shared/Sql"

        export function JoinCaseThree() {
            return (
                <>
                    <div className="flex column gap-sm case case-three">
                        <div className="flex column gap-sm">
                            <h2 className="case-header">Sequencial</h2>
                            <p>⬩➤ Uso em cadeia entre tabelas, as tabelas vão se juntando uma sequencialmente à tabela seguinte.</p>
                            <p>⬩➤ A tabela anterior serve de porta de entrada para a seguinte.</p>
                            <p>⬩➤ Nesse contexto, as tabelas <Ink label='objeto' css='ylw' padding='p-sm' slender={false} />, <Ink label='objeto_coordenada' css='d-blue' padding='p-sm' slender={false} /> e <Ink label='coordenada' css="d-cyan" padding="p-sm" slender={false} /> se encadeiam sequencialmente.</p>
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Paint label='folha de papel 1' css='ylw' padding='p-mid' slender={false} /> 
                            <Paint label='folha de papel 2' css='d-blue' padding='p-mid' slender={false} /> 
                            <Paint label='folha de papel 3' css='d-cyan' padding='p-mid' slender={false} /> 
                            <Paint label='a cola' css='blue' padding='p-mid' slender={false} /> 
                            <Paint label='cópia' css='red' padding='p-mid' slender={false} /> 
                            <Paint label='coluna que cola' css='cream' padding='p-mid' slender={false} />
                        </div>

                        <div className="sql-code flex column gap-sm">
                            <p><Sql word='select'/> * <Sql word='from'/> <Ink label='objeto' css='ylw' padding='p-sm' slender={false} /></p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='objeto_coordenada' css='d-blue' padding='p-sm' slender={false} /> <Ink label='on' css='blue' padding='p-sm' slender={true} /> objeto_coordenada.<Ink label='objeto_fk_ref' css='red' padding='p-sm' slender={false}/> = objeto.<Ink label='objeto_id' css='cream' padding='p-sm' slender={false} /></p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='coordenada' css='d-cyan' padding='p-sm' slender={false} /> <Ink label='on' css='blue' padding='p-sm' slender={true} /> coordenada.<Ink label='coordenada_id' css='cream' padding='p-sm' slender={false} /> = objeto_coordenada.<Ink label='coordenada_fk' css='red' padding='p-sm' slender={false} />;</p>
                        </div>
                    </div>
                </>
            )
        }
        """

    def join_case_two_tsx():
        """
        import { Hint } from "../../shared/Hint"
        import { Ink } from "../../shared/Ink"
        import { Paint } from "../../shared/Paint"
        import { Sql } from "../../shared/Sql"

        export function JoinCaseTwo() {
            return (
                <>
                    <div className="flex column gap-sm case case-two">
                        <div className="flex column gap-sm">
                            <h2 className="case-header">Polireferência</h2>
                            <p>⬩➤ Uso de 3 tabelas, o <Ink label='dado único' css='mixed' padding='p-sm' slender={false}/> da <Ink label='tabela: dono' css='ylw' padding='p-sm' slender={false} /> <Ink label='serve' css='mixed' padding='p-sm' slender={false}/> para mais de uma tabela: <Ink label='quarto_relatorio' css='d-blue' padding='p-sm' slender={false} /> e <Ink label='dono_caracteristica' css='d-cyan' padding='p-sm' slender={false} />.</p>
                            <Hint/>
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Paint label='folha de papel 1' css='ylw' padding='p-mid' slender={false} />
                            <Paint label='folha de papel 2' css='d-blue' padding='p-mid' slender={false} />
                            <Paint label='folha de papel 3' css='d-cyan' padding='p-mid' slender={false} />
                            <Paint label='a cola' css='blue' padding='p-mid' slender={false} />
                            <Paint label='cópia' css='red' padding='p-mid' slender={false} />
                            <Paint label='coluna que cola' css='cream' padding='p-mid' slender={false} />
                        </div>

                        <div className="sql-code flex column gap-sm">
                            <p><Sql word='select'/> * <Sql word='from'/> <Ink label='dono' css='ylw' padding='p-sm' slender={false} /></p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='quarto_relatorio' css='d-blue' padding='p-sm' slender={false} /> <Ink label='on' css='blue' padding='p-sm' slender={true} /> quarto_relatorio.<Ink label='dono_fk' css='red' padding='p-sm' slender={false} /> = <Ink label='dono' css='ylw' padding='p-sm' slender={false}/>.<Ink label='dono_id' css='cream' padding='p-sm' slender={false} /></p>
                            <p><Ink label='join' css='blue' padding='p-sm' slender={true} /> <Ink label='dono_caracteristica' css='d-cyan' padding='p-sm' slender={false} /> <Ink label='on' css='blue' padding='p-sm' slender={true} /> dono_caracteristica.<Ink label='dono_fk' css='red' padding='p-sm' slender={false} /> = <Ink label='dono' css='ylw' padding='p-sm' slender={false}/>.<Ink label='dono_id' css='cream' padding='p-sm' slender={false} />;</p>
                        </div>
                    </div>
                </>
            )
        }
        """

    def join_case_one_tsx():
        """
        import { Ink } from "../../shared/Ink"
        import { Paint } from "../../shared/Paint"
        import { Sql } from "../../shared/Sql"

        export function JoinFilterOne() {
            return (
                <>
                    <div className="flex column gap-sm case filter-one">
                        <div className="flex column gap-sm">
                            <h2 className="case-header">Próprio <Ink label='join' css='' padding='' slender={true}/></h2>
                            <p>⬩➤ O próprio uso do <Ink label='join' css='' padding='' slender={true}/> cria um filtro, pois <Ink label='filtrará' css='mixed' padding='p-sm' slender={false}/> chaves entre tabelas cujas <Ink label='linhas não correspondam' css='mixed' padding='p-sm' slender={false}/> na junção.</p>
                            <p>⬩➤ Ocorre uma <Ink label='exclusão automática' css='mixed' padding='p-sm' slender={false}/> por falta de correspondência de chaves iguais</p>
                            <p>⬩➤ Ou seja, é um <Ink label='filtro não declarativo' css='mixed' padding='p-sm' slender={false}/> da cláusula.</p>
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Paint label='chamada' css='cream' padding='p-mid' slender={false}/>
                            <Paint label='chaves correspondentes' css='d-blue' padding='p-mid' slender={false}/>
                            <Paint label='correspondência = filtro dos não correspondentes' css='blue' padding='p-mid' slender={false} />
                        </div>

                        <div className="sql-code flex column gap-sm">
                            <p><Sql word='select'/> nome, descricao_local <Sql word='from'/> local</p>
                            <p><Ink label='join' css='cream' padding='p-sm' slender={true}/> pessoa <Ink label='on' css='cream' padding='p-sm' slender={true}/> pessoa.<Ink label='local_fk' css='d-blue' padding='p-sm' slender={false}/> <Ink label='=' css='blue' padding='p-sm' slender={false} /> local.<Ink label='local_id' css='d-blue' padding='p-sm' slender={false}/>;</p>
                        </div>
                    </div>
                </>
            )
        }
        """

    def join_filters_intro_tsx():
        """
        import { Ink } from "../../shared/Ink"

        export function JoinFiltersIntro() {
            return (
                <>
                    <div id="filters-head" className="flex column gap-sm mv-3">
                        <h2 className="case-header">
                            Filtros pro <Ink label='join' css='' padding='' slender={true}/>
                        </h2>
                    </div>
                    <div className="flex column gap-mid">
                        <h2 className="minor-title">
                            ✦ Vejamos casos no qual existem filtros implícitos ou explícitos no que involve essa cláusula.
                        </h2>
                    </div>
                </>
            )
        }        
        """

    def join_filter_three_tsx():
        """
        import { Ink } from "../../shared/Ink"
        import { Paint } from "../../shared/Paint"
        import { Sql } from "../../shared/Sql"

        export function JoinFilterThree() {
            return (
                <>
                    <div className="flex column gap-sm case filter-one">
                        <div className="flex column gap-sm">
                            <h2 className="case-header"><Ink label='where - and - or' css='' padding='' slender={true}/></h2>
                            <p>⬩➤ <Ink label='where' css='mixed' padding='p-sm' slender={true}/> é a <Ink label='expressão inicial' css='mixed' padding='p-sm' slender={false}/> que faz a <Ink label='entrada' css='mixed' padding='p-sm' slender={false}/> das cláusulas <Sql word='or'/> e/ou <Sql word='and'/>.</p>
                            <p>⬩➤ <Ink label='where' css='mixed' padding='p-sm' slender={true}/> é sempre a <Ink label='primeira condição' css='mixed' padding='p-sm' slender={false}/> e é quem <Ink label='habilita' css='mixed' padding='p-sm' slender={false}/> o recurso da <Ink label='filtragem' css='mixed' padding='p-sm' slender={false}/>.</p>
                            <p>⬩➤ As cláusulas <Ink label='and' css='mixed' padding='p-sm' slender={true}/> e <Ink label='or' css='mixed' padding='p-sm' slender={true}/> são <Ink label='restringidores extras' css='mixed' padding='p-sm' slender={false}/> ao <Ink label='where' css='mixed' padding='p-sm' slender={true}/>.</p>
                            <p>⬩➤ A cláusula <Ink label='or' css='mixed' padding='p-sm' slender={true}/> é um <Ink label='filtro colaborativo' css='mixed' padding='p-sm' slender={false}/>, quanto mais se aplica, menos linhas filtradas e mais integridade da tabela resultante.</p>
                            <p>⬩➤ A cláusula <Ink label='and' css='mixed' padding='p-sm' slender={true}/> é um <Ink label='filtro restritivo' css='mixed' padding='p-sm' slender={false}/>, quanto mais se aplica, mais linhas filtradas e menos integridade da tabela resultante.</p>
                            <p>⬩➤ <Ink label='Quando' css='mixed' padding='p-sm' slender={false}/> temos uma consulta que <Ink label='combina o uso' css='mixed' padding='p-sm' slender={false}/> de ambas cláusulas (<Ink label='and + or' css='' padding='' slender={true}/>), elas <Ink label='se tornam uma união' css='mixed' padding='p-sm' slender={false}/>.</p>
                            <p><Ink label='⬩➤ Regra:' css='d-cyan' padding='p-sm' slender={false}/> A cláusula <Ink label='and' css='mixed' padding='p-sm' slender={true}/> <Ink label='sempre precede/antecede = resolvida primeiro' css='mixed' padding='p-sm' slender={false}/> a cláusula <Ink label='or' css='mixed' padding='p-sm' slender={true}/>.</p>
                            <p><Ink label='⬩➤ Regra:' css='d-cyan' padding='p-sm' slender={false}/> Para <Ink label='resolver o' css='mixed' padding='p-sm' slender={false}/> <Ink label='and' css='mixed' padding='p-sm' slender={true}/> se põe <Ink label='parênteses' css='mixed' padding='p-sm' slender={false}/> entre as <Ink label='condições' css='mixed' padding='p-sm' slender={false}/> imediatamente ao seu <Ink label='lado direito e esquerdo' css='mixed' padding='p-sm' slender={false}/>.</p>
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Paint label='filtro' css='blue' padding='p-mid' slender={false} />
                            <Paint label='precedência' css='d-blue' padding='p-mid' slender={false} />
                        </div>

                        <div className="sql-code flex column gap-sm">
                            <p><Sql word='select'/> * <Sql word='from'/> semaforo</p>
                            <p><Sql word='join'/> local <Sql word='on'/> local.local_id = semaforo.local_fk</p>
                            <p><Ink label='where' css='blue' padding='p-sm' slender={true}/> <Ink label='(' css='d-blue' padding='p-sm' slender={false}/>duracao_cor_vermelha &gt; 25 <Ink label='and' css='blue' padding='p-sm' slender={true} /> duracao_cor_verde &gt; duracao_cor_vermelha<Ink label=')' css='d-blue' padding='p-sm' slender={false}/> <Ink label='or' css='blue' padding='p-sm' slender={true} /> descricao_local = 'Frei Serafim';</p>
                        </div>
                    </div>
                </>
            )
        }
        """

    def join_filter_two_tsx():
        """
        import { Ink } from "../../shared/Ink"
        import { Paint } from "../../shared/Paint"
        import { Sql } from "../../shared/Sql"

        export function JoinFilterTwo() {
            return (
                <>
                    <div className="flex column gap-sm case">
                        <div className="flex column gap-sm">
                            <h2 className="case-header"><Ink label='left join + is null' css='' padding='' slender={true}/></h2>
                            <p>⬩➤ O <Ink label='left join' css='' padding='' slender={true}/> <Ink label='mantem o que' css='mixed' padding='p-sm' slender={false}/> o <Ink label='join' css='mixed' padding='p-sm' slender={true}/> <Ink label='filtra programaticamente' css='mixed' padding='p-sm' slender={false}/>: chaves entre tabelas que não corresponderam.</p>
                            <p>⬩➤ Ou seja, ele pega os que seriam excluídos <Ink label='pra aplicar um outro filtro' css='mixed' padding='p-sm' slender={false}/> nestes próprios.</p>
                            <p>⬩➤ Essa ação se dá pela chamada: <Ink label='where campo is null' css='mixed' padding='p-sm' slender={true}/>.</p>
                        </div>

                        <div className="flex row go-left gap-sm subtitles">
                            <h3 className="shine">Legenda ⬩➤</h3>
                            <Paint label='chave com & sem correspondência juntas' css='ylw' padding='p-mid' slender={false}/>
                            <Paint label='filtro que pega as sem correspondência' css='ppl' padding='p-mid' slender={false}/>
                        </div>

                        <div className="sql-code flex column gap-sm">
                            <p><Sql word='select'/> descricao <Sql word='from'/> local</p>
                            <p><Sql word='left join'/> pessoa <Sql word='on'/> pessoa.<Ink label='local_fk' css='ylw' padding='p-sm' slender={false}/> = local.<Ink label='local_id' css='ylw' padding='p-sm' slender={false}/>.</p>
                            <p><Ink label='where' css='ppl' padding='p-sm' slender={true}/> pessoa.pessoa_id <Ink label='is null' css='ppl' padding='p-sm' slender={true}/></p>
                        </div>
                    </div>
                </>
            )
        }        
        """

    def join_have_in_mind_tsx():
        """
        import { Ink } from "../../shared/Ink"

        export function JoinHaveInMind() {
            return (
                <>
                    <div id="have-in-mind-head" className="mv-3">
                        <h2 className="title-what-is as-line round-title">Tenha em mente!</h2>
                    </div>
                    <div id="have-in-mind-body" className="flex column gap-xsm body-layout">
                        <ul className="flex column gap-sm">
                            <li><Ink label='join' css='' padding='' slender={true}/> também recebe a nomemclatura <Ink label='inner join' css='mixed' padding='p-sm' slender={false}/>.</li>
                            <li>Ao realizar o <Ink label='join' css='' padding='' slender={true}/> se <Ink label='retira programaticamente' css='mixed' padding='p-sm' slender={false}/> qualquer <Ink label='chave de valor nulo' css='mixed' padding='p-sm' slender={false}/>.</li>
                            <li>O <Ink label='left join' css='mixed' padding='p-sm' slender={true}/> mantem chaves não correspondentes - <Ink label='oposto ao' css='mixed' padding='p-sm' slender={false}/> <Ink label='join' css='mixed' padding='p-sm' slender={true}/></li>
                            <li><Ink label='join' css='' padding='' slender={true}/> possui outras variações de uso, como <Ink label='right join, full join' css='mixed' padding='p-sm' slender={false}/>, mas não serão tratados aqui.</li>
                            <li><Ink label='join' css='' padding='' slender={true}/> é sobre <Ink label='abrir portas entre tabelas' css='mixed' padding='p-sm' slender={false}/> por uma <Ink label='cópia de acesso de uma para outra' css='mixed' padding='p-sm' slender={false}/></li>
                        </ul>
                    </div>
                </>
            )
        }        
        """

    def join_representation_tsx(): 
        """
        import { Ink } from "../../shared/Ink"

        export function JoinRepresentation() {
            return (
                <>
                    <div id="representation-head" className="mv-3">
                        <h2 className="title-what-is as-line round-title">Representação</h2>
                    </div>
                    <div id="representation-body" className="flex column gap-xsm body-layout">
                        <ul className="flex column gap-sm">
                            <li>Imagine uma <Ink label='folha de papel' css='mixed' padding='p-sm' slender={false}/> como se fosse uma <Ink label='tabela' css='mixed' padding='p-sm' slender={false}/>.</li>
                            <li>Imagine que existam <Ink label='traços verticais' css='mixed' padding='p-sm' slender={false}/> distribuídos nessa folha.</li>
                            <li>Cada espaço tracejado é uma <Ink label='coluna' css='mixed' padding='p-sm' slender={false}/> dessa tabela.</li>
                            <li>Para realizar um <Ink label='join' css='' padding='' slender={true}/>, imagine uma <Ink label='colagem horizontal' css='mixed' padding='p-sm' slender={false}/> entre <Ink label='folhas de papel' css='mixed' padding='p-sm' slender={false}/>.</li>
                            <li>A <Ink label='cola' css='mixed' padding='p-sm' slender={false}/> que juntou as duas folhas é uma <Ink label='coluna da folha 1' css='mixed' padding='p-sm' slender={false}/> que se <Ink label='repete na folha 2' css='mixed' padding='p-sm' slender={false}/>.</li>
                        </ul>
                    </div>
                </>
            )
        }
        """

    def join_requirements_tsx(): 
        """
        import { Ink } from "../../shared/Ink"

        export function JoinRequirements() {
            return (
                <>
                    <div id="requirements-head" className="mv-3">
                        <h2 className="title-what-is as-line round-title">Do que precisa?</h2>
                    </div>
                    <div id="requirements-body" className="flex column gap-xsm body-layout">
                        <ul className="flex column gap-sm">
                            <li>O <Ink label='join' css='' padding='' slender={true}/> precisa de <Ink label='3 elementos' css='mixed' padding='p-sm' slender={false} />.</li>
                            <li><Ink label='Duas ou mais tabelas' css='mixed' padding='p-sm' slender={false} />.</li>
                            <li>Pelo menos um <Ink label='dado único' css='mixed' padding='p-sm' slender={false} /> que exista <Ink label='entre tabelas' css='mixed' padding='p-sm' slender={false} />.</li>
                            <li>A cláusula <Ink label='join + on' css='mixed' padding='p-sm' slender={true} /> representam a <Ink label='chamada' css='mixed' padding='p-sm' slender={false} /> e <Ink label='ponto de junção' css='mixed' padding='p-sm' slender={false} /> entre as tabelas.</li>
                        </ul>
                    </div>
                </>
            )
        }
        """

    def join_utility_tsx():
        """
        import { Ink } from "../../shared/Ink"

        export function JoinUtility() {
            return (
                <>
                    <div id="usefullness-head" className="mv-3">
                        <h2 className="title-what-is as-line round-title">Qual a utilidade?</h2>
                    </div>
                    <div id="usefullness-body" className="flex column gap-xsm body-layout">
                        <ul className="flex column gap-sm">
                            <li>
                                <Ink label='Responder perguntas' css='mixed' padding='p-sm' slender={false} /> que exigem <Ink label='informação' css='mixed' padding='p-sm' slender={false} /> de <Ink label='mais de uma tabela' css='mixed' padding='p-sm' slender={false} /> ao mesmo tempo.
                            </li>
                            <li>Perguntas costumam envolver diversas informações/dados, que se dividem em tabelas diferentes.</li>
                            <li>
                                O <Ink label='join' css='mixed' padding='p-sm' slender={true} /> faz parte do <Ink label='sql' css='' padding='' slender={true}/> e <Ink label='faz sentido' css='mixed' padding='p-sm' slender={false}/> devido ao <Ink label='seguinte fluxo' css='mixed' padding='p-sm' slender={false} />.
                            </li>
                            <li>SQL é uma linguagem de bancos de dados relacionais.</li>
                            <li>Bancos de dados relacionais compõem tabelas.</li>
                            <li>Tabelas compõem colunas (características) e linhas (dados).</li>
                            <li>Dados estão espalhados entre tabelas diferentes.</li>
                            <li>Tabelas se juntam pelos dados únicos delas.</li>
                            <li>Quem junta tabelas é a cláusula <Ink label='join' css='' padding='' slender={true}/>.</li>
                        </ul>
                    </div>
                </>
            )
        }
        """

    def join_what_is_it_tsx():
        """
        import { Ink } from "../../shared/Ink"

        export function JoinWhatIsIt() {
            return (
                <>
                    <div id="introduction-head" className="mv-3">
                        <h2 className="as-line round-title">O que é JOIN?</h2>
                    </div>
                    <div id="introduction-body" className="flex column gap-xsm body-layout">
                        <ul className="flex column gap-sm">
                            <li><Ink label='join' css='' padding='' slender={true}/> é uma <Ink label='cláusula' css='mixed' padding='p-sm' slender={false} /> <Ink label='sql' css='mixed' padding='p-sm' slender={true} /> que <Ink label='junta' css='mixed' padding='p-sm' slender={false} />, numa única consulta, <Ink label='colunas' css='mixed' padding='p-sm' slender={false} /> que vêm de <Ink label='tabelas diferentes' css='mixed' padding='p-sm' slender={false} />.</li>
                            <li>Uma tabela sozinha só enxerga suas próprias colunas.</li>
                            <li>Quando a <Ink label='informação' css='mixed' padding='p-sm' slender={false} /> que você precisa está <Ink label='espalhada' css='mixed' padding='p-sm'slender={false} /> em mais de uma tabela, o <Ink label='join' css='mixed' padding='p-sm' slender={true} /> <Ink label='une todas' css='mixed'padding='p-sm' slender={false} /> essas tabelas numa só.</li>
                        </ul>
                    </div>
                </>
            )
        }        
        """
