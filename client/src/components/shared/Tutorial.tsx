

import { useState } from 'react'
import { useTutorialContext } from './TutorialContext'

export function Tutorial() {
  const { active, currentStep, forwardLabel, start, advance } = useTutorialContext()
  const [hovering, setHovering] = useState(false)

  return (
    <>
      <div
        id="tutorial"
        className={`flex column go-right-just-center gap-sm p-right-1 ${!active ? 'tutorial-attention' : ''}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {!hovering ? (
          <p id="tutorial-indicator">📜</p>
        ) : (
          <div className="flex column go-center">
            <p style={{ fontSize: "1.2rem", letterSpacing: "1.5px", padding: "0 .3rem" }}>Primeira vez?</p>
            <div className="flex row gap-xsm">
              <p id="accept-tutorial" onClick={start}>ver tutorial</p>
            </div>
          </div>
        )}
      </div>

      {active && (
        <div id="tutorial-steps" className="flex column go-right gap-xsm">
          <p id="instruction">{currentStep?.instruction}</p>
          <p id="tutorial-forward" className="btn-instruction" onClick={advance} style={{ position: 'relative', top: '0px', right: '0px' }}>
            {forwardLabel}
          </p>
          
        </div>
      )}
    </>
  )
}