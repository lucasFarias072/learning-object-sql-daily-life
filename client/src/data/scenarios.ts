import type { QueryScenarioFrontend } from '../types/Containers';

// Cenários
import { casaFREE } from './scenarios/casa/free';
import { exercicioFREE } from './scenarios/exercicio/free';
import { frutariaFREE } from './scenarios/frutaria/free';
import { onibusFREE } from './scenarios/onibus/free';
import { parqueAquaticoFREE } from './scenarios/parque-aquatico/free';
import { pontoDeOnibusFREE } from './scenarios/ponto-de-onibus/free';
import { quartoFREE } from './scenarios/quarto/free';
import { sinucaFREE } from './scenarios/sinuca/free';
import { turismoFREE } from './scenarios/turismo/free';

export const scenarios: QueryScenarioFrontend[] = [
    ...casaFREE,
    ...exercicioFREE,
    ...frutariaFREE,
    ...onibusFREE,
    ...parqueAquaticoFREE,
    ...pontoDeOnibusFREE,
    ...quartoFREE,
    ...sinucaFREE,
    ...turismoFREE
];

// console.log("scenarios = ")
// console.log(scenarios)