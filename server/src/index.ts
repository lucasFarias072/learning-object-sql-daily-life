import express from 'express'
import cors from 'cors'
import { scenariosRouter } from './routes/scenarios.js'
import { execQueryRouter } from './routes/execQuery.js'
import { tablesRouter } from './routes/tables.js'

const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 3000

app.use(cors())
app.use(express.json())

app.use('/api/scenarios', scenariosRouter)
app.use('/api/exec-query', execQueryRouter)
app.use('/api', tablesRouter)

app.get('/', (_req, res) => {
  res.send({ status: 'ok', message: 'API do SQL Daily Life' })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
