

import { useCallback, useEffect, useRef, useState } from 'react'
import type { QueryScenarioFrontend } from '../types/Containers'
import { requirementShield } from '../../../utils/sqlShield'

import { sqlNormalizer } from '../../../utils/sqlNormalizer'
import { sqlQueryGrammar } from '../../../utils/sqlQueryGrammar'

// import { subqueryQueryN1 } from '../../../server/src/data/quarto-queries/subquery/n-1'
// import { aggregateQueryN2 } from '../../../server/src/data/turismo-queries/aggregate/n-2'

export type ConsoleStatus = 'idle' | 'ready' | 'sending' | 'correct' | 'incorrect' | 'error'

// Mesma comparação usada no useQueryBlocks.ts (ignora ordem de linhas/colunas)
function areArraysTwins(a: unknown[], b: unknown[]): boolean {
  let result = true
  if (a.length !== b.length) result = false
  const serializar = (arr: unknown[]) =>
    arr
      .map((obj) => Object.values(obj as Record<string, unknown>).sort().join('|'))
      .sort()
  const sa = serializar(a)
  const sb = serializar(b)
  console.log(">>>>> TESTE: areArrayTwins (OPEN) <<<<<")
  console.log(sa)
  console.log(sb)
  console.log(">>>>> TESTE: areArrayTwins (CLOSE) <<<<<")

  return !result ? result : sa.every((val, i) => val === sb[i])
}

// Ajustar texto da consulta da console de digitação, verificar requisitos de sintaxe e proibir coisas não DDL 
// function meetsMinimumRequirements(value: string): boolean {
//   const rawSQL: string = value.replace(/\s+/g, " ").trim().replace(/;$/, "").toLowerCase();
//   const forbiddenSyntax = ['delete', 'update', 'create', 'set', 'into', 'rename', 'drop', 'to', 'values']
//   const forbade = forbiddenSyntax.some(word => rawSQL.includes(word))
//   return rawSQL.includes("select") && rawSQL.includes("from") && !forbade && rawSQL.split(" ").length >= 4

//   /*
//       let forbade = false
//       for(let i = 0; i < forbiddenSyntax.length; i++) {
//           if(rawSQL.includes(forbiddenSyntax[i])) {
//               forbade = true
//               break
//           }
//       }
//       const hasMininumSyntax = rawSQL.includes("select") && rawSQL.includes("from") && !forbade && rawSQL.split(" ").length >= 4
//       return hasMininumSyntax
//   */

//   /*
//       const tokens = value.split(' ').filter((t) => t !== '').map((t) => t.toLowerCase())
//       console.log("Requisitos p/ a consultar ser validada p/ envio")
//       console.log(rawSQL)
//       console.log([tokens.includes('select'), tokens.includes('from'), tokens.includes('\nfrom')])
//       return tokens.length >= 4 && tokens.includes('select') && tokens.includes('from') || tokens.includes('\nfrom')
//   */
// }

export function useQueryConsole(chosenQuery: QueryScenarioFrontend | null) {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState<ConsoleStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const gabaritoRef = useRef<{ dados: unknown[] } | null>(null)

  // Busca o gabarito assim que o assunto é escolhido (aqui não depende de nenhum
  // toggle "ligado", diferente dos blocos — o console já fica pronto pra digitar)
  useEffect(() => {
    setValue('')
    setErrorMessage(null)
    gabaritoRef.current = null
    setStatus(chosenQuery ? 'ready' : 'idle')

    if (!chosenQuery) return

    let cancelled = false
    const endpoint = `/api/scenarios/${chosenQuery.scenario}-${chosenQuery.queryType}-${chosenQuery.queryId}`
    
    console.log("endpoint = ")
    console.log([chosenQuery.scenario, chosenQuery.queryType, chosenQuery.queryId])
    console.log(endpoint)

    fetch(endpoint)
      .then((res) => res.json())
      .then(({ dados }: { dados: unknown[] }) => {
        if (!cancelled) gabaritoRef.current = { dados }
      })
      .catch(() => {
        if (!cancelled) setErrorMessage('Não foi possível carregar o gabarito deste assunto.')
      })

    return () => {
      cancelled = true
    }
  }, [chosenQuery])

  // console.log("gabaritoRef: ", gabaritoRef)

  const canSubmit = status !== 'sending' && requirementShield(value)

  console.log(canSubmit)

  const submit = useCallback(async (): Promise<boolean | undefined> => {
    if (!chosenQuery || !gabaritoRef.current) return undefined
    setStatus('sending')
    setErrorMessage(null)
    
    // const normalizeSQL = (sql: string) => sql.replace(/\s+/g, ' ').trim().toLowerCase()

    // let analysis: boolean[] = []
    const queryContext = `${chosenQuery.scenario}-${chosenQuery.queryType}-${chosenQuery.queryId}`
    // const queryShaped = value.replace(/\s+/g, ' ').trim()
    const queryShaped = sqlNormalizer(value)
    
    const veredict = sqlQueryGrammar(queryContext, queryShaped)

    // if (analysis.length != 0) veredict = !analysis.includes(false)
    
    try {
      const response = await fetch('/api/exec-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: value }),
      })
      
      // Erro de sintaxe (!= de erro de resposta)
      if (!response.ok) {
        const { erro } = await response.json()
        setErrorMessage(erro ?? 'Erro de sintaxe na consulta.')
        setStatus('error')
        return undefined
      }

      const { resultado } = await response.json()
      console.log(resultado)
      const correct = areArraysTwins(gabaritoRef.current.dados, resultado) && veredict
      setStatus(correct ? 'correct' : 'incorrect')
      return correct
    } catch {
      setErrorMessage('Falha de conexão ao enviar a consulta.')
      setStatus('ready')
      return undefined
    }
  }, [chosenQuery, value])

  // Limpa o console para uma nova tentativa, sem nova requisição de gabarito
  const reset = useCallback(() => {
    setValue('')
    setErrorMessage(null)
    setStatus(chosenQuery ? 'ready' : 'idle')
  }, [chosenQuery])

  return { value, setValue, status, errorMessage, canSubmit, submit, reset }
}