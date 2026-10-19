

/* 
Pra poder usar esses comandos, é preciso primeiro entrar no terminal com 'cd server'
Feito isso, os comandos podem ser executados
Se for tentado direto da raiz do projeto, um novo arquivo será criado e gerará erro, pois ele é criado vazio
Portanto, é levado em consideração o caminho direito de onde o console está
*/

import Database from 'better-sqlite3'
const busStop = new Database('busStop.db') 

function selectEverythingFromSemaforo() {
    return busStop.prepare('SELECT * FROM semaforo').all()
}

function selectEverythingFromSemaforoLocal() {
    return busStop.prepare('SELECT * FROM semaforolocal').all()
}

// console.log(selectEverythingFromSemaforo())
console.log(selectEverythingFromSemaforoLocal())
