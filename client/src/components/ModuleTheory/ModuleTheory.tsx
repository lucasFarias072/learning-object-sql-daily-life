

import { useParams } from 'react-router-dom'
import { subjects } from '../../data/subjects'

// Assuntos do módulo teórico
import { JoinTheory } from './subjects/JoinTheory'
import { AggregateTheory } from './subjects/AggregateTheory'
import { CaseWhenTheory } from './subjects/CaseWhenTheory'
import { SubqueryTheory } from './subjects/SubqueryTheory'

const subjectComponents: Partial<Record<string, React.ComponentType>> = {
  'join': JoinTheory,
  'aggregate': AggregateTheory,
  'case-when': CaseWhenTheory,
  'subconsultas': SubqueryTheory
  // 'filtros-compostos': FiltrosCompostosTheory,
}

export function ModuleTheory() {
  const { subject } = useParams<{ subject: string }>()
  const subjectData = subjects.find(s => s.slug === subject)
  const SubjectContent = subject ? subjectComponents[subject] : undefined

  if (!subjectData) {
    return <p>Assunto não encontrado.</p>
  }

  return (
    <section className="module-theoretical">
      {/* <h1>{subjectData.title}</h1> */}
      {SubjectContent ? <SubjectContent /> : <p>Conteúdo em construção.</p>}
    </section>
  )
}