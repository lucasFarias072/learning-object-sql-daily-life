import { useCallback, useState } from 'react';
import type { ScenarioQuery } from '../types/Containers';

interface ExecuteResult {
  loading: boolean;
  error: string | null;
  data: unknown | null;
}

export function useConsultaExecution() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<unknown | null>(null);

  const execute = useCallback(async (consulta: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/exec-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consulta }),
      });

      if (!response.ok) {
        throw new Error(`Erro na execução: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, data, execute } as const;
}
