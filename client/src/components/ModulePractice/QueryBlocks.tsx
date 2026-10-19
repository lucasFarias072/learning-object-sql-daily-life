import type { QueryBlocksState } from '../../hooks/useQueryBlocks'
import { SQL_KEYWORDS } from '../../hooks/useQueryBlocks'
import { useTutorialHighlight } from '../shared/TutorialContext'

export function QueryBlocksMirrorTemp() {
  return (
    <div id="blocks-area-mirror" className={`flex column go-center gap-xsm`}>
        <div className='flex column go-left'>
          <p>⮞ Isso é o Bloco de ordenação espelhado</p>
          <p>⮜ Veja o tutorial para obter informações sobre esse recurso</p>
          {/* <p>⬩➤ É o irmão do Bloco de ordenação abaixo</p> */}
          {/* <p>⬩➤ Para ativar o Bloco de ordenação na parte inferior central da tela</p> */}
          {/* <p>⬩➤ Ao ativá-lo, esse recurso será habilitado também</p> */}
        </div>
    </div>
  )
}

// Fica em upper-area, no lugar do antigo <div id="blocks-area-mirror"></div> estático
export function QueryBlocksMirror({ state, tutorialClass }: { state: QueryBlocksState, tutorialClass: string }) {
  return (
    <div id="blocks-area-mirror" className={`flex row go-center gap-xsm ${tutorialClass}`}>
      {state.mirror.length !== 0 && state.mirror.map((block) => (
        <p
          key={block.id}
          className={block.isSQL ? 'frame syntax-sql' : `frame syntax ${block.stage}`}
          onClick={() => state.moveToOrigin(block.id)}
        >
          {SQL_KEYWORDS.includes(block.text.toLowerCase()) ? block.text.toUpperCase() : block.text}
        </p>
      ))}
      {state.mirror.length === 0 && 
      <div className='flex column go-center'>
          <div className='flex column go-left'>
              <p>⬩➤ Esperando sintaxes transferidas do Bloco de Ordenação abaixo</p>
              <p>⬩➤ Clique em algum célula/palavra do Bloco de Ordenação, para que ela venha para cá</p>
          </div>
      </div>
      }
    </div>
  )
}

// Fica em bottom-area, no lugar do antigo <div id="blocks">...</div> estático
export function QueryBlocksOrigin({
  state,
  enabled,
  tutorialMap,
  onSend,
}: {
  state: QueryBlocksState
  enabled: boolean
  tutorialMap: string
  onSend: () => void
}) {
  
  const hlBtnSendBlockQuery = useTutorialHighlight('send-block-query')
  const blocksAnalysis: string[] = []

  if (enabled) {
    const queryStages = parseInt(`${state.origin.length / 3}`)
    console.log("queryStages => ", queryStages)
    for(let i = 0; i < state.origin.length; i++) {
      console.log(`[índice ${i}] => `, state.origin[i])
      if(queryStages >= i + 1) blocksAnalysis.push('on-start')
      else if(queryStages < i + 1 && queryStages * 2 >= i + 1) blocksAnalysis.push('in-the-middle')
      else blocksAnalysis.push('in-the-end')
    }
    // console.log('state.origin =>', [state.origin.length, parseInt(state.origin.length / 3)])
  }

  return (
    <div id="blocks" className="column go-center gap-sm">
      <div className="flex row gap-xsm">
        <p className="info" title="Após selecionar um assunto SQL e ativar os blocos de ordenação, clique nos blocos para montar a consulta na ordem correta">🛈</p>
        <h1 id="tool-b" className="title-sm title-info-type-a">🛠 Blocos de Ordenação</h1>
        <button
          id="send-block-query"
          className={`send-query ${hlBtnSendBlockQuery} ${tutorialMap} ${state.canSubmit ? '' : 'disabled'}`}
          disabled={!state.canSubmit || state.status === 'sending'}
          onClick={onSend}
        >enviar
        </button>
      </div>
      <div id="blocks-area" className="flex row go-center gap-xsm">
        {enabled && state.origin.map((block) => (
          <p
            key={block.id}
            className={block.isSQL ? 'frame syntax-sql' : `frame syntax ${block.stage}`}
            onClick={() => state.moveToMirror(block.id)}
          >
            {SQL_KEYWORDS.includes(block.text.toLowerCase()) ? block.text.toUpperCase() : block.text}
          </p>
        ))}
      </div>
      {/* {state.status === 'incorrect' && <p className="leave">Consulta incorreta, tente novamente.</p>} */}
      {/* {state.errorMessage && <p className="leave">{state.errorMessage}</p>} */}
    </div>
  )
}