

// components/ModuleTheory/shared/TheoryConsole.tsx
import { useState } from 'react'
import { useQueryTest } from '../../../hooks/useQueryTest'
import { ResultTable } from '../../ModulePractice/ResultTable'
import { requirementShield } from '../../../../../utils/sqlShield'

interface TheoryConsoleProps {
  instructions: string   // texto que aparece em cima, tipo "digite a consulta do exemplo acima e rode"
}

export function TheoryConsole({ instructions }: TheoryConsoleProps) {
  const [value, setValue] = useState('')
  const test = useQueryTest()

  const canSubmit = requirementShield(value)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!canSubmit) return
    test.runTest(value)
  }

  return (
    <div id="theory-console" className="flex row gap-sm mt-2">

      <div className="flex column gap-xsm" style={{ flex: 1, maxWidth: '50vw' }}>
        <div className='flex column go-center gap-xsm'>
            <button form="send-query-draft" type="submit" className={canSubmit ? 'send-query round-title' : 'send-query round-title disabled'}>ver resultado</button>
        </div>
     
        <form onSubmit={handleSubmit} id="send-query-draft" className="flex column gap-xsm">
          <textarea id="exec" style={{ border: 'var(--deep-blue) solid .1px' }} className='textarea-draft' value={value} onChange={(e) => setValue(e.target.value)} placeholder="Digite sua consulta aqui..."/>
        </form>
      </div>

      <div className="flex column go-center gap-xsm">
        {!canSubmit && <p>⮜⮜ Use o console.</p>}
        {test.testError && <p className="test-error">{test.testError}</p>}
        {test.testResult && <ResultTable data={test.testResult} />}
      </div>
      
    </div>
  )
}
