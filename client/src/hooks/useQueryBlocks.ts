import { useCallback, useEffect, useRef, useState } from 'react'
import type { QueryScenarioFrontend } from '../types/Containers'
import { apiUrl } from '../config'

export const SQL_KEYWORDS = [
    'select', ' select', 'select ', 'select\n',
    'from', ' from', 'from ', 'from\n',
    'where', ' where', 'where ', 'where\n', 
    'join', ' join', 'join ', 'join\n',
    'on', ' on', 'on ', 'on\n',
    'and', ' and', 'and ', 'and\n',
    'or', ' or', 'or ', 'or\n',
    'inner join', ' inner join', 'inner join ', 'inner join\n',
    'left join', ' left join', 'left join ', 'left join\n',
    'right join', ' right join', 'right join ', 'right join\n',
    'in', ' in', 'in ', 'in\n',
    'not', ' not', 'not ', 'not\n',
    '*', ' *', '* ', '*\n',
    'distinct', ' distinct', 'distinct ', 'distinct\n',
    'count', ' count', 'count ', 'count\n',
    'not', ' not', 'not ', 'not\n',
    'case', ' case', 'case ', 'case\n',
    'when', ' when', 'when ', 'when\n',
    'then', ' then', 'then ', 'then\n',
    'between', ' between', 'between ', 'between\n',
    'else', ' else', 'else ', 'else\n',
    'end', ' end', 'end ', 'end\n',
    'begin', ' begin', 'begin ', 'begin\n',
    'as', ' as', 'as ', 'as\n',
    'group', ' group', 'group ', 'group\n',
    'by', ' by', 'by ', 'by\n',
    'having', ' having', 'having ', 'having\n',
    'count', ' count', 'count ', 'count\n',
    'count(*)', ' count(*)', 'count(*) ', 'count(*)\n',
    '<', ' <', '< ', '<\n',
    '>', ' >', '> ', '>\n',
    '<=', ' <=', '<= ', '<=\n',
    '>=', ' >=', '>= ', '>=\n',
    '!=', ' !=', '!= ', '!=\n',
    '<>', ' <>', '<> ', '<>\n',
    '=', ' =', '= ', '=\n',
    'union', ' union', 'union ', 'union\n',
    'intersect', ' intersect', 'intersect ', 'intersect\n',
    'except', ' except', 'except ', 'except\n',
    'like', ' like', ' like', 'like\n',
    'is', ' is', 'is ', 'is\n',
    'null', ' null', 'null ', 'null\n',
    'null;', ' null;', 'null;\n', 
    'left', ' left', 'left ', 'left\n',
    'right', ' right', 'right ', 'right\n',
    'order', ' order', 'order ', 'order\n'
]

export interface QueryBlock {
  id: string
  text: string
  isSQL: boolean
  stage: string
}

export type QueryBlocksStatus =
  | 'idle'      // nenhum assunto escolhido ainda
  | 'loading'   // buscando o gabarito da consulta
  | 'ready'     // blocos montados, aguardando o aluno
  | 'sending'   // consulta do aluno enviada, aguardando resposta
  | 'correct'
  | 'incorrect'
  | 'error'

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = 0; i < copy.length; i++) {
    const pos = Math.floor(Math.random() * copy.length)
    ;[copy[i], copy[pos]] = [copy[pos], copy[i]]
  }
  return copy
}

// Compara ignorando ordem de linhas e de colunas — mesma lógica do protótipo (areArraysTwins)
function areArraysTwins(a: unknown[], b: unknown[]): boolean {
  if (a.length !== b.length) return false
  const serializar = (arr: unknown[]) =>
    arr
      .map((obj) => Object.values(obj as Record<string, unknown>).sort().join('|'))
      .sort()
  const sa = serializar(a)
  const sb = serializar(b)
  return sa.every((val, i) => val === sb[i])
}

export interface QueryBlocksState {
  origin: QueryBlock[]
  mirror: QueryBlock[]
  status: QueryBlocksStatus
  errorMessage: string | null
  canSubmit: boolean
  moveToMirror: (id: string) => void
  moveToOrigin: (id: string) => void
}

/**
 * Rotas confirmadas em server/src/index.ts:
 * GET  /api/cenarios/:cenario -> { dados, consulta }  (scenariosRouter)
 * POST /api/exec-query        -> { resultado } | { erro }  (execQueryRouter)
 */
export function useQueryBlocks(chosenQuery: QueryScenarioFrontend | null, active: boolean) {
  const [origin, setOrigin] = useState<QueryBlock[]>([])
  const [mirror, setMirror] = useState<QueryBlock[]>([])
  const [status, setStatus] = useState<QueryBlocksStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const gabaritoRef = useRef<{ dados: unknown[] } | null>(null)

  // Zera tudo quando o assunto muda (nova consulta = novo conjunto de blocos)
  useEffect(() => {
    setOrigin([])
    setMirror([])
    gabaritoRef.current = null
    setErrorMessage(null)
    setStatus(chosenQuery ? 'ready' : 'idle')
  }, [chosenQuery])

  // Busca e embaralha os blocos só quando "Blocos" está ligado e ainda não
  // existe nada gerado pra esse assunto — igual ao "if(totalBlocos === 0)" do protótipo
  useEffect(() => {
    if (!active || !chosenQuery) return
    if (origin.length > 0 || mirror.length > 0) return

    let cancelled = false
    setStatus('loading')
    
    // const endpoint = `/api/scenarios/${chosenQuery.scenario}-${chosenQuery.queryType}-${chosenQuery.queryId}`
    const endpoint = apiUrl(`/api/scenarios/${chosenQuery.scenario}-${chosenQuery.queryType}-${chosenQuery.queryId}`)
    
    /* Versão antiga da captura de dados pros Blocos de ordenação
    fetch(endpoint)
      .then((res) => res.json())
      .then(({ dados, consulta }: { dados: unknown[]; consulta: string }) => {
        if (cancelled) return
        gabaritoRef.current = { dados }
        const tokens = shuffle(consulta.split(' ').filter((t) => t !== '' && t !== '\n'))
        setOrigin(
          tokens.map((text, i) => ({
            id: `${i}-${text}`,
            text,
            isSQL: SQL_KEYWORDS.includes(text.toLowerCase()),
          }))
        )
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) {
          setErrorMessage('Não foi possível carregar a consulta deste assunto.')
          setStatus('error')
        }
      })
    */
    
    /* Versão atual (pinta os blocos, dividindo-os em grupos, antes de embaralhar a ordem da consulta) */
    fetch(endpoint)
      .then((res) => res.json())
      .then(({ dados, consulta }: { dados: unknown[]; consulta: string }) => {
        if (cancelled) return
        gabaritoRef.current = { dados }

        const rawTokens = consulta.split(' ').filter((t) => t !== '' && t !== '\n')
        const totalStages = parseInt(`${rawTokens.length / 3}`)

        const tokensWithStage = rawTokens.map((text, i) => {
          let stage: string
          if (totalStages >= i + 1) stage = 'on-start'
          else if (totalStages < i + 1 && totalStages * 2 >= i + 1) stage = 'in-the-middle'
          else stage = 'in-the-end'

          return {
            id: `${i}-${text}`,
            text,
            isSQL: SQL_KEYWORDS.includes(text.toLowerCase()),
            stage
          }
        })

        setOrigin(shuffle(tokensWithStage))
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) {
          setErrorMessage('Não foi possível carregar a consulta deste assunto.')
          setStatus('error')
        }
      })

    return () => {
      cancelled = true
    }
  }, [active, chosenQuery, origin.length, mirror.length])

  // Único modo adotado por enquanto: clique move o bloco entre origem e espelho
  const moveToMirror = useCallback((id: string) => {
    const block = origin.find((b) => b.id === id)
    if (!block) return
    setOrigin((prev) => prev.filter((b) => b.id !== id))
    setMirror((prev) => [...prev, block])
    setStatus((s) => (s === 'incorrect' || s === 'error') ? 'ready' : s) // resolver trava no botão 'enviar' quando consulta errad
  }, [origin])

  const moveToOrigin = useCallback((id: string) => {
    const block = mirror.find((b) => b.id === id)
    if (!block) return
    setMirror((prev) => prev.filter((b) => b.id !== id))
    setOrigin((prev) => [...prev, block])
    setStatus((s) => (s === 'incorrect' || s === 'error') ? 'ready' : s) // resolver trava no botão 'enviar' quando consulta errad
  }, [mirror])

  const canSubmit = status === 'ready' && origin.length === 0 && mirror.length > 0

  const submit = useCallback(async (): Promise<boolean | undefined> => {
    if (!chosenQuery || !gabaritoRef.current) return undefined
    setStatus('sending')
    setErrorMessage(null)

    const query = mirror.map((b) => b.text).join(' ')

    try {
      // const response = await fetch('/api/exec-query', { 
      // #prod
      const response = await fetch(apiUrl('/api/exec-query'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        const { erro } = await response.json()
        setErrorMessage(erro ?? 'Erro ao executar a consulta.')
        setStatus('ready')
        return undefined
      }

      const { resultado } = await response.json()
      const correct = areArraysTwins(gabaritoRef.current.dados, resultado)
      setStatus(correct ? 'correct' : 'incorrect')
      return correct
    } catch {
      setErrorMessage('Falha de conexão ao enviar a consulta.')
      setStatus('ready')
      return undefined
    }
  }, [chosenQuery, mirror])

  // Reembaralha os blocos já carregados, sem nova requisição ao servidor
  const reset = useCallback(() => {
    if (mirror.length > 0) {
      setOrigin((o) => shuffle([...o, ...mirror]))
      setMirror([])
    }
    setStatus('ready')
  }, [mirror])

  const state: QueryBlocksState = {
    origin,
    mirror,
    status,
    errorMessage,
    canSubmit,
    moveToMirror,
    moveToOrigin,
  }

  return { ...state, submit, reset }
}