
// #dev
// import Database from 'better-sqlite3'
// import type { Database as BetterSqlite3Database } from 'better-sqlite3'

// export const sqlDailyLifeDB: BetterSqlite3Database = new Database('sql-daily-life.db')

// #prod
import Database from 'better-sqlite3'
import type { Database as BetterSqlite3Database } from 'better-sqlite3'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Caminho absoluto: funciona não importa de qual pasta o servidor for iniciado
const here = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(here, '..', '..', 'sql-daily-life.db')

// Em produção o banco abre somente leitura; localmente continua como antes
const isProduction = process.env.NODE_ENV === 'production'

export const sqlDailyLifeDB: BetterSqlite3Database = new Database(dbPath, {
  readonly: isProduction,
  fileMustExist: true,
})