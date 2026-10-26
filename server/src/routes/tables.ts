import { Router } from 'express'
import { sqlDailyLifeDB } from '../db/database.js'

const router = Router()

router.get('/scenarios/table/:scenario', (_req, res) => {
  const {scenario} = _req.params;
  const dados = sqlDailyLifeDB.prepare("select table_name, alias from relationship where scenario_name = ?;").all(scenario)
  res.json(dados);
})

router.get('/scenarios/column/:table_name', (_req, res) => {
  const {table_name} = _req.params;
  const dados = sqlDailyLifeDB.prepare(`
  select distinct r.alias, table_field from relationship_column rc
  join relationship r on r.rel_id = rc.rel_fk
  where table_name = ?;`).all(table_name.split(" ")[0])
  res.json(dados);
})

router.get('/relationships', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare("select rel_id, scenario_name, table_name, alias from relationship").all()
  res.json(dados);
})

router.get('/stakeholders', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare("select criador_id, nomenclatura, nascimento, comida_favorita, estado_mental, contribuicao from stakeholder").all()
  res.json(dados);
})

// Coluna omitida: aposta_id
router.get('/apostas-partidas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT partida_sinuca_fk, sinuquista_fk_apostado FROM aposta_partida').all()
  res.json(dados)
})

router.get('/assentos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT assento_id, assento_credencial, estado FROM assento ORDER BY assento_credencial').all()
  res.json(dados)
})

router.get('/cenarios', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT cenario_id, descricao_cenario, alias FROM cenario ORDER BY descricao_cenario').all()
  res.json(dados)
})

router.get('/conversas-onibus', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT interacao_id, pessoa_x, pessoa_y FROM conversa_onibus ORDER BY interacao_id').all()
  res.json(dados)
})

router.get('/estoques', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT estoque_id, frutaria_produto_fk, qtd FROM estoque ORDER BY qtd').all()
  res.json(dados)
})

router.get('/fichas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT ficha_id, valor, partidas_seguidas FROM ficha ORDER BY ficha_id').all()
  res.json(dados)
})

router.get('/frutarias-produtos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT frutaria_produto_id, local_fprod_fk, preco_atual_kg, peso_medio_unid_grama, descricao_fruta FROM frutaria_produto ORDER BY descricao_fruta').all()
  res.json(dados)
})

router.get('/itens', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT item_id, descricao_item FROM item ORDER BY descricao_item').all()
  res.json(dados)
})

router.get('/locais', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT local_id, local_tipo_fk, cenario_fk, descricao_local FROM local ORDER BY descricao_local').all()
  res.json(dados)
})

router.get('/locais-tipos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT local_tipo_id, descricao_local_tipo FROM local_tipo ORDER BY descricao_local_tipo').all()
  res.json(dados)
})

// Coluna omitida: pa_aluguel_id
router.get('/parque-aquatico-aluguel', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT paa_entrada_fk, pa_produto_fk FROM parque_aquatico_aluguel').all()
  res.json(dados)
})

router.get('/parque-aquatico-entrada', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT pa_entrada_id, esta_socio, dia, hora_entrada FROM parque_aquatico_entrada ORDER BY pa_entrada_id').all()
  res.json(dados)
})

router.get('/parque-aquatico-produto', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT pa_produto_id, chegada, descricao_pap FROM parque_aquatico_produto ORDER BY descricao_pap').all()
  res.json(dados)
})

router.get('/parque-aquatico-visita', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT pa_visita_id, local_pav_fk, pav_entrada_fk, hora_visita FROM parque_aquatico_visita ORDER BY pa_visita_id').all()
  res.json(dados)
})

router.get('/partidas-sinuca', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT partida_sinuca_id, sinuca_fk, ficha_fk, sinuquista_fk_dono_ficha, sinuquista_fk_desafiante, vitorioso, dono_bolas, desafiante_bolas, bola_branca, duracao_seg FROM partida_sinuca ORDER BY partida_sinuca_id').all()
  res.json(dados)
})

router.get('/passageiros', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT passageiro_id, assento_fk, peso_kg, altura_cm FROM passageiro ORDER BY assento_fk').all()
  res.json(dados)
})

// Coluna omitida: passageiro_item_id
router.get('/passageiros-itens', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT passageiro_fk, item_fk FROM passageiro_item').all()
  res.json(dados)
})

router.get('/pessoas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT pessoa_id, local_pess_fk, nome, eh_estrangeiro, qtd_paises_conhecidos, origem_fk FROM pessoa ORDER BY nome').all()
  res.json(dados)
})

// ---------------------------------------------------- !@# Ponto de ônibus ----------------------------------------------------
router.get('/locomocoes', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('select loc_id, onibus_loc_fk, local_loc_fk, lotacao, horario_loc from locomocao order by onibus_loc_fk').all()
  res.json(dados)
})

router.get('/onibus-veiculos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('select onibus_id, onibus_n from onibus_veiculo order by onibus_n').all()
  res.json(dados)
})

// Coluna omitida: oz_id
router.get('/onibus-zonas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('select zona_fk, onibus_fk FROM onibus_zona').all()
  res.json(dados)
})

router.get('/semaforos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT semaforo_id, local_sem_fk, luz, duracao_cor_vermelha, duracao_cor_verde FROM semaforo order by local_sem_fk').all()
  res.json(dados)
})

router.get('/zonas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('select zona_id, descricao_zona FROM zona order by descricao_zona').all()
  res.json(dados)
})

// ---------------------------------------------------- !@# Sinuca ----------------------------------------------------
router.get('/sinucas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT sinuca_id, descricao_sinuca, tamanho FROM sinuca ORDER BY sinuca_id').all()
  res.json(dados)
})

router.get('/sinuquistas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT sinuquista_id, sinuca_fk_favorita, nome_sinuquista, apelido FROM sinuquista ORDER BY nome_sinuquista').all()
  res.json(dados)
})

// ---------------------------------------------------- !@# Casa ----------------------------------------------------
router.get('/areas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT area_id, descricao_area, tipo_area FROM area ORDER BY descricao_area').all()
  res.json(dados)
})

router.get('/membros-familia', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT membro_id, nome_membro FROM membro_familia ORDER BY nome_membro').all()
  res.json(dados)
})

router.get('/membros-rotinas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT membro_rotina_id, membro_fk, rotina_fk, area_fk FROM membro_rotina ORDER BY membro_rotina_id').all()
  res.json(dados)
})

router.get('/parentescos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT parentesco_id, membro_fk_de, membro_fk_para, titulo_fk FROM parentesco ORDER BY parentesco_id').all()
  res.json(dados)
})

router.get('/rotinas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT rotina_id, descricao_rotina FROM rotina ORDER BY descricao_rotina').all()
  res.json(dados)
})

router.get('/titulos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT titulo_id, descricao_titulo FROM titulo ORDER BY titulo_id').all()
  res.json(dados)
})

// ---------------------------------------------------- !@# Quarto ----------------------------------------------------
router.get('/donos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT dono_id, codinome FROM dono ORDER BY codinome').all()
  res.json(dados)
})

router.get('/coordenadas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT coordenada_id, descricao_coord FROM coordenada ORDER BY descricao_coord').all()
  res.json(dados)
})

router.get('/quartos-relatorios', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT quarto_id, dono_fk, mes_adesao, ano_adesao, objeto_fk_comprado_ultimo, suite, suite_qtd FROM quarto_relatorio ORDER BY ano_adesao').all()
  res.json(dados)
})

router.get('/objetos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT objeto_id, descricao_objeto FROM objeto ORDER BY descricao_objeto').all()
  res.json(dados)
})

router.get('/objetos-coordenadas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT coord_id, objeto_fk_alvo, objeto_fk_ref, dono_fk, coordenada_fk FROM objeto_coordenada ORDER BY dono_fk').all()
  res.json(dados)
})

router.get('/caracteristicas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT caract_id, descricao_caract FROM caracteristica ORDER BY descricao_caract').all()
  res.json(dados)
})

// Coluna omitida: dc_id
router.get('/donos-caracteristicas', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT dono_fk, caract_fk FROM dono_caracteristica').all()
  res.json(dados)
})

// ---------------------------------------------------- !@# Turismo ----------------------------------------------------
router.get('/origens', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT origem_id, descricao_origem FROM origem ORDER BY descricao_origem').all()
  res.json(dados)
})

router.get('/pontos-turisticos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT ponto_id, descricao_ponto, avaliacao FROM ponto_turistico ORDER BY descricao_ponto').all()
  res.json(dados)
})

router.get('/guias', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT guia_id, pessoa_fk, sigla_estado, expediente FROM guia ORDER BY sigla_estado').all()
  res.json(dados)
})

router.get('/passeios', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT passeio_id, guia_fk, pessoa_fk, ponto_fk, avaliacao_guia, indicacao_nota FROM passeio ORDER BY ponto_fk').all()
  res.json(dados)
})

// ---------------------------------------------------- !@# Exercicio ----------------------------------------------------
router.get('/cores', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT cor_id, descricao_cor FROM cor ORDER BY descricao_cor').all()
  res.json(dados)
})

router.get('/algos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT algo_id, descricao_algo, natureza FROM algo ORDER BY descricao_algo').all()
  res.json(dados)
})

// Coluna omitida: cor_algo_id
router.get('/cores-algo', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT cor_fk, algo_fk FROM cor_algo').all()
  res.json(dados)
})

router.get('/avistamentos', (_req, res) => {
  const dados = sqlDailyLifeDB.prepare('SELECT vista_id, membro_visto_fk, algo_visto_fk, local_tipo_visto_fk, hora_visto FROM avistamento ORDER BY local_tipo_visto_fk').all()
  res.json(dados)
})

export const tablesRouter = router