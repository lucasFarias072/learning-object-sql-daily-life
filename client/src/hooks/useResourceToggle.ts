import { useCallback, useMemo, useState } from 'react'

export function useResourceToggle() {
  const [consoleOn, setConsoleOn] = useState(false)
  const [blocksOn, setBlocksOn] = useState(false)

  const toggleConsole = useCallback(() => setConsoleOn((v) => !v), [])
  const toggleBlocks = useCallback(() => setBlocksOn((v) => !v), [])

  // Espelha o texto de #resource-status no protótipo
  const statusLabel = useMemo(() => {
    if (consoleOn && blocksOn) return 'Em uso: ambos'
    if (!consoleOn && !blocksOn) return 'Em uso: nenhum'
    return consoleOn ? 'Em uso: Console' : 'Em uso: Blocos'
  }, [consoleOn, blocksOn])

  // Chamar depois de uma resposta correta (equivalente ao resetFrame do protótipo)
  const resetResources = useCallback(() => {
    setConsoleOn(false)
    setBlocksOn(false)
  }, [])

  return { consoleOn, blocksOn, toggleConsole, toggleBlocks, statusLabel, resetResources }
}