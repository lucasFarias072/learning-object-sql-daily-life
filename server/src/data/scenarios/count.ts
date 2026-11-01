

import { casaAGGREGATE } from "./casa/aggregate.js";
import { casaCASEWHEN } from "./casa/casewhen.js";
import { casaSUBQUERY } from "./casa/subqueries.js";
import { casaJOIN } from "./casa/joins.js";
import { exercicioAGGREGATE } from "./exercicio/aggregate.js";
import { exercicioCASEWHEN } from "./exercicio/casewhen.js";
import { exercicioJOIN } from "./exercicio/joins.js";
import { exercicioSUBQUERY } from "./exercicio/subqueries.js";
import { frutariaAGGREGATE } from "./frutaria/aggregate.js";
import { frutariaCASEWHEN } from "./frutaria/casewhen.js";
import { frutariaJOIN } from "./frutaria/joins.js";
import { frutariaSUBQUERY } from "./frutaria/subqueries.js";
import { onibusAGGREGATE } from "./onibus/aggregate.js";
import { onibusCASEWHEN } from "./onibus/casewhen.js";
import { onibusJOIN } from "./onibus/joins.js";
import { onibusSUBQUERY } from "./onibus/subqueries.js";
import { parqueAquaticoAGGREGATE } from "./parque-aquatico/aggregate.js";
import { parqueAquaticoCASEWHEN } from "./parque-aquatico/casewhen.js";
import { parqueAquaticoJOIN } from "./parque-aquatico/joins.js";
import { parqueAquaticoSUBQUERY } from "./parque-aquatico/subqueries.js";
import { pontoDeOnibusAGGREGATE } from "./ponto-de-onibus/aggregate.js";
import { pontoDeOnibusCASEWHEN } from "./ponto-de-onibus/casewhen.js";
import { pontoDeOnibusJOIN } from "./ponto-de-onibus/joins.js";
import { pontoDeOnibusSUBQUERY } from "./ponto-de-onibus/subqueries.js";
import { quartoAGGREGATE } from "./quarto/aggregate.js";
import { quartoCASEWHEN } from "./quarto/casewhen.js";
import { quartoJOIN } from "./quarto/joins.js";
import { quartoSUBQUERY } from "./quarto/subqueries.js";
import { sinucaAGGREGATE } from "./sinuca/aggregate.js";
import { sinucaCASEWHEN } from "./sinuca/casewhen.js";
import { sinucaJOIN } from "./sinuca/joins.js";
import { sinucaSUBQUERY } from "./sinuca/subqueries.js";
import { turismoAGGREGATE } from "./turismo/aggregate.js";
import { turismoCASEWHEN } from "./turismo/casewhen.js";
import { turismoJOIN } from "./turismo/joins.js";
import { turismoSUBQUERY } from "./turismo/subqueries.js";

export function getQueryLength(): number {
    return [
        casaAGGREGATE, casaCASEWHEN, casaJOIN, casaSUBQUERY,
        exercicioAGGREGATE, exercicioCASEWHEN, exercicioJOIN, exercicioSUBQUERY,
        frutariaAGGREGATE, frutariaCASEWHEN, frutariaJOIN, frutariaSUBQUERY,
        onibusAGGREGATE, onibusCASEWHEN, onibusJOIN, onibusSUBQUERY,
        parqueAquaticoAGGREGATE, parqueAquaticoCASEWHEN, parqueAquaticoJOIN, parqueAquaticoSUBQUERY,
        pontoDeOnibusAGGREGATE, pontoDeOnibusCASEWHEN, pontoDeOnibusJOIN, pontoDeOnibusSUBQUERY,
        quartoAGGREGATE, quartoCASEWHEN, quartoJOIN, quartoSUBQUERY,
        sinucaAGGREGATE, sinucaCASEWHEN, sinucaJOIN, sinucaSUBQUERY,
        turismoAGGREGATE, turismoCASEWHEN, turismoJOIN, turismoSUBQUERY
    ].reduce((total, queries) => total + queries.length, 0);
}
