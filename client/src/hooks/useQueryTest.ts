

import { useCallback, useState } from 'react'

export const useQueryTest = () => {
  const [testResult, setTestResult] = useState<any[] | null>(null)
  const [testError, setTestError] = useState<string | null>(null)
  const [testStatus, setTestStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const runTest = useCallback(async (query: string) => {
    setTestStatus('sending')
    setTestError(null)
    try {
      const response = await fetch('/api/exec-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      })
      if (!response.ok) {
        const { erro } = await response.json()
        setTestError(erro ?? 'Erro de sintaxe na consulta.')
        setTestStatus('done')
        return
      }
      const { resultado } = await response.json()
      setTestResult(resultado)
      setTestStatus('done')
    } catch {
      setTestError('Falha de conexão ao testar a consulta.')
      setTestStatus('done')
    }
  }, [])

  const clearTest = useCallback(() => {
    setTestResult(null)
    setTestError(null)
    setTestStatus('idle')
  }, [])

  return { testResult, testError, testStatus, runTest, clearTest }
}