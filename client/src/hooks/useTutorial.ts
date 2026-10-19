

import { useCallback, useState, useRef } from 'react'
import { tutorialSteps, type TutorialTargetKey } from '../data/tutorialSteps'

export function useTutorial() {
  // -1: tutorial fechado. 0..N-1: dentro dos passos.
  const [stepIndex, setStepIndex] = useState(-1)

  const active = stepIndex >= 0
  const isLastStep = stepIndex === tutorialSteps.length - 1
  const currentStep = active ? tutorialSteps[stepIndex] : null
  const forwardLabel = isLastStep ? 'encerrar' : 'prosseguir'

  const start = useCallback(() => setStepIndex(0), [])

  const advance = useCallback(() => {
    setStepIndex((i) => (i >= tutorialSteps.length - 1 ? -1 : i + 1))
  }, [])

  const isTargetHighlighted = useCallback(
    (key: TutorialTargetKey) => currentStep?.target === key,
    [currentStep],
  )

  const actionsRef = useRef<Record<string, (...args: any[]) => void>>({})

  const registerAction = useCallback((key: string, fn: (...args: any[]) => void) => {
    actionsRef.current[key] = fn
  }, [])

  const runAction = useCallback((key: string, ...args: any[]) => {
    actionsRef.current[key]?.(...args)
  }, [])

  return { active, currentStep, forwardLabel, start, advance, isTargetHighlighted, registerAction, runAction }
}