

import { ReturnBtn } from "../shared/ReturnBtn";

export function ModuleRead() {
  return (
    <section className="modulo-read">
      <ReturnBtn/>
      <div className="flex column go-center gap-sm">
        <h1 className="generic-title mt-1" style={{fontSize: "1.5rem"}}>Objeto de Aprendizagem e seus componentes</h1>

        <div id="modules" className="mv-1 flex column gap-mid">

            <div id="report" className="flex column gap-xsm">
                <div className="flex row">
                    <h2 className="as-line round-title">Informações úteis</h2>
                </div>
                
                <div className="frame-read">
                  <table id="useful-infos" className="table-styles">
                    <thead>
                        <tr>
                          <th>Criador</th>
                          <th>Orientador</th>
                          <th>Público alvo</th>
                          <th>Consultas</th>
                          <th>Cenários</th>
                          <th>Tabelas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>Lucas Farias Santos de Sousa</td>
                          <td>Prof. Dr. Thiago Alves Elias da Silva</td>
                          <td>
                            <div className="flex column go-left">
                            <div>⬩➤ Alunos de cursos de TI</div>
                            <div>⬩➤ Entusiastas em programação e banco de dados</div>
                            </div>
                          </td>
                          <td>92</td>
                          <td>9</td>
                          <td>50</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
            </div>

            <div id="module-theory-box" className="flex column gap-xsm">
              <div className="flex row">
                <h2 className="as-line round-title">Módulo Teórico</h2>
              </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Assuntos escolhidos</p>
                    <div className="flex row gap-mid" style={{fontSize: ".8rem"}}>
                      <p className="round bg-sql">⬩➤ funções agregadoras + group by</p>
                      <p className="round bg-sql">⬩➤ case when</p>
                      <p className="round bg-sql">⬩➤ join</p>
                      <p className="round bg-sql">⬩➤ subconsultas</p>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Sessões escolhidas para padronizar o módulo teórico</p>
                    <div className="flex row gap-sm">
                      <p className="as-line round-title">O que é?</p>
                      <p className="as-line round-title">Qual a utilidade?</p>
                      <p className="as-line round-title">Do que precisa?</p>
                      <p className="as-line round-title">Representação</p>
                      <p className="as-line round-title">Casos de Uso</p>
                      <p className="as-line round-title">Tenha em mente</p>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Botão Teste</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Botão para testar os resultados dos exemplos apresentados em cada sessão de um assunto estudado. É recomendado que se abra uma segunda aba e deixe ele em paralelo ao estudo, fica mais prática o seu uso. Se precisar, abra mais abas.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                      <button className="see-result">ver resultado</button>
                    </div>
                </div>

            </div>

            <div id="module-practice-box" className="flex column go-left gap-xsm">
                <div className="flex row">
                    <h2 className="as-line round-title">Módulo Prático</h2>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Botão de tutorial</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Botão de acesso ao tutorial para conhecer e treinar rapidamente todas as mecânicas do módulo teórico.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center tutorial-cpt" style={{margin: 'auto'}}>
                      <p id="tutorial-indicator">📜</p>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Seletor de assuntos SQL</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Opções de assuntos SQL para esse Objeto de Aprendizagem. Dentre eles: Funções agregadoras, Case when, Join e Subconsultas. Sua escolha implica namontagem de uma consulta em tela.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                      <select id="frame-subject-select-cpt">
                          <option value=''>assuntos SQL...</option>
                      </select>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Caixa de enunciado</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Local onde os textos das consultas são exibidos, após o usuário selecionar um assunto SQL.</li>
                      </ul>
                    </div>
                    <div id="frame-query-text-cpt" className="flex row go-center fill">
                      <p>Nº da consulta. Texto do enunciado</p> 
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Tabelas</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Região onde são mostradas todas as tabelas de uma consulta escolhida durante o treino em um cenário no módulo prático. Elas oferecem os campos e tabelas possíveis para a resolução, sem elas não se sabe por exato quais são as tabelas (cor diferente para campos que são chave estrangeira).</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                        <table className="db mt-1">
                          <thead className="db-column">
                            <tr>
                              <th>campo fulano</th>
                              <th className="fk-th">🔑 campo ciclano</th>
                              <th>campo beltrano</th>
                            </tr>
                          </thead>
                          <tbody className="db-row">
                            <tr>
                              <td className="light">valor de linha fulano</td>
                              <td className="light">valor de linha ciclano</td>
                              <td className="light">valor de linha beltrano</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Botão de anotações</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Bloco de notas para usar de registro para rascunhos. Serve tanto para consultas feitas pelo console de digitação quanto pelos blocos de ordenação. Ele possui 3 ações de clique, o primeiro abre a janela do bloco de anotações, o segundo muda ele de posição e o terceiro fecha a sua janela.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                      <button className="send-btn-lite btn-notes">Anotações: OFF 🔴</button>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Habilitador/Desabilitador de recursos de consulta</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Menu que ativa/desativa os recursos do Console de Digitação e Blocos de Ordenação. A ativação do Console de Digitação anula a visibilidade do recurso dos Blocos de Ordenação.</li>
                      </ul>
                    </div>

                    <div className="flex row go-center fill">
                      
                      <div id="query-tools-cpt" className="column go-center gap-sm">
                          <div className="flex row go-center gap-xsm">
                              <p className="indicator-left">⬩➤</p>
                              <h1 className="title-sm title-info-type-b">Recursos</h1>
                              <p className="indicator">⬩➤</p>
                          </div>
                          <div className="flex column go-left gap-xsm">
                              <p id="resource-status">⭐ Em uso: nenhum</p>
                              <div className="flex column gap-xsm">
                                  <div id="p-console-frame" className={`flex row gap-sm resource`}>
                                      <p id="p-console">🔴 Console de Digitação</p> 
                                      <button id="btn-console" className="upper">OFF</button>
                                  </div>
                                  <div id="p-blocks-frame" className={`flex row gap-sm resource`} >
                                      <p id="p-blocks">🔴 Blocos de Ordenação</p> 
                                      <button id="btn-blocks" className="upper">OFF</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                    </div>
                    
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Botão de consulta pessoal</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Botão para testar consultas e conhecer tabelas durante os treinos no módulo teórico. É o botão a se usar antes do botão de enviar oficial, que envia de fato a resposta.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                      <button type="button" id="send-console-query-test-cpt" className="send-btn" >consulta pessoal</button>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Botão de consulta bonita</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Botão para visualizar suas consultas com sintaxes pintada e colorida. Isso é uma resposta à limitações de mudança de cor em tempo real, como acontece nos SGBDs.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                      <button type="button" id="send-console-query-preview-cpt" className="send-btn" >consulta bonita</button>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Botão de consulta histórico</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Botão para visualizar suas últimas consultas executadas pelo botão de consulta pessoal, por ele é possível ver, copiar de volta e ordenar por ordem crescente ou decrescente.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                      <button type="button" id="send-console-query-test-hist-cpt" className="send-btn" >consulta histórico</button>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Botão de enviar</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Botão oficial de envio de resposta para uma consulta pedida. Seu uso engatilha feedbacks de acerto [ correto 🔥😎👍 ], erro [ tenta de novo 😳 ] e de sintaxe (mensagens em banner amarelo).</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                      <button  className="send-query">enviar</button>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Console de Digitação</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Área de consulta livre para fazer SELECTS, seja para consultas específicas/rascunhos ou para respostas definitivas dos exercícios presentes nos cenários do módulo teórico.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                        <div className="flex row gap-sm">
                          <textarea id="textarea-cpt"></textarea>
                      </div>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Blocos de Ordenação</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Espaço que recebe blocos de sintaxe SQL embaralhados, que juntados de forma apropriada, formam uma resposta correta da consulta pedida. Os seus blocos são repassados à região do Bloco de Ordenação Espelhado. Isso consiste na lógica necessária para responder a consulta usando esse recurso.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                      <div id="blocks-area-cpt" className="flex row go-center gap-xsm"></div>
                    </div>
                </div>

                <div className="cpt flex row gap-xsm frame-read">
                    <p className="w12 label">Blocos de Ordenação espelhado</p>
                    <div className="w15">
                      <ul className="def-list">
                        <li>⬩➤ Espaço que recebe blocos de sintaxe SQL (por clique) da sua contraparte, que são os Blocos de Ordenação. Ele deve receber todos os blocos para que uma consulta possa ser enviada e verificada através do recurso dos Blocos de Ordenação. Ele também pode repassar de volta os blocos recebidos.</li>
                      </ul>
                    </div>
                    <div className="flex row go-center fill">
                      <div id="blocks-area-mirror-cpt" className={`flex column go-center gap-xsm`}>
                        <div className='flex column go-left'>
                        </div>
                      </div>
                    </div>
                </div>

            </div>
            
        </div>

        {/* <p>Espaço para leitura, enunciados e contextualização do caso de uso.</p>
        <p>Falar sobre o tipo de público</p>
        <p>Listar requisitos para usar a ferramenta</p>
        <p>Mostrar informações do autor</p>
        <p>Listar tabelas (talvez)</p>
        <p>Falar sobre gabaritos (talvez)</p>
        <p>Listar assuntos trabalhados</p> */}
      </div>
    </section>
  );
}