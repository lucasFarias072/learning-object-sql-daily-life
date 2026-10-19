

import { createContext, useContext, type ReactNode } from 'react'
import { useTutorial } from '../../hooks/useTutorial'
import type { TutorialTargetKey } from '../../data/tutorialSteps'

type TutorialContextValue = ReturnType<typeof useTutorial>

const TutorialContext = createContext<TutorialContextValue | null>(null)

export function TutorialProvider({ children }: { children: ReactNode }) {
  const tutorial = useTutorial()
  return <TutorialContext.Provider value={tutorial}>{children}</TutorialContext.Provider>
}

function useTutorialContext() {
  const ctx = useContext(TutorialContext)
  if (!ctx) throw new Error('useTutorialContext precisa estar dentro de um TutorialProvider')
  return ctx
}

export { useTutorialContext }

// Uso nos elementos-alvo: className={useTutorialHighlight('assuntoSelect')}
export function useTutorialHighlight(key: TutorialTargetKey) {
  const { isTargetHighlighted } = useTutorialContext()
  return isTargetHighlighted(key) ? 'tutorial-highlight' : ''
}