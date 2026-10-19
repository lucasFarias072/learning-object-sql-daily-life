

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import type { QueryScenarioFrontend } from '../../types/Containers'
import type { QueryFromHistory } from '../../data/types'

import { useQueryBlocks } from '../../hooks/useQueryBlocks'
import { useQueryConsole } from '../../hooks/useQueryConsole'
import { useQueryTest } from '../../hooks/useQueryTest'
import { useResourceToggle } from '../../hooks/useResourceToggle'
import { useScenarioData } from '../../hooks/useScenarioData'

// import { ColumnDropdown } from './ColumnDropdown'
import { DraftPanel } from './DraftPanel'
import { FeedbackBanner, type FeedbackStatus } from './FeedbackBanner'
import { QueryBlocksMirror, QueryBlocksOrigin } from './QueryBlocks'
import { QueryBlocksMirrorTemp } from './QueryBlocks'
import QueryPreviewModal from "./QueryPreviewModal";
import { ResultTable } from './ResultTable'
// import { TableDropdown } from './TableDropdown'
import { TablePreview } from './TablePreview'
import { TempMsg } from './TempMsg'

import { scenarios } from '../../data/scenarios'

import { Modal } from '../shared/Modal'
// import { PositionViewer } from '../shared/PositionViewer'
import { Tutorial } from '../shared/Tutorial'
import { TutorialProvider, useTutorialHighlight } from '../shared/TutorialContext'

const styles = {
    offsetUpper: {
        marginTop: ".5rem"
    }
}

export function ModulePractice() {
    const HISTORY_THRESHOLD = 25;

    const hlAssunto = useTutorialHighlight('assuntoSelect')
    const hlTextoConsulta = useTutorialHighlight('textoConsulta')
    const hlBaseDeDados = useTutorialHighlight('baseDeDados')
    const hlQueryTools = useTutorialHighlight('resourceQueryTools')
    const hlConsole = useTutorialHighlight('resourceConsole')
    const hlPConsoleFrame = useTutorialHighlight('pConsoleFrame')
    const hlBlocks = useTutorialHighlight('resourceBlocks')
    const hlPBlocksFrame = useTutorialHighlight('pBlocksFrame')
    const hlBlocksMirror = useTutorialHighlight('blocks-area-mirror')
    const hlBtnQueryTest = useTutorialHighlight('send-console-query-test')
    const hlBtnQueryPreview = useTutorialHighlight('send-console-query-preview')
    const hlBtnQueryHist = useTutorialHighlight('send-console-query-text-hist')
    const hlBtnSendConsoleQuery = useTutorialHighlight('send-console-query')
    const hlBtnSendBlockQuery = useTutorialHighlight('send-block-query')
    const hlUserQueryNotes = useTutorialHighlight('user-query-notes')

    const [selectedAssunto, setSelectedAssunto] = useState('')

    const [chosenQuery, setChosenQuery] = useState<QueryScenarioFrontend | null>(null)

    const queryConsole = useQueryConsole(chosenQuery)

    const useQueryTestComponent = useQueryTest();

    // Vindo da rota *** <Route path="/pratico/:scenario" element={<ModulePractice />} /> ***
    const { scenario } = useParams<{ scenario: string }>()

    const { dados } = useScenarioData(chosenQuery?.tables ?? [])

    const { consoleOn, blocksOn, toggleConsole, toggleBlocks, statusLabel, resetResources } = useResourceToggle()
    
    const queryBlocks = useQueryBlocks(chosenQuery, blocksOn)

    const [feedbackStatus, setFeedbackStatus] = useState<FeedbackStatus>(null)

    // const [currentTableOnDropdown, setCurrentTableOnDropdown] = useState('')

    // const [tableDropdown, setTableDropdown] = useState('')
    // const [columnDropdown, setColumnDropdown] = useState('')

    const [history, setHistory] = useState<QueryFromHistory[]>([]);
    const [recentOrderAbove, setRecentOrderAbove] = useState(true);
    const [openHistory, setOpenHistory] = useState(false);

    const [visibleNote, setVisibleNote] = useState(false);
    const [textNote, setTextNote] = useState('');

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    function addToHistory(consulta: string) {
        setHistory(prev => {
            const newHist = [...prev, { id: crypto.randomUUID(), consulta, timestamp: new Date() }];
            return newHist.length > HISTORY_THRESHOLD ? newHist.slice(newHist.length - HISTORY_THRESHOLD) : newHist;
        });
    }

    function handleAssuntoChange(event: React.ChangeEvent<HTMLSelectElement>) {
        // const queryType = event.target.selectedOptions[0].text
        // setSelectedAssunto(event.target.value)
        // const availableQueries = scenarios.filter(
        //     scene => scene.scenario === scenario && scene.queryType === queryType
        // )

        // console.log([scenario, queryType, event.target.value])
        
        // if (availableQueries.length === 0) return
        // const chosenQuery = availableQueries[Math.floor(Math.random() * availableQueries.length)]
        // console.log("chosenQuery = ")
        // console.log(chosenQuery)
        // setChosenQuery(chosenQuery)

        /*
        <option value="9999">exemplo</option>
        <option value="0">livre</option>
        <option value="2">Junção</option>
        <option value="3">agregacao</option>
        <option value="4">Subconsultas</option>
        <option value="5">case-when</option>
        <option value="6">conjunto-distinct</option>
        <option value="7">misturado</option>
        <option value="8">Função escalar</option>
        */

        const translator: any = {
            "Demonstração": "exemplo",
            "Aleatório": "livre",
            "Funções agregadoras + GROUP BY": "agregacao",
            "Case When": "case-when",
            "Junção": "join",
            "Subconsultas": "subconsulta"
            // "Assuntos misturados": "misturado",
            // "Conjuntos (DISTINCT)": "conjunto-distinct",
            // "Função escalar": "funcao-escalar",
        }

        // selectAssunto(event.target.value, event.target.selectedOptions[0].text)
        selectAssunto(event.target.value, translator[event.target.selectedOptions[0].text])
    }

    async function handleSendConsole(event: React.FormEvent) {
        /*
            event.preventDefault()   // <- isso é o que estava faltando e causava o 404 de navegação
            const correct = await queryConsole.submit()
            if (correct === undefined) return  // erro de sintaxe/conexão, já aparece em queryConsole.errorMessage

            setFeedbackStatus(correct ? 'correct' : 'incorrect')

            if (correct) {
                resetResources()
                queryConsole.reset()
                setChosenQuery(null)
                setSelectedAssunto('')
            }
        */
        
        event.preventDefault()
        trySendConsole()
    }

    async function handleSendBlocks() {
        const correct = await queryBlocks.submit()
        if (correct === undefined) return   // erro de rede/servidor — sem banner, só a msg de erro já tratada

        setFeedbackStatus(correct ? 'correct' : 'incorrect')

        if (correct) {
            resetResources()     // desliga os toggles, igual ao resetFrame do protótipo
            queryBlocks.reset()  // reembaralha os blocos pra próxima tentativa
            setChosenQuery(null)
            setSelectedAssunto('')
        }
    }

    // function handleSetSelectFromTableDropdown(currentValue: any)  {
    //     setCurrentTableOnDropdown(currentValue);
    //     setTableDropdown(currentValue);
    //     // queryConsole.setValue(`${queryConsole.value} ${currentValue}`);
    // };

    // function handleSetSelectFromColumnDropdown(currentValue: any)  {
    //     setColumnDropdown(currentValue);
    //     // queryConsole.setValue(`${queryConsole.value} ${currentValue}`);
    // };

    function selectAssunto(value: string, queryTypeText: string) {
        setSelectedAssunto(value)
        const availableQueries = scenarios.filter(
            scene => scene.scenario === scenario && scene.queryType === queryTypeText
        )
        if (availableQueries.length === 0) return
        const chosenQuery = availableQueries[Math.floor(Math.random() * availableQueries.length)]
        setChosenQuery(chosenQuery)
    }

    async function trySendConsole() {
        const correct = await queryConsole.submit()
        if (correct === undefined) return

        setFeedbackStatus(correct ? 'correct' : 'incorrect')

        if (correct) {
            resetResources()
            queryConsole.reset()
            setChosenQuery(null)
            setSelectedAssunto('')
        }
    }

    useEffect(() => {
        setTextNote('');
    }, [scenario]);

    return (
        <div id="module-practice-inside" className={`win area ${scenario}`} style={{ minHeight: '200vh', width: '100%' }}>

            <QueryPreviewModal
                isOpen={isPreviewOpen}
                title='Sua consulta com destaque'
                onClose={() => setIsPreviewOpen(false)}
                query={queryConsole.value} // troque "query" pelo nome real do state do seu textarea
            />

            <Modal open={openHistory} title="Consultas feitas" onClose={() => setOpenHistory(false)}>
                <>
                    <div className='flex column gap-xsm'>
                        <ul>
                            <li>➤ Consultas são copiáveis: clique na caixa de texto, selecione tudo e copie</li>
                            <li>➤ Cada consulta é uma área de texto, pode ser expandida pela marcação no canto inferior direito (clique e arraste com o mouse)</li>
                            <li>➤ Mude a ordem das consultas abaixo, clique no botão aredondado centralizado na tela</li>
                        </ul>
                        <button className='hist-sorter' onClick={() => setRecentOrderAbove(o => !o)}>
                            {recentOrderAbove ? 'Ordem: antigas 1º' : 'Ordem: recentes 1º'}
                        </button>
                    </div>

                    {[...history].length == 0 && 
                        <div className='flex row go-center'>
                            <p style={{ margin: '1rem 0 0 0' }}>➤ Nenhuma consulta foi executada neste cenário até agora.</p>
                        </div>
                    }

                    <ul className="list-history">
                        {(recentOrderAbove ? [...history].reverse() : history).map(item => (
                        <li className='hist-li' key={item.id} style={{  }}>
                            <textarea className='hist-txt' value={item.consulta}></textarea>
                        </li>
                        ))}
                    </ul>
                </>
            </Modal>

            {useQueryTestComponent.testStatus === 'done' && (
            <Modal open={useQueryTestComponent.testStatus === 'done'} onClose={useQueryTestComponent.clearTest} title={'Sua consulta'}>
                {useQueryTestComponent.testError ? (
                <p className="test-error">{useQueryTestComponent.testError}</p>
                ) : (<ResultTable data={useQueryTestComponent.testResult} />)}
            </Modal>
            )}

            <Tutorial></Tutorial>

            <DraftPanel visible={visibleNote} note={textNote} onChange={setTextNote}/>

            {/* {consoleOn && <div className='flex column gap-xsm'>
                <button 
                    id="send-console-query-preview" 
                    className='send-btn' 
                    onClick={() => setIsPreviewOpen(true)}
                >visualizar consulta
                </button>

                <button 
                    id="send-console-query-test-hist" 
                    className='send-btn' onClick={() => setOpenHistory(true)}>
                    histórico consultas
                </button>

                <button 
                    type="button" 
                    id="send-console-query-test" 
                    className={`send-btn ${hlBtnQueryTest}`} 
                    onClick={() => {
                        addToHistory(queryConsole.value)
                        useQueryTestComponent.runTest(queryConsole.value)
                    }}>consulta pessoal
                </button>
            </div>} */}

            <FeedbackBanner status={feedbackStatus} onDone={() => setFeedbackStatus(null)} />
            
            <div id="upper-area" className="flex row go-center gap-lg">
                
                <div id="frame-query-text" style={{ flex: 1 }} className={`mtl-1 p-1 flex column2nd gap-xsm banner-viewport ${hlTextoConsulta}`}>
                    {/* <p>{chosenQuery ? `${chosenQuery.queryId}. ${chosenQuery.queryText}` : 'Escolha um assunto ➜'}</p> */}
                    {
                        chosenQuery 
                        ? <p>{chosenQuery.queryId}.{chosenQuery.queryText}</p> 
                        : <div className='flex row go-center gap-mid'>
                            <h3>⮜⮜⮜</h3>
                            <h3>Veja o tutorial</h3>
                        </div>
                    }
                    
                </div>
                
                <div id="frame-subject" style={{ flex: 'shrink' }} className="flex column go-right gap-xsm">
                    <div id="frame-subject-components" className="flex column go-center gap-xsm">
                        <div className="flex row gap-xsm">
                            <h1 id="sql-subjects" className="title-sm title-info-type-a w12">Assuntos</h1>
                        </div>
                        <TutorialProvider>
                            <select id="frame-subject-select" className={`w12 ${hlAssunto}`} value={selectedAssunto} onChange={handleAssuntoChange}>
                                <option value=''>assuntos SQL...</option>
                                <option value="9999">Demonstração</option>
                                <option value="0">Aleatório</option>
                                <option value="1">Funções agregadoras + GROUP BY</option>
                                <option value="2">Case When</option>
                                <option value="3">Junção</option>
                                <option value="4">Subconsultas</option>
                                {/* <option value="7">Assuntos misturados</option> */}
                                {/* <option value="6">Conjuntos (DISTINCT)</option> */}
                                {/*<option value="8">Função escalar</option>*/}
                                {/* <option value="5">case-when</option> */}
                            </select>
                        </TutorialProvider>
                        <button type="button" id="user-query-notes" className={`send-btn-lite btn-notes ${hlUserQueryNotes}`} onClick={() => setVisibleNote(v => !v)}>{visibleNote ? 'Anotações: ON 🟢' : 'Anotações: OFF 🔴'}</button>
                    </div>
                </div>
                
                <div style={{ marginRight: '.5rem' }}>
                    {blocksOn && <QueryBlocksMirror state={queryBlocks} tutorialClass={hlBlocksMirror}/>}
                    {!blocksOn && <QueryBlocksMirrorTemp/>}
                </div>

            </div>
            
            {!chosenQuery && (
                <div id="middle-area" className="flex row go-center gap-sm mt-1">
                    <div id="frame-base-de-dados" className={`flex row go-center gap-sm ${hlBaseDeDados}`}>
                        <div className='flex go-center column gap-xsm'>
                            {/* <p className='title-info-type-b' style={{ fontSize: '2.5rem', padding: '.33rem .66rem' }}>⬆</p> */}
                            {/* <p className='title-info-type-b' style={{ padding: '.33rem .66rem' }}>Selecione algum assunto SQL</p> */}
                            <p className='title-info-type-b-bigger' style={{ padding: '.33rem .66rem' }}>Primeira vez no módulo prático?</p>
                            <p className='title-info-type-b-bigger'>Veja o tutorial 📜 no canto superior esquerdo da tela</p>
                        </div>
                    </div>
                </div>
            )}
            
            {chosenQuery && (
                <>
                    {queryBlocks && queryBlocks.errorMessage && <TempMsg txtContent={queryBlocks.errorMessage} />}
                    {queryConsole && queryConsole.errorMessage && <TempMsg txtContent={queryConsole.errorMessage} />}
                    <div id="middle-area" className="flex row go-center gap-sm mt-1">
                        <div id="frame-base-de-dados" className={`flex row go-center gap-sm ${hlBaseDeDados}`}>
                            {chosenQuery && chosenQuery.tables.map((tableName: any, index: any) => (
                                <TablePreview
                                    key={tableName}
                                    tableName={chosenQuery.tablesNames[index]}
                                    fields={chosenQuery.fields[index]}
                                    data={dados[tableName] ?? []}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}

            <div id="bottom-area" className="flex row go-center gap-sm">
                
                <div id="console" className={`column go-center ${consoleOn ? 'enabled' : 'disabled'} ${hlConsole}`}>
                    <div className="flex row gap-xsm">
                        <p className="info" title="Para montar uma consulta, clique na área em amarelo e digite, depois aperte o botão de enviar">🛈</p>
                        
                        <h1 id="tool-a" className="title-sm title-info-type-a">🛠 Console de Digitação</h1>
                        
                        {/* Botão de enviar do console de digitação */}
                        <button 
                            type="submit" 
                            form="send-query-form" 
                            id="send-console-query" 
                            className={
                                queryConsole.canSubmit 
                                ? `send-query ${hlBtnSendConsoleQuery}` 
                                : `send-query disabled ${hlBtnSendConsoleQuery}`
                            }
                        >enviar
                        </button>

                        <div className='flex column go-left gap-xsm'>
                            {consoleOn && <div className='flex row gap-xsm'>
                                <button 
                                    type="button" 
                                    id="send-console-query-test" 
                                    className={`send-btn ${hlBtnQueryTest}`} 
                                    onClick={() => {
                                        addToHistory(queryConsole.value)
                                        useQueryTestComponent.runTest(queryConsole.value)
                                    }}>consulta pessoal
                                </button>

                                <button 
                                    id="send-console-query-preview" 
                                    className={`send-btn ${hlBtnQueryPreview}`} 
                                    onClick={() => setIsPreviewOpen(true)}
                                >consulta bonita
                                </button>

                                <button 
                                    id="send-console-query-test-hist" 
                                    className={`send-btn ${hlBtnQueryHist}`} onClick={() => setOpenHistory(true)}>
                                    consulta histórico
                                </button>

                                
                            </div>}
                            {/* <div className='flex row gap-xsm'>
                                <input type="text" id='table-input' size={11} value={tableDropdown} onChange={(e) => setTableDropdown(e.target.value)} />
                                <TableDropdown scenario={scenario!} changeTrigger={handleSetSelectFromTableDropdown}></TableDropdown>
                            </div>
                            <div className='flex row gap-xsm'>
                                <input type="text" id='column-input' size={11} value={columnDropdown} onChange={(e) => setColumnDropdown(e.target.value)} />
                                <ColumnDropdown table_name={currentTableOnDropdown} changeTrigger={handleSetSelectFromColumnDropdown}></ColumnDropdown>
                            </div> */}
                        </div>
                    </div>
                    <form method="POST" id="send-query-form" onSubmit={handleSendConsole}>
                        <div className="flex row gap-sm">
                            <textarea id="query-console"
                            value={queryConsole.value}
                            onChange={(e) => queryConsole.setValue(e.target.value)}></textarea>
                        </div>
                    </form>
                </div>
                
                <div id="query-tools" className={`${chosenQuery ? 'column go-center gap-sm' : 'column go-center gap-sm disabled'}  ${hlQueryTools}`}>
                    <div className="flex row go-center gap-xsm">
                        <p className="indicator-left">⬩➤</p>
                        <h1 className="title-sm title-info-type-b">Recursos</h1>
                        <p className="indicator">⬩➤</p>
                    </div>
                    <div className="flex column go-left gap-xsm">
                        <p id="resource-status">⭐ {statusLabel}</p>
                        <div className="row">
                            <div id="p-console-frame" className={`flex row gap-sm resource ${hlPConsoleFrame}`}>
                                <p id="p-console">{consoleOn ? '🟢 Console de Digitação' : '🔴 Console de Digitação'}</p> 
                                <button onClick={toggleConsole} id="btn-console" className="upper">{consoleOn ? 'on' : 'off'}</button>
                            </div>
                            <div id="p-blocks-frame" className={`flex row gap-sm resource ${hlPBlocksFrame}`} style={styles.offsetUpper}>
                                <p id="p-blocks">{blocksOn ? '🟢 Blocos de Ordenação' : '🔴 Blocos de Ordenação'}</p> 
                                <button onClick={toggleBlocks} id="btn-blocks" className="upper">{blocksOn ? 'on' : 'off'}</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="blocks" className={`column go-center gap-sm ${blocksOn ? 'enabled' : 'disabled'} ${hlBlocks}`}>
                    {/* Impedir de ver os dois recursos ao mesmo tempo (evitar pescar) */}
                    {!consoleOn &&<QueryBlocksOrigin tutorialMap={hlBtnSendBlockQuery} state={queryBlocks} enabled={blocksOn} onSend={handleSendBlocks} />}
                </div>

            </div>
        </div>
    )
}
