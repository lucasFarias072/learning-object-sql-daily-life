import type { ScenarioQuery } from '../types/Containers';

const BASE_URL = '/api';

export async function fetchCenarios(): Promise<ScenarioQuery[]> {
  const response = await fetch(`${BASE_URL}/cenarios`);
  if (!response.ok) {
    throw new Error('Falha ao buscar cenários');
  }
  return response.json();
}

export async function execQuery(consulta: string): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/exec-query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ consulta }),
  });

  if (!response.ok) {
    throw new Error('Falha ao executar a consulta');
  }

  return response.json();
}
