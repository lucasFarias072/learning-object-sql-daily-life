

import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { ScenarioList } from './components/ModulePractice/ScenarioList'
import { SubjectList } from './components/ModuleTheory/SubjectList'
import { ModulePractice} from './components/ModulePractice/ModulePractice'
import { ModuleTheory } from './components/ModuleTheory/ModuleTheory'
import { ModuleRead } from './components/ModuleRead/ModuleRead'
import { TutorialProvider } from './components/shared/TutorialContext'
import { scenarios } from './data/scenarios'
import { subjects } from './data/subjects'

import './assets/styles/buttons.css'
import './assets/styles/custom.css'
import './assets/styles/drafts.css'
import './assets/styles/feedback.css'
import './assets/styles/flex.css'
import './assets/styles/height.css'
import './assets/styles/history.css'
import './assets/styles/inputs.css'
import './assets/styles/instruction.css'
import './assets/styles/margin.css'
import './assets/styles/module-theory.css'
import './assets/styles/module-practice.css'
import './assets/styles/padding.css'
import './assets/styles/sql.css'
import './assets/styles/standard.css'
import './assets/styles/titles.css'
import './assets/styles/tutorial.css'
import './assets/styles/width.css'
import './assets/styles/view.css'
import './assets/styles/theory-slides.css'
import './App.css'

const appTitle = 'Objeto de Aprendizagem do SQL Daily Life'

function getPageTitle(pathname: string) {
  const [section, page] = pathname.split('/').filter(Boolean)

  if (!section) return appTitle
  if (section === 'leitura') return 'Módulo Leia'
  if (section === 'teorico') {
    if (!page) return 'Módulo Teórico'

    const subject = subjects.find(item => item.slug === page)
    return subject ? `${subject.title} | Módulo Teórico` : 'Módulo Teórico'
  }
  if (section === 'pratico') {
    if (!page) return 'Módulo Prático'

    const scenario = scenarios.find(item => item.scenario === page)?.scenario
    return scenario ? `${scenario.toUpperCase()} | Módulo Prático` : 'Módulo Prático'
  }

  return appTitle
}

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = getPageTitle(pathname)
  }, [pathname])

  return (
      <div id="main-frame" className="h100 flex column background-ink">

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pratico" element={<ScenarioList />} />
              <Route path="/pratico/:scenario" element={<TutorialProvider><ModulePractice /></TutorialProvider>} />

              <Route path="/teorico" element={<SubjectList />} />
              <Route path="/teorico/:subject" element={<ModuleTheory />} />

              <Route path="/leitura" element={<ModuleRead />} />
          </Routes>

      </div>
  )
}

export default App
