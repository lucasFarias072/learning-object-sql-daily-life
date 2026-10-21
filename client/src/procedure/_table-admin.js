

const scenarioTables = [
    // Casa
    {"where": 1, "tab": 'area'},
    {"where": 2, "tab": 'membro_familia'},
    {"where": 3, "tab": 'membro_rotina'},
    {"where": 4, "tab": 'parentesco'},
    {"where": 5, "tab": 'rotina'},
    {"where": 6, "tab": 'titulo'},
    
    // Frutaria
    {"where": 7, "tab": 'cenario'},
    {"where": 8, "tab": 'local_tipo'},
    {"where": 9, "tab": 'local'},
    {"where": 10, "tab": 'pessoa'},
    {"where": 11, "tab": 'frutaria_produto'},
    {"where": 12, "tab": 'estoque'},

    // Ônibus
    {"where": 13, "tab": 'item'}, 
    {"where": 14, "tab": 'assento'}, 
    {"where": 15, "tab": 'passageiro'}, 
    {"where": 16, "tab": 'passageiro_item'}, 
    {"where": 17, "tab": 'conversa_onibus'}, 
    
    // Parque Aquático (inclui implícito: 7, 8, 9)
    {"where": 18, "tab": 'parque_aquatico_entrada'},
    {"where": 19, "tab": 'parque_aquatico_produto'},
    {"where": 20, "tab": 'parque_aquatico_visita'},
    {"where": 21, "tab": 'parque_aquatico_aluguel'}, 

    // Ponto de Ônibus (inclui implícito: 7, 8, 9, 10)
    {"where": 22, "tab": 'semaforo'},
    {"where": 43, "tab": 'locomocao'},
    {"where": 44, "tab": 'onibus_veiculo'},
    {"where": 45, "tab": 'zona'},
    {"where": 46, "tab": 'onibus_zona'},

    // Sinuca
    {"where": 23, "tab": 'ficha'}, 
    {"where": 24, "tab": 'sinuca'}, 
    {"where": 25, "tab": 'sinuquista'}, 
    {"where": 26, "tab": 'partida_sinuca'}, 
    {"where": 27, "tab": 'aposta_partida'},
    
    // Quarto
    {"where": 28, "tab": 'coordenada'}, 
    {"where": 29, "tab": 'dono'}, 
    {"where": 30, "tab": 'objeto'}, 
    {"where": 31, "tab": 'objeto_coordenada'}, 
    {"where": 32, "tab": 'quarto_relatorio'},
    {"where": 33, "tab": 'caracteristica'},
    {"where": 34, "tab": 'dono_caracteristica'},

    // Turismo
    {"where": 35, "tab": 'origem'},
    {"where": 36, "tab": 'ponto_turistico'},
    {"where": 37, "tab": 'guia'},
    {"where": 38, "tab": 'passeio'},
    
    // Exercício
    {"where": 39, "tab": 'cor'},
    {"where": 40, "tab": 'algo'},
    {"where": 41, "tab": 'cor_algo'},
    {"where": 42, "tab": 'avistamento'},
]

const scenarioTablesColumns = [
    // Casa
    {"where": 1, "cols": ["area_id", "descricao_area", "tipo_area"],},
    {"where": 2, "cols": ["membro_id", "nome_membro"]},
    {"where": 3, "cols": ["membro_rotina_id", "membro_fk", "rotina_fk", "area_fk"]},
    {"where": 4, "cols": ['parentesco_id', 'membro_fk_de', 'membro_fk_para', 'titulo_fk']},
    {"where": 5, "cols": ["rotina_id", "descricao_rotina"]},
    {"where": 6, "cols": ['titulo_id', 'descricao_titulo']},

    // Frutaria
    {"where": 7, "cols": ['cenario_id', 'descricao_cenario']},
    {"where": 8, "cols": ['local_tipo_id', 'descricao_local_tipo']},
    {"where": 9, "cols": ['local_id', 'local_tipo_fk', 'cenario_fk', 'descricao_local']},
    {"where": 10, "cols": ['pessoa_id', 'local_pess_fk', 'nome']},
    {"where": 11, "cols": ['frutaria_produto_id', 'local_fprod_fk', 'preco_atual_kg', 'peso_medio_unid_grama', 'descricao_fruta']},
    {"where": 12, "cols": ['estoque_id', 'frutaria_produto_fk', 'qtd']},

    // Ônibus
    {"where": 13, "cols": ['item_id', 'descricao_item']},
    {"where": 14, "cols": ['assento_id', 'assento_credencial', 'estado']},
    {"where": 15, "cols": ['passageiro_id', 'assento_fk', 'peso_kg', 'altura_cm']},
    {"where": 16, "cols": ['passageiro_item_id', 'passageiro_fk', 'item_fk']},
    {"where": 17, "cols": ['interacao_id', 'pessoa_x', 'pessoa_x']},

    // Parque Aquático
    {"where": 18, "cols": ["pa_entrada_id", "esta_socio", "dia", "hora_entrada"]},
    {"where": 19, "cols": ["pa_produto_id", "chegada", "descricao_pap"]},
    {"where": 20, "cols": ["pa_visita_id", "local_pav_fk", "pav_entrada_fk", "hora_entrada"]},
    {"where": 21, "cols": ["pa_aluguel_id", "paa_entrada_fk", "pa_produto_fk"]}, 

    // Ponto de Ônibus
    {"where": 22, "cols": ['semaforo_id', 'local_sem_fk', 'luz', 'duracao_cor_vermelha', 'duracao_cor_verde']},
    {"where": 43, "cols": ['loc_id', 'onibus_loc_fk', 'local_loc_fk', 'lotacao', 'horario_loc']},
    {"where": 44, "cols": ['onibus_id', 'onibus_n']},
    {"where": 45, "cols": ['zona_id', 'descricao_zona']},
    {"where": 46, "cols": ['oz_id', 'zona_fk', 'onibus_fk']},

    // Sinuca
    {"where": 23, "cols": ["ficha_id", "valor", "partidas_seguidas"]}, 
    {"where": 24, "cols": ["sinuca_id", "descricao_sinuca", "tamanho"]}, 
    {"where": 25, "cols": ["sinuquista_id", "sinuca_fk_favorita", "nome_sinuquista", "apelido"]}, 
    {"where": 26, "cols": ["partida_sinuca_id", "sinuca_fk", "ficha_fk", "sinuquista_fk_dono_ficha", "sinuquista_fk_desafiante", "vitorioso", "dono_bolas", "desafiante_bolas", "bola_branca", "duracao_seg"]}, 
    {"where": 27, "cols": ["aposta_id", "partida_sinuca_fk", "sinuquista_fk_apostado"]},
    
    // Quarto
    {"where": 28, "cols": ['coordenada_id', 'descricao_coord']}, 
    {"where": 29, "cols": ['dono_id', 'codinome']}, 
    {"where": 30, "cols": ['objeto_id', 'descricao_objeto']}, 
    {"where": 31, "cols": ['coord_id', 'objeto_fk_alvo', 'objeto_fk_ref', 'dono_fk', 'coordenada_fk']},
    {"where": 32, "cols": ['quarto_id', 'dono_fk', 'mes_adesao', 'ano_adesao', 'objeto_fk_comprado_ultimo', 'suite', 'suite_qtd']}, 
    {"where": 33, "cols": ['caract_id', 'descricao_caract']},
    {"where": 34, "cols": ['dc_id', 'dono_fk', 'caract_fk']},

    // Turismo
    {"where": 35, "cols": ['origem_id', 'descricao_origem']},
    {"where": 36, "cols": ['ponto_id', 'descricao_ponto', 'avaliacao']},
    {"where": 37, "cols": ['guia_id', 'pessoa_fk', 'sigla_estado', 'expediente']},
    {"where": 38, "cols": ['passeio_id', 'guia_fk', 'pessoa_fk', 'ponto_fk', 'avaliacao_guia', 'indicacao_nota']},

    // Exercicio
    {"where": 39, "cols": ['cor_id', 'descricao_cor']},
    {"where": 40, "cols": ['algo_id', 'descricao_algo']},
    {"where": 41, "cols": ['cor_algo_id', 'cor_fk', 'algo_fk']},
    {"where": 42, "cols": ['vista_id', 'membro_visto_fk', 'algo_visto_fk', 'local_tipo_visto_fk', 'hora_visto']}
]

const lookingFor = [
    "", "quarto_relatorio"
]

const ids = []
for (let i = 0; i < lookingFor.length; i++) {
    ids.push(scenarioTables.find(table => table.tab === lookingFor[i]))
}

console.log(ids)
