
import Database from 'better-sqlite3'
import type { Database as BetterSqlite3Database } from 'better-sqlite3'

export const sqlDailyLifeDB: BetterSqlite3Database = new Database('sql-daily-life.db')
