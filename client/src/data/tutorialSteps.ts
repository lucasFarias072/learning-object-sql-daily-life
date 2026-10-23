

export type TutorialTargetKey =
  | 'assuntoSelect'
  | 'textoConsulta'
  | 'baseDeDados'
  | 'resourceQueryTools'
  | 'resourceConsole'
  | 'pConsoleFrame'
  | 'resourceBlocks'
  | 'pBlocksFrame'
  | 'blocks-area-mirror'
  | 'send-console-query'
  | 'send-console-query-test'
  | 'send-block-query'
  | 'send-console-query-preview'
  | 'send-console-query-text-hist'
  | 'user-query-notes'

export interface TutorialStep {
  instruction: string
  target: TutorialTargetKey | null
}

export const tutorialSteps: TutorialStep[] = [
    { instruction: 'Seja bem-vindo ao tutorial do módulo prático. Leia com atenção às instruções que aparecerão nessa área em questão, observe os itens em movimento em tela, siga às regras. Vamos prosseguir!.', target: null },
    { instruction: 'Diálogos que iniciarem com ⭐ indicam uma ou mais instruções pra você realizar e depois prosseguir. Caso não comece com isso, apenas leia e depois prossiga.', target: null },
    { instruction: 'No item em destaque, se encontram os assuntos SQL fixos disponíveis para todos os cenários. Isso é o gatilho gerador de consulta para você treinar.', target: 'assuntoSelect' },
    { instruction: '⭐ Clique na caixa de seleção em movimento e selecione o assunto **Demonstração**.', target: 'assuntoSelect' },
    { instruction: 'Ao escolher um assunto SQL, o enunciado da consulta escolhida aparecerá no local em destaque.', target: 'textoConsulta' },
    { instruction: 'As tabelas que envolvem a consulta, surgem nessa área, que serve de referência para montagem das consultas.', target: 'baseDeDados' },
    { instruction: 'O item em destaque, controla a disponibilidade dos recursos para fazer as consultas.', target: 'resourceQueryTools' },
    { instruction: 'O console de digitação é desabilitado/habilitado nessa área.', target: 'pConsoleFrame' },
    { instruction: 'Os blocos de ordenação são desabilitados/habilitados nessa área.', target: 'pBlocksFrame' },
    { instruction: '⭐ Ative o console de digitação, clicando no botão OFF.', target: 'pConsoleFrame' },
  
    { instruction: 'No console de digitação, a consulta é feita por meio de digitação livre.', target: 'resourceConsole' },
    { instruction: 'Adendo: apesar da digitação livre, o console de digitação tem a limitação de só poder executar uma consulta por vez.', target: 'resourceConsole' },
    { instruction: '⭐ Por esse motivo, existe o botão de anotações (em destaque e movimento). Clique uma vez para abrir o rascunho no canto superior direito.', target: 'user-query-notes' },
    { instruction: 'Nele você pode deixar blocos de consulta soltos para copiar e colar no console de digitação, ou apenas registrar pensamentos, conclusões. Em resumo, isso é um bloco de notas virtual.', target: 'user-query-notes' },
    { instruction: '⭐ Clique uma segunda vez para mover o rascunho para o canto inferior esquerdo.', target: 'user-query-notes' },
    { instruction: 'Utilidade: com o bloco de anotação do lado esquerdo, você pode usá-lo como guia de escrita, para não se perder quando for mexer nos blocos de ordenação e registrar seus passos.', target: 'user-query-notes' },
    { instruction: '⭐ Agora clique uma terceira vez para esconder o rascunho e podermos prosseguir com o tutorial.', target: 'user-query-notes' },
    { instruction: 'Agora usaremos a área do console de digitação (área retangular gradiente em destaque e movimento).', target: 'resourceConsole' },
    { instruction: '⭐ Digite a consulta: SELECT * FROM STAKEHOLDER;.', target: 'resourceConsole' },

    { instruction: '⭐ O botão **consulta pessoal** envia sua consulta e retorna o resultado dela. Clique nesse botão e veja o resultado (clique no X para fechar a janela ou em um lugar fora da janela).', target: 'send-console-query-test'},
    { instruction: 'O botão **consulta pessoal** é usado para tirar dúvidas sobre as tabelas e consulta que se quer resolver. Use-o quantas vezes precisar.', target: 'send-console-query-test'},
    { instruction: '⭐ O botão **consulta bonita** exibe sua consulta em sintaxe colorida, para maior legibilidade. Clique nesse botão e veja o resultado (clique no X para fechar a janela ou em um lugar fora da janela).', target: 'send-console-query-preview'},
    { instruction: 'O botão **consulta histórico** mostra as últimas consultas feitas (precisa ter feito alguma), serve de memória temporária pro usuário.', target: 'send-console-query-text-hist'},
    { instruction: '⭐ Se já tiver usado o botão de **consulta pessoal**, use agora o botão **consulta histórico** e leia as informações em tela (clique no X para fechar a janela ou em um lugar fora da janela).', target: 'send-console-query-text-hist'},
    { instruction: 'O botão **enviar** é o botão de envio oficial, é ele que se usa quando estiver preparado para enviar uma resposta à consulta pedida.', target: 'send-console-query'},
    { instruction: 'Sua disponibilidade para clique só acontece se existir uma consulta mínima escrita dentro do console de digitação (um select, um campo, um from, uma tabela).', target: 'send-console-query'},

    // Teste de feedback da consulta pelo console de digitação
    { instruction: 'Primeiro, vamos testar o envio real de consulta pelo console de digitação (começando pelo teste de erro de sintaxe).', target: null},
    { instruction: '⭐ Digite ou altere a consulta para: SELECT * FROM STAKEHOLDERR;.', target: 'resourceConsole'},
    { instruction: '⭐ Clique no botão **enviar** em destaque e movimento.', target: 'send-console-query'},
    { instruction: 'Você deve ter visto uma observação em amarelo na parte de cima da tela. Isso indica um erro de sintaxe na consulta que precisa ser corrigido.', target: null},
    { instruction: '⭐ O erro refere-se à tabela mencionada não existir, apenas retire o último "r" do nome da tabela, que deve resolver.', target: null},
    { instruction: '⭐ Ou se preferir, ao invés de retirar o "r", pode digitar a consulta: SELECT * FROM STAKEHOLDER;.', target: 'resourceConsole'},
    { instruction: '⭐ Clique no botão **enviar** em destaque e movimento e observe o feedback em tela.', target: 'send-console-query'},
    { instruction: 'Você deve ter visto algo do tipo [ correto 🔥😎👍 ]. Isso indica que você fez aquilo que a consulta pede, portanto, você acertou.', target: null},
    { instruction: '⭐ Volte aos assuntos SQL (em destaque e movimentando em tela). Selecione novamente o assunto **Demonstração** para voltarmos à consulta de antes.', target: 'assuntoSelect' },
    { instruction: '⭐ Ative o console de digitação novamente, clicando no botão OFF em destaque, pois iremos testar o feedback de erro.', target: 'pConsoleFrame' },
    { instruction: '⭐ Digite a consulta: SELECT ESTADO_MENTAL FROM STAKEHOLDER;.', target: 'resourceConsole' },
    { instruction: '⭐ Clique no botão **enviar** em destaque e movimento e observe o feedback em tela.', target: 'send-console-query'},
    { instruction: 'Você deve ter visto algo do tipo [ tenta de novo 😳 ]. Isso indica que você não forneceu o que a consulta queria, a consulta está incorreta.', target: null },
    { instruction: '⭐ A correção é basicamente não botar nenhum campo específico, apenas o asterísco, isso resolve o que a consulta quer. Troque "estado_mental" por um *.', target: 'resourceConsole' },
    { instruction: '⭐ Clique no botão **enviar** em destaque e movimento e observe o feedback em tela.', target: 'send-console-query'},
    { instruction: 'Esse foi o treino de reconhecimento do console de digitação.', target: null},
    { instruction: 'Vamos agora ao treino de reconhecimento dos blocos de ordenação.', target: null},

    // Teste de feedback da consulta pelo bloco de ordenação
    { instruction: '⭐ Clique na caixa de seleção em movimento (assuntos SQL) e selecione o assunto **Demonstração**.', target: 'assuntoSelect' },
    { instruction: '⭐ Ative os blocos de ordenação, clicando no botão OFF.', target: 'pBlocksFrame' },
    { instruction: 'A região em destaque e movimento, mostra o recurso: Blocos de ordenação. Ele mostra pedaços embaralhados de uma consulta, para que você encontre a ordenação correta da resposta.', target: 'resourceBlocks' },
    { instruction: 'A consulta que você vê, é uma versão correta da consulta pedida, então terá que achar a consulta correta de acordo com essa versão, somente.', target: 'resourceBlocks' },
    { instruction: 'Existirão consultas grandes, por isso, as células possuem uma divisão de cores. Vamos explicar a seguir.', target: 'resourceBlocks' },
    { instruction: 'As sintaxes SQL nativas ficam na cor branca, as células em cor salmão mostram textos iniciais da resposta, as em amarelo mostram textos centrais e as azuis mostram textos finais.', target: 'resourceBlocks' },
    { instruction: 'Elas servirão como guia para caso esteja perdido. Use as cores como guia, mas as sintaxes SQL em branco podem estar em **qualquer lugar**, caberá à você descobrir onde.', target: 'resourceBlocks' },
    { instruction: 'A interação com esse recurso é basicamente por clique. Você clica numa célula/palavra e ela será transportada para o bloco de ordenação espelhado, que fica na parte superior direita da tela.', target: 'resourceBlocks' },
    { instruction: '⭐ Clique numa célula/palavra de dentro dos blocos de ordenação, para ver essa interação.', target: 'resourceBlocks' },
    { instruction: '⭐ Como pode notar, o bloco de ordenação espelhado recebe a célula que foi clicada. Com ela acontece a mesma interação, você clica na célula e ela retorna pros blocos de ordenação abaixo. Tente isso.', target: 'blocks-area-mirror' },
    { instruction: 'Agora que sabe disso, vamos testar a montagem da consula pelos blocos de ordenação.', target: null },
    { instruction: 'Adendo: você sabe que a interação é por clique, portanto, para resolver uma consulta pelos blocos de ordenção, você deve passar todas as células do bloco de ordenação para o bloco espelhado.', target: null },
    { instruction: 'Ao fazer isso, o botão **enviar** de dentro do recurso dos blocos de ordenação, se tornará acessível para clique.', target: 'send-block-query' },
    { instruction: 'Os blocos de ordenação dificilmente trarão feedback de erro, pois a ordenação precisa ser exata.', target: null },
    { instruction: 'O erro provável será o erro de sintaxe, resultante da ordenação incorreta, que gerará mensagem em amarelo na parte de cima da tela. Resposta correta receberá feedback [ correto 🔥😎👍 ].', target: null },
    { instruction: '⭐ Ordene a consulta de acordo com o enunciado (lembre-se das cores como guia, observe as colunas de cada tabela em tela). Clique no botão **enviar** quando disponível (assim que passar todas as células).', target: 'textoConsulta' },
    { instruction: 'Esse foi o treino de reconhecimento dos blocos de ordenação.', target: null},
    { instruction: 'Você agora conhece toda a mecânica do módulo prático. Isso se repete em todos os cenários que você praticar. Boa sorte e bons treinos 😎👍!.', target: null},
]
