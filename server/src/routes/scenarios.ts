import { Router } from 'express'
import { sqlDailyLifeDB } from '../db/database.js'
import type { QueryScenarioBackend } from '../data/scenarios/types.js';

import { casaFREE } from '../data/scenarios/casa/free.js';
import { exercicioFREE } from '../data/scenarios/exercicio/free.js';
import { frutariaFREE } from '../data/scenarios/frutaria/free.js';
import { onibusFREE } from '../data/scenarios/onibus/free.js';
import { parqueAquaticoFREE } from '../data/scenarios/parque-aquatico/free.js';
import { pontoDeOnibusFREE } from '../data/scenarios/ponto-de-onibus/free.js';
import { quartoFREE } from '../data/scenarios/quarto/free.js';
import { sinucaFREE } from '../data/scenarios/sinuca/free.js';
import { turismoFREE } from '../data/scenarios/turismo/free.js';

const router = Router()

const scenarios: QueryScenarioBackend[] = [
  ...casaFREE,
  ...exercicioFREE,
  ...frutariaFREE,
  ...onibusFREE,
  ...parqueAquaticoFREE,
  ...pontoDeOnibusFREE,
  ...quartoFREE,
  ...sinucaFREE,
  ...turismoFREE
]

// Lista todos os cenários (você já tinha isso)
router.get('/', (_req, res) => {
  res.json(scenarios)
})

// Gabarito de um cenário específico -> { dados, consulta }
// Usado pelo useQueryBlocks.ts pra montar os blocos embaralhados.
router.get('/:cenario', (req, res) => {
  const scenario = scenarios.find((s) => s.cenario === req.params.cenario)
  if (!scenario) {
    res.status(404).json({ erro: 'Cenário não encontrado' })
    return
  }
  try {
    const dados = sqlDailyLifeDB.prepare(scenario.consulta).all()
    res.json({ dados, consulta: scenario.consulta.trim() })
  } catch (err) {
    res.status(500).json({ erro: (err as Error).message })
  }
})

export const scenariosRouter = router