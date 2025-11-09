import { Race, Magic } from './types.ts';

export const RACES: Race[] = [
  {
    name: "Humano",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/c2f34e6a-ecda-4cb3-a540-3aa395239701.png"
  },
  {
    name: "Elfo",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/7c924f9b-c617-4bc2-895f-db8191e2bd4c.png"
  },
  {
    name: "Anão",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/4906b980-489f-4c95-be8a-f21d800c98aa.png"
  },
  {
    name: "Halfling",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/b099862d-3a68-4bc1-a681-d40d8a6ad71b.png"
  },
  {
    name: "Orc",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/b20eff7f-8f5a-42a7-9356-e922eabcb225.png"
  },
  {
    name: "Meio-elfo",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/63295655-cf05-4d7c-aa76-fa1fa89416ee.png"
  },
  {
    name: "Gnomo",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/8b8ea004-3be7-4a6d-93af-266c15868421.png"
  },
  {
    name: "Tiefling",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/317c4654-eedf-400f-9d0d-011cef016080.png"
  },
  {
    name: "Draconato",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/c1e1ebaf-7858-4ca0-9e7f-89da8d8acd21.png"
  },
  {
    name: "Goblin civilizado",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/f71a2097-0822-4d66-a575-e27e13bc27ce.png"
  },
  {
    name: "Felino antropomórfico",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/e6630a48-a8d1-40d8-8bf2-b83c34afa046.png"
  },
  {
    name: "Minotauro",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/389cb12c-5a97-42e2-afd7-5fc2870d8ea8.png"
  },
  {
    name: "Espreitador das Sombras",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/5620b22e-fc3c-4a17-a5c1-caea0297ee97.png"
  }
];

export const MAGICS: Magic[] = [
  {
    name: "Raio de Sol",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/34d081a0-0559-44e5-9204-087640f2821f.png",
    summary: "Conjura um feixe de luz solar concentrada que cega e queima alvos. É uma magia de nível básico, especialmente poderosa contra criaturas da noite e mortos-vivos, mas que exige um momento de concentração para ser utilizada.",
    advantages: [
      "Cega oponentes temporariamente, dando uma vantagem tática ao conjurador e seus aliados.",
      "Causa dano extra a mortos-vivos e criaturas sombrias.",
      "Pode ser usado para iluminar áreas com o equivalente à luz solar natural."
    ],
    powers: "Ao ser conjurada, a magia dispara um raio de luz ofuscante em linha reta a partir do conjurador. Alvos na trajetória devem fazer um teste de Vigor para não ficarem cegos por 1 turno. O raio causa dano de luz sagrada.",
    disadvantages: [
      "É completamente ineficaz em ambientes já sob luz solar direta.",
      "O feixe de luz é extremamente chamativo e revela a posição exata do conjurador."
    ],
    damage: "(Inteligência x 2) + 8",
    mpCost: "10",
    castingTurns: 2,
    range: "10 metros em linha reta",
    purchasePoints: 8,
    raceBonuses: [
      { race: "Elfo", modifier: "Bônus de -3 Pontos (Custo final: 5)" },
      { race: "Humano", modifier: "Bônus de -1 Ponto (Custo final: 7)" },
      { race: "Tiefling", modifier: "Penalidade de +4 Pontos (Custo final: 12)" },
      { race: "Espreitador das Sombras", modifier: "Penalidade de +5 Pontos (Custo final: 13)" }
    ]
  },
  {
    name: "Chama Arcana",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/836b044f-11a9-4b29-971b-ff1e53ed7f51.png",
    summary: "O conjurador canaliza energia pura do plano elemental do fogo, moldando-a em uma esfera instável que explode ao seu comando. É uma magia de área, ideal para controlar grupos de inimigos, mas perigosa se usada sem o devido cuidado.",
    advantages: [
      "Causa dano em área, atingindo múltiplos alvos.",
      "Deixa alvos em chamas, causando dano contínuo por 2 turnos.",
      "Pode incendiar objetos inflamáveis no ambiente."
    ],
    powers: "Cria uma explosão de fogo em um raio de 3 metros a partir do ponto de impacto. Todos na área sofrem dano de fogo e devem passar em um teste de Vigor ou ficarão em chamas, sofrendo 5 de dano de fogo por turno durante 2 turnos.",
    disadvantages: [
      "Atinge todos na área de efeito, incluindo aliados.",
      "Exige um tempo de conjuração relativamente longo, deixando o mago vulnerável."
    ],
    damage: "(Inteligência x 2) + 10",
    mpCost: "15",
    castingTurns: 3,
    range: "Pode ser lançada a até 15 metros de distância.",
    purchasePoints: 12,
    raceBonuses: [
      { race: "Tiefling", modifier: "Bônus de -4 Pontos (Custo final: 8)" },
      { race: "Gnomo", modifier: "Bônus de -2 Pontos (Custo final: 10)" },
      { race: "Anão", modifier: "Penalidade de +3 Pontos (Custo final: 15)" }
    ]
  },
  {
    name: "Escudo Mágico Menor",
    imageUrl: "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/9998d910-20c5-492a-94aa-a47d8bf3f1b4.png",
    summary: "Uma magia defensiva básica que cria uma barreira translúcida de energia arcana em volta do conjurador. É um feitiço rápido e de baixo custo, perfeito para bloquear um ataque inesperado.",
    advantages: [
      "Conjuração instantânea (1 turno).",
      "Custo de mana muito baixo.",
      "Pode ser a diferença entre a vida e a morte contra um golpe forte."
    ],
    powers: "O conjurador cria um escudo de energia que absorve o próximo ataque físico ou mágico. O escudo se dissipa após absorver um único golpe, independentemente do dano.",
    disadvantages: [
      "Só protege contra um único ataque.",
      "Não oferece proteção contínua.",
      "O escudo é visível e denuncia que o conjurador está usando magia defensiva."
    ],
    damage: "Nenhum",
    mpCost: "2",
    castingTurns: 1,
    range: "Apenas no próprio conjurador.",
    purchasePoints: 3,
    raceBonuses: [
      { race: "Gnomo", modifier: "Bônus de -2 Pontos (Custo final: 1)" },
      { race: "Humano", modifier: "Bônus de -1 Ponto (Custo final: 2)" },
      { race: "Orc", modifier: "Penalidade de +2 Pontos (Custo final: 5)" },
      { race: "Minotauro", modifier: "Penalidade de +3 Pontos (Custo final: 6)" }
    ]
  },
  {
    name: "Toque Curativo",
    imageUrl: "https://live.staticflickr.com/65535/54911524856_8409720b1b_n.jpg",
    summary: "Conjura energia positiva de suas mãos para fechar ferimentos e aliviar a dor de um aliado. É uma magia de cura fundamental, rápida e eficiente para recuperação em e fora de combate.",
    advantages: [
      "Cura instantânea e confiável.",
      "Custo de mana muito baixo, permitindo múltiplos usos.",
      "Pode ser usada em si mesmo ou em um aliado adjacente."
    ],
    powers: "Ao tocar um alvo (incluindo a si mesmo), o conjurador restaura uma quantidade de Pontos de Vida igual a (Inteligência x 2) + 5.",
    disadvantages: [
      "Requer contato físico, o que pode ser perigoso durante o combate.",
      "Não remove condições negativas como veneno, doença ou maldições.",
      "A cura é modesta e pode ser insuficiente contra danos massivos."
    ],
    damage: "Nenhum (efeito de cura)",
    mpCost: "3",
    castingTurns: 1,
    range: "Toque",
    purchasePoints: 4,
    raceBonuses: [
      { race: "Elfo", modifier: "Bônus de -2 Pontos (Custo final: 2)" },
      { race: "Humano", modifier: "Bônus de -1 Ponto (Custo final: 3)" },
      { race: "Tiefling", modifier: "Penalidade de +2 Pontos (Custo final: 6)" },
      { race: "Orc", modifier: "Penalidade de +3 Pontos (Custo final: 7)" }
    ]
  },
  {
    name: "Passo Fantasma",
    imageUrl: "https://live.staticflickr.com/65535/54911819155_cd74141252_n.jpg",
    summary: "Uma magia de ilusão menor que abafa o som dos passos do conjurador e borra levemente sua silhueta nas sombras. É um feitiço rápido, ideal para batedores que precisam de uma vantagem momentânea para se reposicionar ou evitar detecção.",
    advantages: [
      "Excelente para infiltração e espionagem.",
      "Custo de mana muito baixo, permitindo uso frequente.",
      "Conjuração rápida."
    ],
    powers: "Concede ao conjurador um bônus de +2 em testes da perícia Furtividade por 3 turnos. Este bônus se aplica tanto para se mover em silêncio quanto para se esconder.",
    disadvantages: [
      "Duração muito curta.",
      "O efeito é quebrado imediatamente se o conjurador realizar uma ação agressiva (como atacar ) ou conjurar outra magia.",
      "Não torna o conjurador invisível, apenas mais difícil de notar."
    ],
    damage: "Nenhum",
    mpCost: "2",
    castingTurns: 1,
    range: "Apenas no próprio conjurador.",
    purchasePoints: 3,
    raceBonuses: [
      { race: "Espreitador das Sombras", modifier: "Bônus de -2 Pontos (Custo final: 1)" },
      { race: "Goblin Civilizado", modifier: "Bônus de -1 Ponto (Custo final: 2)" },
      { race: "Halfling", modifier: "Bônus de -1 Ponto (Custo final: 2)" },
      { race: "Draconato", modifier: "Penalidade de +2 Pontos (Custo final: 5)" },
      { race: "Minotauro", modifier: "Penalidade de +2 Pontos (Custo final: 5)" }
    ]
  },
  {
    name: "Luz Guia",
    imageUrl: "https://live.staticflickr.com/65535/54911765999_03a829c7c1_n.jpg",
    summary: "O conjurador cria uma pequena esfera de luz que flutua e segue o alvo, iluminando uma área como uma tocha. É uma magia prática e de baixo custo, perfeita para explorar ambientes escuros ou sinalizar posições.",
    advantages: [
      "Fornece iluminação contínua sem a necessidade de segurar uma tocha.",
      "Custo de mana extremamente baixo, pode ser mantida por longos períodos.",
      "Pode ser direcionada para seguir qualquer personagem ou objeto à vista."
    ],
    powers: "Conjura uma esfera de luz que ilumina um raio de 5 metros com luz plena e 10 metros com luz penumbrosa. A esfera pode ser comandada para flutuar e seguir o conjurador, um aliado ou um objeto especificado. Dura até ser dissipada pelo conjurador ou até que o conjurador perca a concentração (por exemplo, ao sofrer dano) ou se afaste muito (mais de 30 metros).",
    disadvantages: [
      "Não causa dano e não tem efeito em combate (exceto para iluminação).",
      "A luz é visível e pode revelar a posição do grupo.",
      "Em locais muito iluminados, o efeito é quase imperceptível."
    ],
    damage: "Nenhum",
    mpCost: "1 (para conjurar, e 1 por hora para manter, se o mestre considerar necessário para longas durações)",
    castingTurns: 1,
    range: "15 metros",
    purchasePoints: 2,
    raceBonuses: [
        { race: "Gnomo", modifier: "Bônus de -1 Ponto (Custo final: 1)"},
        { race: "Humano", modifier: "Bônus de -1 Ponto (Custo final: 1)"},
        { race: "Elfo", modifier: "Bônus de -1 Ponto (Custo final: 1)"},
        { race: "Goblin Civilizado", modifier: "Penalidade de +2 Pontos (Custo final: 4)"},
        { race: "Draconato", modifier: "Penalidade de +2 Pontos (Custo final: 4)"}
    ]
  },
  {
    name: "Mãos Flamejantes",
    imageUrl: "https://live.staticflickr.com/65535/54910647097_2620dfe3bf_n.jpg",
    summary: "O conjurador projeta chamas de suas mãos, criando um cone de fogo que atinge inimigos próximos. É uma magia de ataque de área de curto alcance, eficaz para dispersar grupos ou causar dano rápido em múltiplos alvos.",
    advantages: [
      "Causa dano em área em um cone frontal.",
      "Ótima para controle de multidão em distâncias curtas.",
      "O dano é imediato e potente."
    ],
    powers: "O conjurador libera um cone de chamas de 5 metros de comprimento e 3 metros de largura na base, vindo de suas mãos. Inimigos dentro da área de efeito sofrem dano de fogo e devem fazer um teste de Destreza para reduzir o dano pela metade. Objetos inflamáveis na área podem pegar fogo.",
    disadvantages: [
      "Curto alcance, exigindo que o conjurador esteja próximo dos inimigos.",
      "Pode atingir aliados se posicionados incorretamente.",
      "Altamente visível e ruidosa, alertando outros inimigos."
    ],
    damage: "(Inteligência x 2) + 6",
    mpCost: "7",
    castingTurns: 2,
    range: "Cone de 5 metros",
    purchasePoints: 5,
    raceBonuses: [
        { race: "Tiefling", modifier: "Bônus de -2 Pontos (Custo final: 3)"},
        { race: "Gnomo", modifier: "Bônus de -1 Ponto (Custo final: 4)"},
        { race: "Anão", modifier: "Penalidade de +1 Ponto (Custo final: 6)"},
        { race: "Elfo", modifier: "Penalidade de +2 Pontos (Custo final: 7)"}
    ]
  },
  {
    name: "Salto Rápido",
    imageUrl: "https://live.staticflickr.com/65535/54910647082_0404c21707_n.jpg",
    summary: "O conjurador usa uma explosão de energia arcana nos pés para realizar um rápido deslocamento, movendo-se mais rápido do que o normal por um instante. É uma magia de mobilidade, ideal para se reposicionar em combate ou atravessar pequenos obstáculos.",
    advantages: [
      "Permite movimento tático rápido (entrar ou sair de combate).",
      "Custo de mana baixo.",
      "Conjuração instantânea."
    ],
    powers: "O conjurador pode gastar 1 PA para se mover o dobro de sua movimentação normal (até 4 metros). Este movimento não provoca ataques de oportunidade (se essa regra for usada). Pode ser usado para saltar pequenas lacunas que um movimento normal não permitiria.",
    disadvantages: [
      "Não pode ser usado se o conjurador estiver com os pés presos ou imobilizado.",
      "O movimento é apenas em linha reta e deve terminar em um espaço seguro.",
      "Gasta 1 PA e MP, o que pode limitar outras ações no turno."
    ],
    damage: "Nenhum",
    mpCost: "3",
    castingTurns: 1,
    range: "Apenas no próprio conjurador.",
    purchasePoints: 4,
    raceBonuses: [
        { race: "Elfo", modifier: "Bônus de -2 Pontos (Custo final: 2)"},
        { race: "Goblin Civilizado", modifier: "Bônus de -1 Ponto (Custo final: 3)"},
        { race: "Anão", modifier: "Penalidade de +2 Pontos (Custo final: 6)"},
        { race: "Draconato", modifier: "Penalidade de +2 Pontos (Custo final: 6)"}
    ]
  },
  {
    name: "Névoa Ofuscante",
    imageUrl: "https://live.staticflickr.com/65535/54911764619_7f5b54a998_n.jpg",
    summary: "O conjurador cria uma pequena nuvem de névoa densa que ofusca a visão e causa um leve desconforto respiratório nos inimigos. É uma magia de controle e suporte, excelente para criar cobertura ou dificultar a mira dos adversários.",
    advantages: [
      "Obstrui a linha de visão de inimigos, dando cobertura aos aliados.",
      "Custo de mana moderado.",
      "Não causa dano direto, mas impõe penalidades."
    ],
    powers: "Cria uma esfera de névoa de 3 metros de raio em um ponto escolhido dentro do alcance. Criaturas dentro da névoa (ou que tentem atacar através dela) têm Desvantagem em testes de Percepção e rolagens de ataque. A névoa dura por 3 turnos ou até ser dispersada por um vento forte.",
    disadvantages: [
      "Afeta aliados e inimigos igualmente.",
      "Não funciona em áreas já com visibilidade muito ruim.",
      "Pode ser dispersa facilmente por rajadas de vento ou magia."
    ],
    damage: "Nenhum",
    mpCost: "6",
    castingTurns: 2,
    range: "10 metros",
    purchasePoints: 4,
    raceBonuses: [
        { race: "Elfo da Floresta", modifier: "Bônus de -1 Ponto (Custo final: 3)"},
        { race: "Gnomo", modifier: "Bônus de -1 Ponto (Custo final: 3)"},
        { race: "Orc", modifier: "Penalidade de +2 Pontos (Custo final: 6)"},
        { race: "Anão", modifier: "Penalidade de +2 Pontos (Custo final: 6)"}
    ]
  },
  {
    name: "Enredar",
    imageUrl: "https://live.staticflickr.com/65535/54910648337_7af4be9a1b_n.jpg",
    summary: "O conjurador faz com que vinhas e raízes brotem do chão para prender um inimigo. É uma magia de controle de multidão eficaz, ideal para imobilizar um alvo e impedir seu movimento.",
    advantages: [
      "Imobiliza um único alvo, removendo-o temporariamente do combate.",
      "Ótima para controlar inimigos fortes ou rápidos.",
      "Permite que aliados ataquem o alvo preso com mais facilidade."
    ],
    powers: "Vinhas e raízes emergem do chão em uma área de 1,5 metro de raio (um quadrado de 3x3 se usarmos grid) em um ponto dentro do alcance.\nUma criatura escolhida dentro da área deve fazer um teste de Força ou ficará Enredada por 2 turnos.\nUma criatura Enredada não pode se mover e tem Desvantagem em testes de Destreza e ataques.\nA criatura pode tentar um novo teste de Força no início de cada um de seus turnos para se libertar.",
    disadvantages: [
      "Funciona apenas em terrenos onde plantas possam brotar (solo, terra, grama).",
      "Não causa dano direto.",
      "Inimigos com alta Força podem se libertar rapidamente."
    ],
    damage: "Nenhum",
    mpCost: "5",
    castingTurns: 2,
    range: "8 metros",
    purchasePoints: 5,
    raceBonuses: [
      { race: "Elfo da Floresta", modifier: "Bônus de -2 Pontos (Custo final: 3)" },
      { race: "Gnomo", modifier: "Bônus de -1 Ponto (Custo final: 4)" },
      { race: "Draconato", modifier: "Penalidade de +1 Ponto (Custo final: 6)" },
      { race: "Minotauro", modifier: "Penalidade de +1 Ponto (Custo final: 6)" }
    ]
  },
  {
    name: "Sussurros Arcanos",
    imageUrl: "https://live.staticflickr.com/65535/54911735613_4f171cc0b4_n.jpg",
    summary: "O conjurador encanta o ar para carregar sua voz silenciosamente até um alvo específico, permitindo comunicação telepática unidirecional. É uma magia de utilidade, perfeita para espionagem ou coordenação tática silenciosa.",
    advantages: [
      "Permite comunicação silenciosa e secreta.",
      "Custo de mana muito baixo.",
      "O alvo não precisa ser um mago para ouvir a mensagem."
    ],
    powers: "O conjurador pode enviar uma mensagem curta (cerca de 10 palavras) para qualquer criatura que possa ver dentro do alcance.\nA criatura ouve a mensagem em sua mente, na voz do conjurador.\nA magia não permite que o alvo responda telepaticamente.",
    disadvantages: [
      "Requer linha de visão direta com o alvo.",
      "É apenas unidirecional (o alvo não pode responder pela magia).",
      "Barreiras mágicas de silêncio ou que bloqueiam telepatia impedem a magia."
    ],
    damage: "Nenhum",
    mpCost: "1",
    castingTurns: 1,
    range: "15 metros",
    purchasePoints: 2,
    raceBonuses: [
      { race: "Gnomo", modifier: "Bônus de -1 Ponto (Custo final: 1)" },
      { race: "Elfo", modifier: "Bônus de -1 Ponto (Custo final: 1)" },
      { race: "Espreitador das Sombras", modifier: "Bônus de -1 Ponto (Custo final: 1)" },
      { race: "Orc", modifier: "Penalidade de +2 Pontos (Custo final: 4)" },
      { race: "Minotauro", modifier: "Penalidade de +2 Pontos (Custo final: 4)" }
    ]
  },
  {
    name: "Mão Arcana",
    imageUrl: "https://live.staticflickr.com/65535/54910647692_e935b8c4f4_n.jpg",
    summary: "O conjurador cria uma mão espectral translúcida de energia arcana que pode interagir com objetos à distância. É uma magia de utilidade versátil, útil para manipular alavancas, pegar objetos ou abrir portas sem se expor.",
    advantages: [
      "Permite interagir com o ambiente à distância, evitando perigos.",
      "Custo de mana baixo.",
      "Pode ser usada para realizar tarefas simples que exigem destreza."
    ],
    powers: "Uma mão invisível e translúcida de energia arcana aparece em um ponto dentro do alcance e pode ser controlada pelo conjurador.\nA mão pode levantar objetos de até 5 kg, abrir portas ou baús destrancados, virar alavancas, ou empurrar objetos.\nA mão pode se mover até 10 metros por turno.\nA magia dura por 1 minuto, ou até que o conjurador a dissipe ou perca a concentração (por exemplo, ao sofrer dano).",
    disadvantages: [
      "Não pode atacar ou realizar ações que exijam força considerável.",
      "É facilmente bloqueada por barreiras físicas.",
      "O conjurador precisa de concentração para controlá-la."
    ],
    damage: "Nenhum",
    mpCost: "3",
    castingTurns: 1,
    range: "10 metros",
    purchasePoints: 2,
    raceBonuses: [
      { race: "Gnomo", modifier: "Bônus de -1 Ponto (Custo final: 1)" },
      { race: "Humano", modifier: "Bônus de -1 Ponto (Custo final: 1)" },
      { race: "Elfo", modifier: "Bônus de -1 Ponto (Custo final: 1)" },
      { race: "Orc", modifier: "Penalidade de +2 Pontos (Custo final: 4)" },
      { race: "Minotauro", modifier: "Penalidade de +2 Pontos (Custo final: 4)" }
    ]
  },
  {
    name: "Ilusão Menor",
    imageUrl: "https://live.staticflickr.com/65535/54912783015_d62a396649_n.jpg",
    summary: "O conjurador cria uma imagem ou som ilusório simples e estático. É uma magia de truque versátil, útil para distrair guardas, criar uma distração sonora ou fazer um objeto parecer onde não está.",
    advantages: [
      "Custo de mana muito baixo.",
      "Muitas aplicações criativas para distração e engano.",
      "Pode ser combinada com outras táticas para maior efeito."
    ],
    powers: "Você cria a imagem visual de um objeto inanimado que não seja maior que 1 metro cúbico, ou você cria um som (como o choro de um bebê, um sussurro, o som de passos) que parece vir de um local à sua escolha dentro do alcance.\nA imagem ou som dura por 1 minuto, ou até que você a dissipe com uma ação.\nSe uma criatura usa sua ação para examinar a ilusão, ela pode fazer um teste de Inteligência (Investigação) contra a CD de suas magias para discernir que é uma ilusão. Se ela tiver sucesso, a ilusão se torna translúcida para ela.",
    disadvantages: [
      "A ilusão é estática (não se move).",
      "Não pode criar sons complexos ou vozes completas.",
      "Inimigos atentos podem facilmente discernir a ilusão."
    ],
    damage: "Nenhum",
    mpCost: "2",
    castingTurns: 1,
    range: "10 metros",
    purchasePoints: 3,
    raceBonuses: [
      { race: "Gnomo", modifier: "Bônus de -2 Pontos (Custo final: 1)" },
      { race: "Elfo", modifier: "Bônus de -1 Ponto (Custo final: 2)" },
      { race: "Espreitador das Sombras", modifier: "Bônus de -1 Ponto (Custo final: 2)" },
      { race: "Orc", modifier: "Penalidade de +2 Pontos (Custo final: 5)" },
      { race: "Anão", modifier: "Penalidade de +2 Pontos (Custo final: 5)" }
    ]
  },
  {
    name: "Resistência Menor",
    imageUrl: "https://live.staticflickr.com/65535/54911516371_6d25c4c73c_n.jpg",
    summary: "O conjurador toca um aliado ou a si mesmo, imbuindo-o com uma proteção temporária contra um tipo de energia elemental. É uma magia defensiva rápida, útil para mitigar dano de fogo, gelo ou ácido.",
    advantages: [
      "Rápida de conjurar (1 turno).",
      "Custo de mana muito baixo.",
      "Pode ser usada preventivamente se o conjurador antecipar um tipo de dano."
    ],
    powers: "Ao conjurar, o alvo (pode ser o próprio conjurador) ganha +5 de Defesa Total contra um tipo de dano elemental específico (Fogo, Gelo, Ácido, Elétrico, etc.), escolhido no momento da conjuração.\nO efeito dura por 3 turnos ou até que o alvo sofra dano do tipo escolhido (o bônus se aplica a esse primeiro dano e depois se dissipa).",
    disadvantages: [
      "O bônus é pequeno e só se aplica uma vez.",
      "Requer toque, colocando o conjurador próximo ao alvo.",
      "O conjurador precisa adivinhar qual tipo de dano o inimigo usará."
    ],
    damage: "Nenhum",
    mpCost: "2",
    castingTurns: 1,
    range: "Toque",
    purchasePoints: 2,
    raceBonuses: [
      { race: "Anão", modifier: "Bônus de -1 Ponto (Custo final: 1)" },
      { race: "Draconato", modifier: "Bônus de -1 Ponto (Custo final: 1)" },
      { race: "Elfo", modifier: "Penalidade de +1 Ponto (Custo final: 3)" },
      { race: "Halfling", modifier: "Penalidade de +1 Ponto (Custo final: 3)" }
    ]
  },
  {
    name: "Armadura Arcana Menor",
    imageUrl: "https://live.staticflickr.com/65535/54911821585_635dc52d66_n.jpg",
    summary: "O conjurador traça runas no ar, criando uma armadura de energia mágica translúcida que o protege. É uma magia de defesa pessoal que oferece uma proteção básica contra ataques.",
    advantages: [
      "Fornece um bônus de Defesa Total.",
      "Dura por um período decente, permitindo que o conjurador se concentre em outras ações.",
      "Custo de mana baixo."
    ],
    powers: "O conjurador ganha um bônus de +5 na Defesa Total.\nA magia dura por 3 turnos.",
    disadvantages: [
      "O bônus de defesa é pequeno.",
      "O efeito é visível e denuncia que o conjurador está usando magia defensiva.",
      "A magia se dissipa se o conjurador sofrer mais de 10 de dano em um único ataque (a armadura \"quebra\")."
    ],
    damage: "Nenhum",
    mpCost: "4",
    castingTurns: 2,
    range: "Apenas no próprio conjurador.",
    purchasePoints: 4,
    raceBonuses: [
      { race: "Gnomo", modifier: "Bônus de -2 Pontos (Custo final: 2)" },
      { race: "Humano", modifier: "Bônus de -1 Ponto (Custo final: 3)" },
      { race: "Orc", modifier: "Penalidade de +2 Pontos (Custo final: 6)" },
      { race: "Minotauro", modifier: "Penalidade de +2 Pontos (Custo final: 6)" }
    ]
  },
  {
    name: "Lâmina de Vento",
    imageUrl: "https://live.staticflickr.com/65535/54911736218_92776d964d_n.jpg",
    summary: "O conjurador foca sua vontade e dispara uma lâmina de ar comprimido que corta o inimigo. É um feitiço de combate direto, rápido e versátil, equilibrando custo e dano.",
    advantages: [
      "Rápida de conjurar (1 turno).",
      "Custo de mana baixo.",
      "Causa dano físico (cortante), útil contra inimigos com baixa defesa mágica."
    ],
    powers: "Dispara um projétil de ar cortante em um único alvo.\nO dano é considerado físico/cortante, não elemental.",
    disadvantages: [
      "Dano moderado.",
      "Só atinge um alvo.",
      "Pode ser bloqueado por barreiras físicas fortes."
    ],
    damage: "(Inteligência x 2) + 4",
    mpCost: "3",
    castingTurns: 1,
    range: "8 metros",
    purchasePoints: 4,
    raceBonuses: [
      { race: "Humano", modifier: "Bônus de -3 Pontos (Custo final: 1)" },
      { race: "Meio-Elfo", modifier: "Bônus de -1 Ponto (Custo final: 3)" },
      { race: "Anão", modifier: "Penalidade de +2 Pontos (Custo final: 6)" }
    ]
  },
  {
    name: "Resiliência Humana",
    imageUrl: "https://live.staticflickr.com/65535/54911767129_c7098c4a26_n.jpg",
    summary: "O conjurador invoca uma onda de energia que revigora um aliado, dando-lhe uma recuperação de vida imediata e um bônus temporário de resistência. Reflete a notável capacidade humana de se adaptar e superar adversidades.",
    advantages: [
      "Cura instantânea e uma pequena proteção adicional.",
      "Baixo custo de mana para o impacto que oferece.",
      "Versátil para usar em si mesmo ou em um aliado."
    ],
    powers: "Um alvo (aliado ou o próprio conjurador) recupera uma quantidade de Pontos de Vida igual a (Inteligência x 2) + 6.\nAlém disso, o alvo recebe um bônus de +2 em testes de Vigor por 2 turnos, representando sua tenacidade.",
    disadvantages: [
      "A cura é modesta e não remove condições negativas.",
      "O bônus de Vigor é temporário.",
      "Não funciona em mortos-vivos ou construtos."
    ],
    damage: "Nenhum (efeito de cura e bônus)",
    mpCost: "5",
    castingTurns: 1,
    range: "Toque",
    purchasePoints: 5,
    raceBonuses: [
      { race: "Humano", modifier: "Bônus de -3 Pontos (Custo final: 2)" },
      { race: "Meio-Elfo", modifier: "Bônus de -1 Ponto (Custo final: 4)" },
      { race: "Elfo", modifier: "Penalidade de +2 Pontos (Custo final: 7)" }
    ]
  },
  {
    name: "Dança das Lâminas Etéreas",
    imageUrl: "https://live.staticflickr.com/65535/54911767149_e1a745acae_n.jpg",
    summary: "O conjurador convoca três lâminas de energia pura que flutuam ao seu redor. Essas lâminas atacam inimigos próximos ou podem ser lançadas em um alvo distante. É uma magia ofensiva versátil, capaz de atingir múltiplos alvos ou focar o dano em um único inimigo.",
    advantages: [
      "Capacidade de atacar múltiplos alvos ou concentrar dano.",
      "Causa dano mágico puro, ignorando defesas físicas.",
      "As lâminas podem ser mantidas por um tempo, oferecendo ataques adicionais."
    ],
    powers: "O conjurador invoca 3 lâminas etéreas que flutuam ao seu redor por 3 turnos.\nAção no seu Turno: Em cada um dos 3 turnos (incluindo o que conjura), o conjurador pode gastar 1 PA para fazer com que as lâminas ataquem:\nAtaque Corpo a Corpo (Automático): As 3 lâminas atacam automaticamente 3 inimigos diferentes (ou o mesmo inimigo 3 vezes) que estejam a até 3 metros do conjurador. Cada lâmina causa (Inteligência x 2) de dano.\nLançamento (1 Alvo): Uma das lâminas pode ser lançada em um único alvo a até 10 metros. Faça um Teste de Acerto (d10 + Agilidade) contra o alvo. Se acertar, causa (Inteligência x 2) + 5 de dano.\nO dano das lâminas é de energia arcana e é defendido apenas pelo Vigor do alvo.",
    disadvantages: [
      "Consumo de MP elevado.",
      "Requer 2 turnos para conjurar, deixando o conjurador vulnerável inicialmente.",
      "Exige gerenciamento de PA para usar as lâminas após a conjuração."
    ],
    damage: "Corpo a Corpo: (Inteligência x 2) / Lançamento: (Inteligência x 2) + 5",
    mpCost: "15",
    castingTurns: 2,
    range: "Lâminas flutuam ao redor (3m ataque), podem ser lançadas a 10m.",
    purchasePoints: 12,
    raceBonuses: [
      { race: "Elfo", modifier: "Bônus de -4 Pontos (Custo final: 8)" },
      { race: "Gnomo", modifier: "Bônus de -2 Pontos (Custo final: 10)" },
      { race: "Orc", modifier: "Penalidade de +5 Pontos (Custo final: 17)" },
      { race: "Anão", modifier: "Penalidade de +4 Pontos (Custo final: 16)" }
    ]
  },
  {
    name: "Pele de Pedra",
    imageUrl: "https://live.staticflickr.com/65535/54911516566_592b677d4d_n.jpg",
    summary: "O conjurador canaliza a energia da terra, fazendo com que sua pele (ou a de um aliado) endureça temporariamente, ganhando a resiliência da rocha. É uma magia de proteção fundamental, baseada na resistência e não no intelecto.",
    advantages: [
      "Fornece um bônus direto e confiável de defesa.",
      "Rápida de conjurar (1 turno).",
      "Ideal para combatentes de linha de frente que precisam absorver dano."
    ],
    powers: "O alvo (pode ser o próprio conjurador) ganha um bônus de +4 na Defesa Total.\nA magia dura por 3 turnos.",
    disadvantages: [
      "Requer toque, exigindo proximidade.",
      "O bônus é modesto e não se acumula com outros bônus de \"Pele\" (como Pele de Ferro, etc.).",
      "O alvo fica visivelmente com a pele acinzentada e rachada, o que pode ser ruim para furtividade."
    ],
    damage: "Nenhum",
    mpCost: "3",
    castingTurns: 1,
    range: "Toque",
    purchasePoints: 4,
    raceBonuses: [
      { race: "Anão", modifier: "Bônus de -3 Pontos (Custo final: 1)" },
      { race: "Gnomo", modifier: "Bônus de -1 Ponto (Custo final: 3)" },
      { race: "Elfo", modifier: "Penalidade de +2 Pontos (Custo final: 6)" },
      { race: "Halfling", modifier: "Penalidade de +2 Pontos (Custo final: 6)" }
    ]
  },
  {
    name: "Peso da Montanha",
    imageUrl: "https://live.staticflickr.com/65535/54911821820_82cdc0e8da_n.jpg",
    summary: "O conjurador canaliza a energia da terra e a imbui em sua arma corpo-a-corpo (ou na de um aliado). A arma brilha com runas tênues e se torna pesada como a rocha, desferindo golpes que esmagam defesas.",
    advantages: [
      "Aumenta drasticamente o dano físico do usuário.",
      "Sinergia perfeita com raças focadas em Força e Vigor.",
      "Transforma um guerreiro forte em uma força devastadora."
    ],
    powers: "O conjurador toca uma arma corpo-a-corpo (martelo, machado, espada).\nPor 3 turnos, todos os ataques feitos com essa arma ganham um bônus no Ataque Físico Total igual ao atributo Vigor do conjurador.",
    disadvantages: [
      "Requer 2 turnos para conjurar, exigindo preparação.",
      "Custo de mana moderado.",
      "Requer toque (o conjurador precisa estar ao lado do aliado ou segurando a própria arma)."
    ],
    damage: "Bônus de (Vigor do Conjurador) no Ataque Físico Total",
    mpCost: "7",
    castingTurns: 2,
    range: "Toque",
    purchasePoints: 9,
    raceBonuses: [
      { race: "Anão", modifier: "Bônus de -5 Pontos (Custo final: 4)" },
      { race: "Draconato", modifier: "Bônus de -3 Pontos (Custo final: 6)" },
      { race: "Elfo", modifier: "Penalidade de +4 Pontos (Custo final: 13)" },
      { race: "Halfling", modifier: "Penalidade de +5 Pontos (Custo final: 14)" }
    ]
  },
  {
    name: "Pés Leves",
    imageUrl: "https://live.staticflickr.com/65535/54910649482_7b346d6431_n.jpg",
    summary: "O conjurador infunde leveza em seus pés ou nos de um aliado, permitindo-lhes mover-se com graça e rapidez sobrenaturais. Esta magia concede um bônus de agilidade e uma chance maior de evitar ataques.",
    advantages: [
      "Aumenta a capacidade de se esquivar e se posicionar.",
      "Custo de mana baixo.",
      "Rápida de conjurar (1 turno)."
    ],
    powers: "O alvo (pode ser o próprio conjurador) recebe um bônus de +2 na Esquiva (Fase 1 do Teste de Acerto) por 3 turnos.\nAlém disso, o alvo ganha +1 metro de movimentação por turno enquanto a magia durar.",
    disadvantages: [
      "O bônus é modesto.",
      "Não concede invisibilidade ou bônus de furtividade direto.",
      "Requer toque para conjurar em um aliado."
    ],
    damage: "Nenhum",
    mpCost: "3",
    castingTurns: 1,
    range: "Toque",
    purchasePoints: 4,
    raceBonuses: [
      { race: "Halfling", modifier: "Bônus de -3 Pontos (Custo final: 1)" },
      { race: "Elfo", modifier: "Bônus de -1 Ponto (Custo final: 3)" },
      { race: "Anão", modifier: "Penalidade de +2 Pontos (Custo final: 6)" },
      { race: "Orc", modifier: "Penalidade de +2 Pontos (Custo final: 6)" }
    ]
  },
  {
    name: "Manto de Desfoque",
    imageUrl: "https://live.staticflickr.com/65535/54911805076_aa66f71899_n.jpg",
    summary: "O conjurador cria um efeito ilusório sutil ao redor de si mesmo, que faz com que seus movimentos pareçam erráticos e sua silhueta se desfoque. Inimigos têm dificuldade em mirar e acertar o alvo.",
    advantages: [
      "Aumenta drasticamente a capacidade de evasão do conjurador.",
      "Perfeito para conjuradores que se encontram na linha de frente ou que precisam escapar de ataques.",
      "Não é uma invisibilidade total, mas confere grande proteção contra ataques físicos."
    ],
    powers: "O conjurador fica envolto em uma aura que distorce sua aparência, tornando-o difícil de ser atingido.\nPor 3 turnos, todos os ataques direcionados ao conjurador sofrem Desvantagem (o atacante joga 2d10 e pega o menor resultado) no Teste de Acerto (Fase 1).",
    disadvantages: [
      "Consumo de MP moderado.",
      "Não oferece proteção contra magias de área ou efeitos que não exijam teste de acerto.",
      "O efeito é visível, mostrando que o conjurador está usando magia."
    ],
    damage: "Nenhum",
    mpCost: "8",
    castingTurns: 2,
    range: "Apenas no próprio conjurador.",
    purchasePoints: 10,
    raceBonuses: [
      { race: "Halfling", modifier: "Bônus de -5 Pontos (Custo final: 5)" },
      { race: "Elfo", modifier: "Bônus de -3 Pontos (Custo final: 7)" },
      { race: "Anão", modifier: "Penalidade de +4 Pontos (Custo final: 14)" },
      { race: "Orc", modifier: "Penalidade de +5 Pontos (Custo final: 15)" }
    ]
  },
  {
    name: "Fúria Primordial",
    imageUrl: "https://live.staticflickr.com/65535/54911736308_0fa132a8e2_n.jpg",
    summary: "O conjurador (ou um aliado) é imbuído com uma fúria selvagem, aumentando sua força e resistência em combate. A pele escurece e os olhos brilham, enquanto a dor parece menos intensa, impulsionando-o a lutar com ainda mais vigor.",
    advantages: [
      "Aumenta tanto o dano quanto a capacidade de absorver golpes.",
      "Sinergia perfeita com Orcs e outras raças focadas em Força e Vigor.",
      "Custo de mana razoável para o poder que oferece."
    ],
    powers: "O alvo (pode ser o próprio conjurador) ganha um bônus de +4 no Ataque Físico Total por 3 turnos.\nAlém disso, o alvo ganha um bônus de +4 na Defesa Total por 3 turnos.",
    disadvantages: [
      "Exige 2 turnos para conjurar, o que pode ser lento no início do combate.",
      "O efeito é visível e pode ser intimidador para aliados ou chamar a atenção de inimigos.",
      "Não concede bônus em testes de perícia, apenas em combate direto."
    ],
    damage: "Nenhum (efeito de bônus)",
    mpCost: "8",
    castingTurns: 2,
    range: "Toque",
    purchasePoints: 10,
    raceBonuses: [
      { race: "Orc", modifier: "Bônus de -5 Pontos (Custo final: 5)" },
      { race: "Draconato", modifier: "Bônus de -3 Pontos (Custo final: 7)" },
      { race: "Elfo", modifier: "Penalidade de +5 Pontos (Custo final: 15)" },
      { race: "Halfling", modifier: "Penalidade de +5 Pontos (Custo final: 15)" }
    ]
  },
  {
    name: "Ruptura da Terra",
    imageUrl: "https://live.staticflickr.com/65535/54911821910_7921bf6229_n.jpg",
    summary: "O conjurador concentra sua raiva e força, batendo no chão com um poderoso golpe que irrompe a terra. Rachaduras se espalham, lançando fragmentos de rocha e desequilibrando inimigos em uma área próxima.",
    advantages: [
      "Causa dano em área significativa.",
      "Desequilibra e causa dano físico, perfeito para o combate corpo-a-corpo.",
      "Forte sinergia com a Força e Vigor dos Orcs."
    ],
    powers: "O conjurador bate no chão (com a mão ou arma) e cria uma onda de choque terrestre em um raio de 3 metros ao seu redor.\nTodos os inimigos na área de efeito sofrem (Força do Conjurador x 2) + 12 de dano físico.\nAlém do dano, os inimigos atingidos devem fazer um teste de Vigor. Se falharem, ficam Desequilibrados por 1 turno (sofrem -2 na Esquiva e -2 no Ataque Físico Total).",
    disadvantages: [
      "Requer 3 turnos para conjurar, o que é um tempo considerável em combate.",
      "Custo de MP elevado.",
      "Afeta uma área ao redor do conjurador, podendo atingir aliados."
    ],
    damage: "(Força do Conjurador x 2) + 12",
    mpCost: "18",
    castingTurns: 3,
    range: "Raio de 3 metros ao redor do conjurador.",
    purchasePoints: 14,
    raceBonuses: [
      { race: "Orc", modifier: "Bônus de -6 Pontos (Custo final: 8)" },
      { race: "Anão", modifier: "Bônus de -3 Pontos (Custo final: 11)" },
      { race: "Elfo", modifier: "Penalidade de +6 Pontos (Custo final: 20)" },
      { race: "Halfling", modifier: "Penalidade de +6 Pontos (Custo final: 20)" }
    ]
  },
  {
    name: "Voz Encantadora",
    imageUrl: "https://live.staticflickr.com/65535/54910649562_f70e5cf28e_n.jpg",
    summary: "O conjurador imbui sua voz com uma ressonância arcana sutil, tornando-a hipnótica e extremamente agradável. A magia não controla a mente, mas faz com que as palavras do conjurador pareçam mais razoáveis, confiáveis e persuasivas.",
    advantages: [
      "Sinergia perfeita com Meio-Elfos e qualquer personagem focado em diplomacia.",
      "Custo de mana muito baixo.",
      "Rápida de conjurar (1 turno), permitindo usar antes de uma conversa importante."
    ],
    powers: "O conjurador recebe um bônus de +5 em seu próximo teste de perícia social (à escolha do jogador: Persuasão, Manha (Lábia) ou Liderança).\nO efeito é consumido após o teste ser realizado.",
    disadvantages: [
      "Não funciona em combate ou em criaturas que não possam ouvir o conjurador.",
      "O alvo, se passar em um teste de Força de Vontade (se o Mestre decidir), pode perceber que foi sutilmente influenciado por magia após o efeito passar.",
      "O bônus é de uso único."
    ],
    damage: "Nenhum",
    mpCost: "2",
    castingTurns: 1,
    range: "Apenas no próprio conjurador.",
    purchasePoints: 3,
    raceBonuses: [
      { race: "Meio-Elfo", modifier: "Bônus de -3 Pontos (Custo final: 0)" },
      { race: "Humano", modifier: "Bônus de -1 Ponto (Custo final: 2)" },
      { race: "Orc", modifier: "Penalidade de +3 Pontos (Custo final: 6)" },
      { race: "Anão", modifier: "Penalidade de +3 Pontos (Custo final: 6)" }
    ]
  },
  {
    name: "Aura de Carisma Persistente",
    imageUrl: "https://live.staticflickr.com/65535/54911736678_d32effb578_n.jpg",
    summary: "O conjurador irradia uma aura de carisma e confiança que afeta tanto aliados quanto inimigos próximos. Aliados se sentem mais corajosos e motivados, enquanto inimigos são subconscientemente desorientados, tornando-se menos eficazes.",
    advantages: [
      "Afeta uma área, beneficiando múltiplos aliados e penalizando múltiplos inimigos.",
      "Custo de mana razoável para o efeito de área e duração.",
      "Aumenta a efetividade do grupo e diminui a dos inimigos."
    ],
    powers: "O conjurador cria uma aura de 5 metros de raio ao seu redor que dura por 3 turnos.\nAliados dentro da aura recebem um bônus de +2 em testes de Força de Vontade e Perícias Sociais.\nInimigos dentro da aura sofrem uma penalidade de -2 em testes de Ataque Físico Total e Força de Vontade.",
    disadvantages: [
      "Requer 2 turnos para conjurar.",
      "O conjurador precisa manter a posição ou se mover estrategicamente para manter a aura em efeito.",
      "Não causa dano direto."
    ],
    damage: "Nenhum",
    mpCost: "10",
    castingTurns: 2,
    range: "Raio de 5 metros ao redor do conjurador.",
    purchasePoints: 12,
    raceBonuses: [
      { race: "Meio-Elfo", modifier: "Bônus de -5 Pontos (Custo final: 7)" },
      { race: "Humano", modifier: "Bônus de -3 Pontos (Custo final: 9)" },
      { race: "Orc", modifier: "Penalidade de +5 Pontos (Custo final: 17)" },
      { race: "Anão", modifier: "Penalidade de +4 Pontos (Custo final: 16)" }
    ]
  },
  {
    name: "Distração Ilusória",
    imageUrl: "https://live.staticflickr.com/65535/54911736723_61b119ea8e_n.jpg",
    summary: "O conjurador cria um som súbito (como o tilintar de moedas) ou uma imagem visual menor (como um rato correndo) em um ponto próximo. É um truque rápido, projetado para desviar a atenção de um oponente e permitir que o Gnomo se reposicione ou evite um golpe.",
    advantages: [
      "Sinergia perfeita com a natureza furtiva e cautelosa do Gnomo.",
      "Custo de mana muito baixo.",
      "Conjuração instantânea (1 turno), ideal para uma reação defensiva."
    ],
    powers: "O conjurador escolhe um ponto visível dentro do alcance e cria uma pequena ilusão sonora ou visual.\nUm inimigo que esteja olhando ou ouvindo na direção geral deve fazer um teste de Força de Vontade.\nSe o inimigo falhar no teste, ele fica Distraído. O próximo Teste de Acerto (Fase 1) feito por esse inimigo contra o conjurador sofre uma penalidade de -5 no resultado do d10.\nO efeito é consumido após o ataque.",
    disadvantages: [
      "Não causa dano.",
      "A penalidade só se aplica ao conjurador, não aos seus aliados.",
      "Inimigos com alta Força de Vontade podem resistir facilmente."
    ],
    damage: "Nenhum",
    mpCost: "2",
    castingTurns: 1,
    range: "10 metros",
    purchasePoints: 3,
    raceBonuses: [
      { race: "Gnomo", modifier: "Bônus de -2 Pontos (Custo final: 1)" },
      { race: "Halfling", modifier: "Bônus de -1 Ponto (Custo final: 2)" },
      { race: "Orc", modifier: "Penalidade de +2 Pontos (Custo final: 5)" },
      { race: "Minotauro", modifier: "Penalidade de +2 Pontos (Custo final: 5)" }
    ]
  },
  {
    name: "Manto das Sombras",
    imageUrl: "https://live.staticflickr.com/65535/54911767704_0078893a64_n.jpg",
    summary: "O conjurador invoca sombras e brumas místicas que o envolvem, tornando-o quase invisível aos olhos dos inimigos. Esta magia é ideal para escapar de situações perigosas, realizar ataques surpresa ou se reposicionar taticamente no campo de batalha. As sombras não são densas o suficiente para impedir a visão de quem está sob o manto, mas confundem e distorcem a percepção dos adversários.",
    advantages: [
      "Proporciona uma grande vantagem defensiva e ofensiva.",
      "Permite reposicionamento estratégico sem sofrer ataques de oportunidade.",
      "Pode ser usada para confundir inimigos e proteger aliados (ao desviar a atenção para si)."
    ],
    powers: "O conjurador é envolto em sombras por um número de turnos igual ao seu atributo Inteligência (mínimo de 2 turnos).\nEnquanto sob o Manto das Sombras, o conjurador recebe um bônus de +5 em seu Valor de Esquiva.\nQualquer ataque físico ou mágico que tenha como alvo o conjurador enquanto sob o Manto das Sombras tem uma penalidade de -3 no teste de acerto.\nSe o conjurador realizar um ataque enquanto sob o Manto das Sombras, a magia se dissipa imediatamente após o ataque.",
    disadvantages: [
      "Consumo de MP moderado, o que pode ser um problema para conjuradores com baixo MP.",
      "A magia se dissipa se o conjurador atacar.",
      "Não é eficaz contra inimigos que podem ver através de ilusões ou que possuem sentidos aprimorados (como visão no escuro superior ou olfato apurado).",
      "Não pode ser conjurada em locais com luz solar direta ou fontes de luz mágica intensa."
    ],
    damage: "Nenhum",
    mpCost: "5",
    castingTurns: 1,
    range: "Pessoal",
    purchasePoints: 8,
    raceBonuses: [
      { race: "Gnomo", modifier: "Bônus de -3 Pontos (Custo final: 5)" },
      { race: "Elfo", modifier: "Bônus de -1 Ponto (Custo final: 7)" },
      { race: "Orc", modifier: "Penalidade de +3 Pontos (Custo final: 11)" },
      { race: "Minotauro", modifier: "Penalidade de +2 Pontos (Custo final: 10)" }
    ]
  },
  {
    name: "Sussurro Infernal",
    imageUrl: "https://live.staticflickr.com/65535/54911822375_582d1a01cc_n.jpg",
    summary: "O conjurador projeta um fragmento de sua herança infernal na mente de um alvo próximo, causando uma breve mas intensa sensação de medo e desconforto. Não é um ataque direto, mas uma perturbação mental que pode desorientar o inimigo por um instante crucial.",
    advantages: [
      "Custo de mana muito baixo, ideal para usar várias vezes.",
      "Conjuração instantânea, perfeita para reações rápidas ou para auxiliar um aliado.",
      "Pode ser usada para quebrar a concentração de um inimigo ou para abrir uma oportunidade para um aliado."
    ],
    powers: "O conjurador escolhe um alvo visível dentro do alcance.\nO alvo deve fazer um teste de Força de Vontade.\nSe o alvo falhar no teste, ele fica \"Desorientado\" por 1 turno.\nEnquanto desorientado, o próximo Teste de Acerto (Fase 1) de qualquer ataque físico ou mágico que o alvo realizar sofre uma penalidade de -3 no resultado do d10.\nO efeito é consumido após o ataque ou no final do turno do alvo, o que ocorrer primeiro.",
    disadvantages: [
      "Não causa dano.",
      "O efeito é de curta duração.",
      "Inimigos com alta Força de Vontade são mais propensos a resistir.",
      "A penalidade é menor em comparação com outras magias de controle."
    ],
    damage: "Nenhum",
    mpCost: "3",
    castingTurns: 1,
    range: "8 metros",
    purchasePoints: 4,
    raceBonuses: [
      { race: "Tiefling", modifier: "Bônus de -2 Pontos (Custo final: 2)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 4)" },
      { race: "Elfo", modifier: "Penalidade de +1 Ponto (Custo final: 5)" },
      { race: "Anão", modifier: "Penalidade de +1 Ponto (Custo final: 5)" }
    ]
  },
  {
    name: "Erupção Caótica",
    imageUrl: "https://live.staticflickr.com/65535/54911822420_0f68724d46_n.jpg",
    summary: "O conjurador concentra uma quantidade significativa de energia mágica para liberar uma explosão incontrolável de fogo e estilhaços, ou um pulso de energia arcana pura em uma área. Esta magia é devastadora e imprevisível, ideal para limpar grupos de inimigos ou causar dano massivo a um único alvo. A natureza caótica da magia significa que seus efeitos podem variar ligeiramente a cada conjuração, mas sempre será destrutiva.",
    advantages: [
      "Alto potencial de dano em área, ideal contra múltiplos inimigos.",
      "Causa cegueira temporária ou empurra os inimigos, adicionando controle de multidão.",
      "Pode mudar o rumo de uma batalha com um único uso bem-sucedido."
    ],
    powers: "O conjurador escolhe um ponto dentro do alcance. Uma explosão irrompe, afetando todos os inimigos em um raio de 3 metros desse ponto.\nCada inimigo na área deve fazer um teste de Destreza.\nSe o inimigo falhar no teste, ele sofre 4d6 de Dano Mágico. Se passar, sofre metade do dano.\nAlém do dano, um efeito secundário caótico é aplicado:\n50% de chance: Os inimigos afetados ficam \"Cegos\" por 1 turno (penalidade de -5 no Teste de Acerto).\n50% de chance: Os inimigos afetados são empurrados 2 metros para longe do centro da explosão e ficam \"Atordoados\" por 1 turno (não podem realizar ações).\nO conjurador pode escolher o tipo de dano principal: Fogo, Gelo ou Arcane, mas o efeito secundário é sempre aleatório.",
    disadvantages: [
      "Consumo de MP muito alto, limitando seu uso.",
      "A aleatoriedade do efeito secundário pode não ser ideal em todas as situações.",
      "Pode atingir aliados se não for usada com cuidado.",
      "O custo de compra da magia é alto, exigindo um investimento significativo."
    ],
    damage: "4d6 (Mágico)",
    mpCost: "15",
    castingTurns: 2,
    range: "15 metros",
    purchasePoints: 12,
    raceBonuses: [
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 12)" },
      { race: "Elfo", modifier: "Bônus de -2 Pontos (Custo final: 10)" },
      { race: "Tiefling", modifier: "Bônus de -1 Ponto (Custo final: 11)" },
      { race: "Anão", modifier: "Penalidade de +2 Pontos (Custo final: 14)" },
      { race: "Orc", modifier: "Penalidade de +3 Pontos (Custo final: 15)" }
    ]
  },
  {
    name: "Faísca Elemental",
    imageUrl: "https://live.staticflickr.com/65535/54910650012_071594d725_n.jpg",
    summary: "O conjurador canaliza uma pequena fração de sua herança dracônica, manifestando uma faísca crepitante de energia elemental (fogo, gelo, ácido, etc.) na palma da mão. Esta magia é mais um truque de utilidade ou uma leve intimidação do que um ataque real, usada para acender tochas, assustar animais ou causar uma distração momentânea.",
    advantages: [
      "Custo de mana muito baixo.",
      "Versátil para pequenas tarefas (acender fogueiras, iluminar momentaneamente).",
      "Pode ser usada em combate para um debuff rápido e barato."
    ],
    powers: "O conjurador gasta 1 PA para manifestar a faísca.\nModo Utilidade (0 MP): A faísca pode ser usada para acender um objeto inflamável (tocha, papel, fogueira) com o toque.\nModo Combate (2 MP): O conjurador gasta 1 PA e arremessa a faísca em um alvo. Não causa dano. O alvo deve fazer um teste de Força de Vontade. Se falhar, a faísca explode em seu rosto, causando uma distração momentânea que impõe uma penalidade de -2 no próximo Teste de Acerto (Fase 1) desse inimigo.",
    disadvantages: [
      "Não causa dano.",
      "A penalidade em combate é pequena e resistível.",
      "Ineficaz contra inimigos com alta Força de Vontade ou que não podem ser surpreendidos."
    ],
    damage: "Nenhum",
    mpCost: "0 (Utilidade) / 2 (Combate)",
    castingTurns: 1,
    range: "Toque (Utilidade) / 5 metros (Combate)",
    purchasePoints: 3,
    raceBonuses: [
      { race: "Draconato", modifier: "Bônus de -2 Pontos (Custo final: 1)" },
      { race: "Tiefling", modifier: "Bônus de -1 Ponto (Custo final: 2)" },
      { race: "Gnomo", modifier: "Penalidade de +1 Ponto (Custo final: 4)" },
      { race: "Halfling", modifier: "Penalidade de +1 Ponto (Custo final: 4)" }
    ]
  },
  {
    name: "Hálito Dracônico Ascendente",
    imageUrl: "https://live.staticflickr.com/65535/54911822450_54a05767d1_n.jpg",
    summary: "O conjurador concentra sua essência dracônica, liberando um fluxo devastador de energia elemental em um cone à sua frente. Esta magia imita o poderoso hálito dos dragões, causando dano massivo e desorientando inimigos em uma grande área. A natureza da energia (fogo, gelo, ácido, raio, veneno) é infundida pela herança do draconato.",
    advantages: [
      "Enorme potencial de dano em área, ideal para combates contra grupos de inimigos.",
      "Causa um efeito secundário (como queimação, lentidão ou cegueira) que enfraquece os sobreviventes.",
      "É uma habilidade icônica e poderosa, que evoca a força dos dragões."
    ],
    powers: "O conjurador libera um cone de energia de 8 metros de comprimento e 4 metros de largura (na base).\nTodos os inimigos dentro da área devem fazer um teste de Destreza.\nSe o inimigo falhar no teste, ele sofre 6d8 de Dano Mágico (do tipo elemental escolhido pelo Draconato ao aprender a magia, ex: Fogo, Gelo, Ácido, Raio, Veneno). Se passar, sofre metade do dano.\nAlém do dano, os inimigos que falharem no teste de Destreza recebem um efeito adicional, dependendo do elemento:\nFogo: Sofrem 2d4 de dano de fogo adicional no início do próximo turno.\nGelo: Têm sua Agilidade reduzida em 3 por 1 turno.\nÁcido: Têm sua Defesa Total reduzida em 5 por 1 turno.\nRaio: Ficam \"Atordoados\" por 1 turno (não podem realizar ações).\nVeneno: Recebem a condição \"Envenenado\" (sofrem -2 em todos os testes de atributo e perícias) por 2 turnos.",
    disadvantages: [
      "Alto custo de MP, limitando o número de usos por combate.",
      "Pode atingir aliados se o posicionamento não for cuidadoso.",
      "Requer 2 turnos para conjurar, o que exige planejamento.",
      "Inimigos com alta Destreza podem mitigar o dano."
    ],
    damage: "6d8 (Elementar) + Efeito Secundário",
    mpCost: "20",
    castingTurns: 2,
    range: "Cone de 8 metros",
    purchasePoints: 15,
    raceBonuses: [
      { race: "Draconato", modifier: "Bônus de -3 Pontos (Custo final: 12)" },
      { race: "Meio-Orc", modifier: "Bônus de -1 Ponto (Custo final: 14)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 15)" },
      { race: "Gnomo", modifier: "Penalidade de +4 Pontos (Custo final: 19)" },
      { race: "Halfling", modifier: "Penalidade de +4 Pontos (Custo final: 19)" }
    ]
  },
  {
    name: "Pulo do Trapaceiro",
    imageUrl: "https://live.staticflickr.com/65535/54912528601_4c0f4ae662_n.jpg",
    summary: "O conjurador infunde-se com uma energia mágica caótica que o impulsiona em um salto extraordinário ou uma corrida rápida e errática. Esta magia permite que o Goblin se reposicione rapidamente no campo de batalha, escape de perigos iminentes ou até mesmo execute um ataque surpresa com maior mobilidade. A energia é imprevisível, e o movimento pode ser um tanto desajeitado, mas eficaz.",
    advantages: [
      "Excelente para mobilidade e reposicionamento.",
      "Ajuda a escapar de áreas de efeito ou a se aproximar de alvos difíceis.",
      "Potencial para desorientar inimigos com movimentos rápidos e inesperados."
    ],
    powers: "O conjurador gasta 1 PA.\nO conjurador pode instantaneamente mover-se até 6 metros em qualquer direção (incluindo verticalmente, como um pulo alto), ignorando terrenos difíceis e inimigos que bloqueariam o caminho.\nDurante este movimento, o conjurador não provoca ataques de oportunidade.\nAo final do movimento, o conjurador pode optar por realizar um teste de Destreza (Furtividade) contra a Percepção de um inimigo adjacente. Se tiver sucesso, ele obtém vantagem no próximo Teste de Acerto (Fase 1) contra esse inimigo.",
    disadvantages: [
      "O movimento pode ser um pouco descontrolado em espaços apertados.",
      "Não causa dano diretamente.",
      "O bônus de ataque é condicional e requer um teste.",
      "Inimigos com alta Percepção podem anular a vantagem na furtividade."
    ],
    damage: "Nenhum",
    mpCost: "4",
    castingTurns: 1,
    range: "Pessoal (movimento de 6 metros)",
    purchasePoints: 5,
    raceBonuses: [
      { race: "Goblin", modifier: "Bônus de -2 Pontos (Custo final: 3)" },
      { race: "Halfling", modifier: "Bônus de -1 Ponto (Custo final: 4)" },
      { race: "Anão", modifier: "Penalidade de +2 Pontos (Custo final: 7)" },
      { race: "Minotauro", modifier: "Penalidade de +3 Pontos (Custo final: 8)" }
    ]
  },
  {
    name: "Emboscada Explosiva do Pequeno Terror",
    imageUrl: "https://live.staticflickr.com/65535/54912774519_0e02c1b6da_n.jpg",
    summary: "O conjurador convoca uma pequena, mas volátil, esfera de energia elemental instável que pode ser lançada ou plantada como uma armadilha. Esta esfera detona com um estrondo surpreendente, causando dano de área e espalhando confusão entre os inimigos. É uma tática clássica de Goblin: um ataque rápido e desorganizador para desequilibrar o inimigo.",
    advantages: [
      "Bom potencial de dano em área para um custo moderado.",
      "Causa cegueira temporária, desorientando os inimigos.",
      "Pode ser usada de forma ofensiva (lançada) ou tática (armadilha).",
      "Sinergia com a furtividade, permitindo emboscadas eficazes."
    ],
    powers: "Modo Lançamento (1 PA): O conjurador arremessa a esfera mágica para um ponto dentro do alcance. Ela detona ao impacto.\nModo Armadilha (1 PA + 1 turno para preparar): O conjurador planta a esfera em um local. Ela detona automaticamente quando uma criatura inimiga se aproxima (dentro de 1 metro) ou quando o conjurador usa uma ação bônus para detoná-la remotamente.\nQuando a esfera detona, todos os inimigos em um raio de 2 metros devem fazer um teste de Destreza.\nSe o inimigo falhar no teste, ele sofre 3d6 de Dano Mágico (Fogo ou Concussão, à escolha do conjurador ao aprender a magia). Se passar, sofre metade do dano.\nAlém do dano, os inimigos que falharem no teste de Destreza ficam \"Cegos\" por 1 turno (penalidade de -5 no Teste de Acerto) devido à luz e fumaça da explosão.",
    disadvantages: [
      "O dano é moderado, não é uma magia de \"limpar o campo\" como outras mais fortes.",
      "Requer planejamento para ser usada como armadilha.",
      "A cegueira é temporária e inimigos mais fortes podem superá-la.",
      "O raio de efeito é pequeno."
    ],
    damage: "3d6 (Mágico - Fogo/Concussão)",
    mpCost: "8",
    castingTurns: 1,
    range: "10 metros (Lançamento) / 5 metros (Armadilha, com detonação remota até 15 metros)",
    purchasePoints: 9,
    raceBonuses: [
      { race: "Goblin", modifier: "Bônus de -3 Pontos (Custo final: 6)" },
      { race: "Gnomo", modifier: "Bônus de -1 Ponto (Custo final: 8)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 9)" },
      { race: "Minotauro", modifier: "Penalidade de +2 Pontos (Custo final: 11)" },
      { race: "Draconato", modifier: "Penalidade de +1 Ponto (Custo final: 10)" }
    ]
  },
  {
    name: "Reflexos do Caçador",
    imageUrl: "https://live.staticflickr.com/65535/54912793504_0725db94cd_n.jpg",
    summary: "O conjurador infunde-se com uma agilidade sobrenatural e sentidos aguçados, permitindo reagir a perigos com uma velocidade surpreendente. Esta magia aprimora os reflexos e a percepção, tornando o usuário um adversário difícil de atingir e um observador astuto em momentos críticos. É ideal para se esquivar de ataques, evitar armadilhas ou se antecipar aos movimentos inimigos.",
    advantages: [
      "Aumenta significativamente a capacidade de esquiva e defesa.",
      "Pode ser usada reativamente, surpreendendo os oponentes.",
      "Útil tanto em combate quanto para evitar perigos ambientais."
    ],
    powers: "O conjurador gasta 1 PA para ativar a magia.\nPelos próximos 2 turnos, o conjurador recebe um bônus de +4 em sua ESQUIVA TOTAL.\nAlém disso, enquanto a magia estiver ativa, o conjurador pode realizar um teste de Percepção como uma reação (sem gastar PA adicional) uma vez por rodada para tentar notar um detalhe oculto ou uma emboscada, com vantagem (rola 2d10 e pega o melhor resultado).\nSe o conjurador for alvo de um ataque físico e obtiver um sucesso crítico no teste de esquiva (o d6 da esquiva der 6), ele pode usar 1 PA para realizar um contra-ataque imediato (um ataque físico básico) contra o agressor.",
    disadvantages: [
      "Consumo de MP moderado para a duração.",
      "Aumenta a defesa, mas não o dano direto.",
      "O contra-ataque consome PA, limitando outras ações no turno.",
      "Ineficaz contra magias que não permitem teste de esquiva."
    ],
    damage: "Nenhum (mas permite contra-ataque)",
    mpCost: "6",
    castingTurns: 1,
    range: "Pessoal",
    purchasePoints: 7,
    raceBonuses: [
      { race: "Raças Felinas/Agilidade Natural (ex: Tabaxi, Híbridos de Gato)", modifier: "Bônus de -2 Pontos (Custo final: 5)" },
      { race: "Elfo", modifier: "Bônus de -1 Ponto (Custo final: 6)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 7)" },
      { race: "Anão", modifier: "Penalidade de +2 Pontos (Custo final: 9)" },
      { race: "Minotauro", modifier: "Penalidade de +2 Pontos (Custo final: 9)" }
    ]
  },
  {
    name: "Bote Fantasma",
    imageUrl: "https://live.staticflickr.com/65535/54912793509_af5a135637_n.jpg",
    summary: "O conjurador se imbui da essência de um predador fantasma, tornando-se parcialmente etéreo e quase invisível. Esta magia permite um movimento rápido e silencioso, culminando em um único ataque devastador que pega o inimigo completamente desprevenido.",
    advantages: [
      "Potencial de dano massivo em um único alvo.",
      "Excelente para assassinato, emboscadas ou para eliminar um alvo prioritário.",
      "Combina mobilidade, furtividade e dano em uma única conjuração."
    ],
    powers: "O conjurador gasta 1 PA para ativar a magia. A magia dura até o final do seu turno.\nDurante este turno, o conjurador fica \"Invisível\" para detecção normal. Inimigos devem passar em um teste de Percepção com alta dificuldade (definida pelo Mestre) para localizá-lo.\nO conjurador pode gastar 1 PA adicional para se mover instantaneamente até 10 metros, sem provocar ataques de oportunidade, para uma posição adjacente a um inimigo.\nO primeiro Ataque Físico que o conjurador fizer neste turno, após usar esta magia, recebe os seguintes bônus:\nO ataque é considerado um Sucesso Absoluto (acerta automaticamente, como se tivesse tirado um 6 no d6 ).\nO ataque ignora a Defesa Total proveniente de Armadura e Escudo (apenas o Vigor base do alvo é contado para a defesa).",
    disadvantages: [
      "Custo de MP muito elevado, esgotando rapidamente os recursos do conjurador.",
      "A magia se dissipa imediatamente após o ataque, ou no final do turno, caso nenhum ataque seja feito.",
      "Se o conjurador sofrer qualquer dano antes de atacar, a magia é interrompida e o MP é perdido.",
      "Completamente focado em um único ataque; se houver múltiplos inimigos, não oferece defesa."
    ],
    damage: "Nenhum (Modifica o próximo ataque físico)",
    mpCost: "14",
    castingTurns: 1,
    range: "Pessoal",
    purchasePoints: 12,
    raceBonuses: [
      { race: "Felino", modifier: "Bônus de -3 Pontos (Custo final: 9)" },
      { race: "Espreitador das Sombras", modifier: "Bônus de -3 Pontos (Custo final: 9)" },
      { race: "Goblin Civilizado", modifier: "Bônus de -1 Ponto (Custo final: 11)" },
      { race: "Draconato", modifier: "Penalidade de +2 Pontos (Custo final: 14)" },
      { race: "Minotauro", modifier: "Penalidade de +3 Pontos (Custo final: 15)" }
    ]
  },
  {
    name: "Investida Imparável",
    imageUrl: "https://live.staticflickr.com/65535/54912764283_f9d4ba7349_n.jpg",
    summary: "O conjurador canaliza uma fúria primal, infundindo-se com uma força e tenacidade brutais. Esta magia permite que o usuário avance impetuosamente, esmagando obstáculos e inimigos em seu caminho. É uma habilidade de combate direto, projetada para quebrar linhas inimigas, desestabilizar defesas e infligir dano contundente.",
    advantages: [
      "Permite um avanço agressivo, quebrando formações inimigas.",
      "Causa dano em múltiplos alvos e pode desorientá-los.",
      "Concede resistência temporária, tornando o conjurador mais difícil de parar."
    ],
    powers: "O conjurador gasta 1 PA para ativar a magia.\nO conjurador pode se mover em linha reta até 8 metros, ignorando o terreno difícil e empurrando criaturas de tamanho Médio ou menor para os lados.\nQualquer criatura que o conjurador atravessar (ou parar ao lado se for impossível passar) deve fazer um teste de Força.\nSe a criatura falhar no teste, ela sofre 3d6 de Dano Físico (Concussão) e fica \"Atordoada\" por 1 turno (não pode realizar ações). Se passar, sofre metade do dano e não é atordoada.\nEnquanto a magia estiver ativa (até o final do turno), o conjurador recebe um bônus de +5 em sua Defesa Base.",
    disadvantages: [
      "Custo de MP elevado.",
      "O movimento é em linha reta, o que pode ser previsível.",
      "Não é eficaz contra inimigos muito grandes.",
      "O atordoamento e o dano dependem de um teste de Força, que inimigos mais fortes podem resistir."
    ],
    damage: "3d6 (Físico - Concussão)",
    mpCost: "10",
    castingTurns: 1,
    range: "Pessoal (movimento de 8 metros)",
    purchasePoints: 11,
    raceBonuses: [
      { race: "Minotauro", modifier: "Bônus de -3 Pontos (Custo final: 8)" },
      { race: "Orc/Meio-Orc", modifier: "Bônus de -2 Pontos (Custo final: 9)" },
      { race: "Anão", modifier: "Bônus de -1 Ponto (Custo final: 10)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 11)" },
      { race: "Gnomo/Halfling", modifier: "Penalidade de +3 Pontos (Custo final: 14)" }
    ]
  },
  {
    name: "Fúria Titânica",
    imageUrl: "https://live.staticflickr.com/65535/54912596761_ca1de84c29_n.jpg",
    summary: "O conjurador desperta uma fúria selvagem e primal, tornando-se uma encarnação da destruição. Esta magia amplifica drasticamente a força física e a resistência do usuário, transformando-o em um colosso em batalha, mas ao custo de seu controle tático.",
    advantages: [
      "Concede um bônus massivo ao dano físico.",
      "Aumenta a capacidade de sobrevivência com Pontos de Vida temporários.",
      "Concede imunidade a medo e intimidação."
    ],
    powers: "O conjurador gasta 1 PA para ativar a fúria. A magia dura 3 turnos.\nAo ativar, o conjurador ganha Pontos de Vida temporários iguais ao seu atributo Vigor x 3. (Estes são os primeiros HPs a serem perdidos).\nO ATAQUE FÍSICO TOTAL do conjurador recebe um bônus de +10.\nO conjurador fica imune a efeitos de medo e não pode ser Intimidado.\nEfeito Colateral (Desvantagem): Enquanto estiver em fúria, o conjurador sofre uma penalidade de -5 em sua ESQUIVA TOTAL.\nEfeito Colateral (Desvantagem): O conjurador deve usar sua ação principal (gastar pelo menos 1 PA) para atacar a criatura mais próxima em seu turno. Se a criatura mais próxima for um aliado, ele deve fazer um teste de Força de Vontade para redirecionar o ataque (mas ainda deve atacar alguém).",
    disadvantages: [
      "Custo de MP muito alto.",
      "Perda de controle tático (forçado a atacar o alvo mais próximo).",
      "Grande penalidade na esquiva, tornando o conjurador um alvo fácil (dependendo dos HPs temporários para sobreviver).",
      "A magia não pode ser encerrada voluntariamente antes dos 3 turnos."
    ],
    damage: "Nenhum (Modifica status e dano de ataques)",
    mpCost: "16",
    castingTurns: 1,
    range: "Pessoal",
    purchasePoints: 15,
    raceBonuses: [
      { race: "Minotauro", modifier: "Bônus de -4 Pontos (Custo final: 11)" },
      { race: "Orc", modifier: "Bônus de -3 Pontos (Custo final: 12)" },
      { race: "Anão", modifier: "Bônus de -1 Ponto (Custo final: 14)" },
      { race: "Elfo", modifier: "Penalidade de +3 Pontos (Custo final: 18)" },
      { race: "Gnomo", modifier: "Penalidade de +4 Pontos (Custo final: 19)" }
    ]
  },
  {
    name: "Manto da Invisibilidade Efêmera",
    imageUrl: "https://live.staticflickr.com/65535/54912705966_cbb6e2232c_n.jpg",
    summary: "O conjurador tece as sombras ao seu redor, tornando-se uma figura espectral e quase invisível. Esta magia permite um movimento furtivo sem igual, ideal para se infiltrar em locais protegidos, desaparecer da vista de inimigos ou realizar ataques mortais de surpresa. A invisibilidade é fugaz, mas o suficiente para mudar o curso de um confronto.",
    advantages: [
      "Proporciona invisibilidade completa para se mover sem ser detectado.",
      "Permite posicionamento tático e ataques com vantagem.",
      "Ajuda a escapar de situações de perigo."
    ],
    powers: "O conjurador gasta 1 PA para ativar a magia. Pelos próximos 2 turnos, o conjurador fica \"Invisível\".\nEnquanto invisível, inimigos têm desvantagem em testes de Percepção para detectá-lo.\nO primeiro ataque físico que o conjurador realizar enquanto invisível tem Vantagem (rola 2d10 e pega o melhor resultado) no Teste de Acerto (Fase 1).\nSe o conjurador for descoberto (atacado ou falhar em um teste de furtividade), a invisibilidade é perdida.\nA invisibilidade também é perdida se o conjurador atacar.",
    disadvantages: [
      "Custo de MP moderado.",
      "A invisibilidade é quebrada ao atacar, exigindo planejamento.",
      "Inimigos com visão no escuro aprimorada ou sentidos aguçados podem ter mais facilidade para detectar o conjurador.",
      "Magias de área de efeito ainda podem atingir o conjurador invisível."
    ],
    damage: "Nenhum (modifica o ataque)",
    mpCost: "7",
    castingTurns: 1,
    range: "Pessoal",
    purchasePoints: 8,
    raceBonuses: [
      { race: "Espreitador das Sombras", modifier: "Bônus de -3 Pontos (Custo final: 5)" },
      { race: "Gnomo", modifier: "Bônus de -2 Pontos (Custo final: 6)" },
      { race: "Elfo", modifier: "Bônus de -1 Ponto (Custo final: 7)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 8)" },
      { race: "Orc/Minotauro", modifier: "Penalidade de +3 Pontos (Custo final: 11)" }
    ]
  },
  {
    name: "Abraço da Sombra Vazia",
    imageUrl: "https://live.staticflickr.com/65535/54912685351_6e60583f45_n.jpg",
    summary: "O conjurador mergulha completamente na essência das sombras, tornando-se uma criatura de penumbra pura. Ele desaparece do plano material por um breve instante, ressurgindo de repente para desferir um golpe fatal que drena a vitalidade do alvo. Esta magia é uma técnica de assassinato avançada, capaz de eliminar os inimigos mais resistentes antes que percebam o que os atingiu.",
    advantages: [
      "Permite um teletransporte instantâneo e invisível para se aproximar do alvo.",
      "Causa dano massivo e tem um componente de \"drenagem de vida\", aumentando a sobrevivência do conjurador.",
      "Praticamente impossível de ser evitada, garantindo o acerto."
    ],
    powers: "O conjurador gasta 1 PA para ativar a magia. Ele desaparece instantaneamente e reaparece adjacente a qualquer inimigo visível dentro do alcance de 15 metros.\nNo mesmo turno, o conjurador pode realizar um único Ataque Físico contra o alvo escolhido. Este ataque:\nÉ um Sucesso Absoluto (acerta automaticamente, ignorando testes de esquiva).\nCausa +4d8 de Dano Mágico de Sombra adicional.\nO conjurador recupera Pontos de Vida iguais à metade do dano total causado por este ataque.\nApós o ataque, o conjurador pode escolher reaparecer em qualquer ponto dentro de 5 metros do alvo atacado (sem provocar ataques de oportunidade).\nA magia não pode ser interrompida por dano durante a conjuração (já que o conjurador está fora do plano material).",
    disadvantages: [
      "Custo de MP extremamente alto, reservado para momentos cruciais.",
      "Embora poderoso, é um ataque focado em um único alvo.",
      "O teletransporte tem um alcance limitado, exigindo que o alvo esteja visível.",
      "Não oferece controle de grupo ou benefícios defensivos após o ataque."
    ],
    damage: "+4d8 (Mágico de Sombra) no ataque físico.",
    mpCost: "18",
    castingTurns: 1,
    range: "Teletransporte de 15 metros.",
    purchasePoints: 16,
    raceBonuses: [
      { race: "Espreitador das Sombras", modifier: "Bônus de -5 Pontos (Custo final: 11)" },
      { race: "Gnomo/Goblin", modifier: "Bônus de -2 Pontos (Custo final: 14)" },
      { race: "Elfo", modifier: "Bônus de -1 Ponto (Custo final: 15)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 16)" },
      { race: "Draconato/Minotauro/Orc", modifier: "Penalidade de +4 Pontos (Custo final: 20)" }
    ]
  },
  {
    name: "Mão Gélida de Niflheim",
    imageUrl: "https://live.staticflickr.com/65535/54913081740_e3616a6801_w.jpg",
    summary: "O conjurador manifesta uma mão espectral feita de gelo e bruma, que se estende para agarrar um inimigo. O toque desta mão gélida paralisa o corpo e a mente, drenando a vitalidade e congelando os movimentos do alvo, deixando-o vulnerável.",
    advantages: [
      "Causa dano e uma condição debilitante forte (Paralisado).",
      "Ideal para controle de um único alvo perigoso.",
      "A drenagem de MP adicional pode desabilitar conjuradores inimigos."
    ],
    powers: "O conjurador escolhe um alvo visível dentro do alcance.\nO alvo deve fazer um teste de Vigor.\nSe o alvo falhar no teste, ele sofre 3d6 de Dano Mágico de Gelo e fica \"Paralisado\" por 1 turno.\nEnquanto paralisado, o alvo não pode realizar ações nem se mover, e todos os ataques físicos contra ele recebem Vantagem (rolam 2d10 e pegam o melhor resultado).\nAlém disso, se o alvo for um conjurador e falhar no teste de Vigor, ele perde 2 MP adicionais.",
    disadvantages: [
      "Magia focada em um único alvo.",
      "Custo de MP moderado.",
      "Inimigos com alto Vigor podem resistir à paralisia.",
      "A paralisia dura apenas um turno, exigindo coordenação com aliados."
    ],
    damage: "3d6 (Mágico de Gelo)",
    mpCost: "9",
    castingTurns: 1,
    range: "10 metros",
    purchasePoints: 10,
    raceBonuses: [
      { race: "Anão", modifier: "Bônus de -2 Pontos (Custo final: 8)" },
      { race: "Draconato (Gelo)", modifier: "Bônus de -3 Pontos (Custo final: 7)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 10)" },
      { race: "Tiefling", modifier: "Penalidade de +2 Pontos (Custo final: 12)" }
    ]
  },
  {
    name: "Muralha de Espinhos Crystalline",
    imageUrl: "https://live.staticflickr.com/65535/54913147865_fe3d890959_n.jpg",
    summary: "O conjurador invoca uma barreira intransponível de cristal afiado e cintilante que irrompe do chão. Esta muralha serve como defesa tática, bloqueando o avanço inimigo, fornecendo cobertura ou dividindo o campo de batalha. Qualquer um que tente atravessá-la ou destruí-la sofre as consequências de seus espinhos cortantes.",
    advantages: [
      "Excelente para controle de área e táticas defensivas.",
      "Causa dano a inimigos que tentam interagir com ela.",
      "Pode dividir o campo de batalha, isolando inimigos ou protegendo aliados."
    ],
    powers: "O conjurador gasta 1 PA e escolhe uma linha reta de até 6 metros de comprimento e 1 metro de espessura dentro do alcance.\nUma muralha de cristal aparece, com altura de 3 metros, em qualquer superfície que possa suportá-la.\nA muralha bloqueia linha de visão e movimento.\nQualquer criatura que tente atravessar a muralha (subindo, quebrando, etc.) sofre 2d6 de Dano Cortante.\nA muralha tem 20 HP e uma Defesa Total de 15. Uma vez destruída, ela se desfaz em pó.\nA muralha dura por 3 turnos ou até ser destruída.",
    disadvantages: [
      "Imóvel após a conjuração.",
      "Pode bloquear aliados se não for posicionada com cuidado.",
      "Custo de MP moderado a alto.",
      "Inimigos com alto dano podem destruí-la rapidamente."
    ],
    damage: "2d6 (Cortante) para quem interage.",
    mpCost: "12",
    castingTurns: 1,
    range: "15 metros",
    purchasePoints: 11,
    raceBonuses: [
      { race: "Anão", modifier: "Bônus de -3 Pontos (Custo final: 8)" },
      { race: "Gnomo", modifier: "Bônus de -1 Ponto (Custo final: 10)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 11)" },
      { race: "Orc", modifier: "Penalidade de +2 Pontos (Custo final: 13)" }
    ]
  },
  {
    name: "Canto do Bosque Ancestral",
    imageUrl: "https://live.staticflickr.com/65535/54913250575_f20de0614a_n.jpg",
    summary: "O conjurador entoa uma melodia antiga e serena que ecoa pelos corações de seus aliados, enchendo-os de coragem e curando seus ferimentos leves. É uma magia de suporte poderosa, canalizando a vitalidade e a resiliência da natureza para fortalecer aqueles que lutam ao lado do conjurador.",
    advantages: [
      "Cura múltiplos aliados em área.",
      "Concede bônus de combate importante para os aliados.",
      "Magia de suporte que pode mudar o curso de uma batalha."
    ],
    powers: "O conjurador gasta 1 PA para conjurar a melodia. A magia afeta o próprio conjurador e até 3 aliados visíveis dentro do alcance.\nCada alvo afetado recupera 2d6 Pontos de Vida.\nAlém da cura, cada alvo afetado recebe um bônus de +2 no seu ATAQUE FÍSICO TOTAL e +2 na sua DEFESA TOTAL pelo próximo turno.\nO efeito se dissipa após 1 turno, ou se o conjurador for interrompido (receber dano, ficar paralisado, etc.).",
    disadvantages: [
      "Não causa dano.",
      "Custo de MP moderado, mas para cura em área é eficiente.",
      "A efetividade é maior quando há múltiplos aliados próximos.",
      "O conjurador deve se manter seguro para que a magia não seja interrompida."
    ],
    damage: "Nenhum (Cura e Bônus)",
    mpCost: "10",
    castingTurns: 1,
    range: "10 metros",
    purchasePoints: 12,
    raceBonuses: [
      { race: "Elfo", modifier: "Bônus de -3 Pontos (Custo final: 9)" },
      { race: "Gnomo/Halfling", modifier: "Bônus de -1 Ponto (Custo final: 11)" },
      { race: "Humano", modifier: "Sem bônus/penalidade (Custo final: 12)" },
      { race: "Orc/Minotauro", modifier: "Penalidade de +3 Pontos (Custo final: 15)" }
    ]
  }
];