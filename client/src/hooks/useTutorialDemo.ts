

import { useCallback } from "react"
import { useTutorialContext } from "../components/shared/TutorialContext"

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function useTutorialDemo() {
  const { runAction } = useTutorialContext()

  const runFirstTutorialCycle = useCallback (async () => {
    runAction('selectAssunto', '1', 'livre')
    await wait(5000)

    runAction('toggleConsole')
    await wait(5000)

    await runAction('typeQuery', 'SELECT * FROM pessoa')
    await wait(5000)

    // await runAction('trySendConsole')
    // await wait(3000)

    runAction('toggleConsole')
  }, [runAction])

  return { runFirstTutorialCycle }
}