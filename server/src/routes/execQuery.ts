import { Router } from 'express'
import { sqlDailyLifeDB } from '../db/database.js'

const router = Router()

router.post('/', (req, res) => {
  const { query } = req.body

  if (!query || typeof query !== 'string') {
    res.status(400).json({ erro: 'Campo "query" ausente ou inválido no corpo da requisição.' })
    return
  }

  try {
    const resultado = sqlDailyLifeDB.prepare(query).all()
    res.json({ resultado })
  } catch (err) {
    res.status(500).json({ erro: (err as Error).message })
  }
})

export const execQueryRouter = router