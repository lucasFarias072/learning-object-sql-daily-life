

// hooks/useScenarioData.ts
import { useState, useEffect } from 'react';
import type { TableRecord } from '../types/Containers';
import { apiUrl } from '../config'

// Mapeia o nome lógico da tabela pro endpoint real do backend
// Nomes idênticos ao das tabelas (incluindo _)
const ENDPOINTS: Record<string, string> = {
  relationship: '/api/relationships',
  stakeholder: '/api/stakeholders',
  
  // Schema: multi referenciados
  cenario: '/api/cenarios',
  local: '/api/locais',
  local_tipo: '/api/locais-tipos',
  pessoa: '/api/pessoas',
  
  // Schema: ponto-de-onibus
  semaforo: '/api/semaforos',
  onibus_veiculo: '/api/onibus-veiculos',
  onibus_zona: '/api/onibus-zonas',
  locomocao: '/api/locomocoes',
  zona: '/api/zonas',

  // Schema: frutaria
  estoque: '/api/estoques',
  frutaria_produto: '/api/frutarias-produtos',

  // Schema: onibus
  item: '/api/itens',
  assento: '/api/assentos',
  passageiro: '/api/passageiros',
  passageiro_item: '/api/passageiros-itens',
  conversa_onibus: '/api/conversas-onibus',

  // Schema: parque-aquatico
  parque_aquatico_aluguel: '/api/parque-aquatico-aluguel',
  parque_aquatico_entrada: '/api/parque-aquatico-entrada',
  parque_aquatico_produto: '/api/parque-aquatico-produto',
  parque_aquatico_visita: '/api/parque-aquatico-visita',
  
  // Schema: sinuca
  ficha: '/api/fichas',
  sinuca: '/api/sinucas',
  sinuquista: '/api/sinuquistas',
  partida_sinuca: '/api/partidas-sinuca',
  aposta_partida: '/api/apostas-partidas',
  
  // Schema: casa
  area: '/api/areas',
  membro_familia: '/api/membros-familia',
  membro_rotina: '/api/membros-rotinas',
  parentesco: '/api/parentescos',
  rotina: '/api/rotinas',
  titulo: '/api/titulos',

  // Schema: quarto
  dono: '/api/donos',
  coordenada: '/api/coordenadas',
  quarto_relatorio: '/api/quartos-relatorios',
  objeto: '/api/objetos',
  objeto_coordenada: '/api/objetos-coordenadas',
  caracteristica: '/api/caracteristicas',
  dono_caracteristica: '/api/donos-caracteristicas',

  // Schema: exercicio
  origem: '/api/origens',
  ponto_turistico: '/api/pontos-turisticos',
  guia: '/api/guias',
  passeio: '/api/passeios',
  
  // Schema: turismo
  cor: '/api/cores',
  algo: '/api/algos',
  cor_algo: '/api/cores-algo',
  avistamento: '/api/avistamentos'
}

export function useScenarioData(tabelas: string[]) {
  const [dados, setDados] = useState<Record<string, TableRecord[]>>({})
  const [carregando, setCarregando] = useState(false)
  
  useEffect(() => {
    if (tabelas.length === 0) return

    let cancelado = false // evita atualizar estado se o componente já desmontou
    setCarregando(true)

    async function buscarTabelas() {
      const entradas = await Promise.all(
        tabelas.map(async (nomeTabela) => {
          const endpoint = ENDPOINTS[nomeTabela]
          if (!endpoint) return [nomeTabela, []] as const
          const res = await fetch(apiUrl(endpoint))
          const json = await res.json()
          return [nomeTabela, json] as const
        })
      )

      if (!cancelado) {
        setDados(Object.fromEntries(entradas))
        setCarregando(false)
      }
    }

    buscarTabelas()

    return () => { cancelado = true; }
  }, [tabelas])

  return { dados, carregando }
}
