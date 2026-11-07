import { Technique } from "../types";

// Respostas às perguntas da Etapa 2. Toda evidência vem do protótipo
// (https://salt-spec-60265852.figma.site/), das personas e da pesquisa da Etapa 1.
export const TECHNIQUES: Record<string, Technique> = {
  fitts: {
    id: "fitts",
    label: "Lei de Fitts",
    question: "O grupo aplicou a Lei de Fitts em alguma parte do design?",
    answer:
      "Sim. O tempo para tocar em um alvo depende do tamanho dele e da distância. Por isso, as ações principais são grandes e ficam perto do polegar.",
    evidence: [
      "Botões e campos de texto com no mínimo 56 px de altura; o botão \"Salvar e gerar QR Code\" do balcão tem 64 px.",
      "Menu de navegação fixo na parte de baixo do celular, com itens de 64 px de altura. No tablet, ele vira uma barra lateral.",
      "No Início, \"Perdi algo\" e \"Achei algo\" são os maiores alvos da tela.",
      "Alvos secundários nunca ficam abaixo de 44 px, como o botão \"Equipe\" e o botão de fechar (48 px).",
    ],
  },
  hick: {
    id: "hick",
    label: "Lei de Hick-Hyman",
    question: "O grupo aplicou a Lei de Hick-Hyman em alguma parte do design?",
    answer:
      "Sim. O tempo de decisão cresce com o número de opções. Por isso, cada tela oferece poucas escolhas e divide as tarefas em passos curtos.",
    evidence: [
      "Menu com apenas 4 itens: Início, Catálogo, Meus registros e Locais.",
      "O Início tem 2 ações principais (\"Perdi algo\" e \"Achei algo\") e 1 secundária (buscar).",
      "\"Perdi algo\" tem 2 perguntas e 1 botão. \"Achei algo\" tem 3 passos numerados.",
      "A área da Equipe tem 3 abas (Cadastro, Movimentar e Pedidos), e a avaliação de um pedido tem 3 decisões (aprovar, pedir mais detalhes ou recusar).",
      "O catálogo reduz as opções com filtros por categoria e por campus.",
    ],
  },
  uxwriting: {
    id: "uxwriting",
    label: "UX Writing e CTA",
    question: "A prototipação atende às regras de UX Writing e do CTA perfeito?",
    answer:
      "Em grande parte. O protótipo segue as quatro regras: linguagem familiar, CTA específico, feedback e textos curtos. Há dois pontos a melhorar, indicados abaixo.",
    evidence: [
      "1. Linguagem clara e familiar: \"Perdi algo\", \"Achei algo\", \"É meu\" e \"Ver onde entregar\" usam palavras do dia a dia.",
      "2. CTA específico: \"Ver itens compatíveis\", \"Ver onde entregar\", \"Vou entregar agora\", \"Salvar e gerar QR Code\", \"Aprovar Devolução\" e \"Mostrar QR de retirada\" dizem o que acontece ao tocar.",
      "3. Feedback: tela \"Pedido enviado\" com a orientação \"Se aprovado, retire em [local] com documento.\", \"Salvo em Xs\" no balcão, contador \"Faltam X caracteres (mín. Y)\" e erros como \"SIAPE ou senha incorretos.\" e \"Código inválido. Formato: UF-0000\".",
      "4. Simplicidade: textos curtos, duas ações principais no Início e apoio de uma linha, como \"Só a Equipe acessa seus dados\".",
      "A melhorar (regra 2): \"Enviar pedido\" é mais genérico do que, por exemplo, \"Pedir devolução\".",
      "A melhorar (regra 1): \"custódia\" aparece em telas do aluno (\"sob custódia\" e \"Histórico de custódia\") e é um termo mais técnico. \"Guardado em\" seria mais familiar.",
    ],
  },
  competitiva: {
    id: "competitiva",
    label: "Análise competitiva",
    question: "A prototipação usou ideias da análise competitiva e inspiradora?",
    answer: "Sim. Algumas ideias foram aplicadas, uma foi aplicada em parte e outras ficaram de fora de propósito.",
    evidence: [
      "ACHUSP: o Início mostra a quantidade de itens devolvidos como prova social.",
      "Unicamp Serviços: acesso por link, sem instalar nada e sem login para a comunidade (só a matrícula nos pedidos).",
      "Grupos de WhatsApp: catálogo com busca, filtros e histórico do item, o que os grupos não têm.",
      "Tinder: aplicado em parte, como detalhado na Ideação.",
      "Finder: o mapa não foi usado. A orientação é só por texto, com o nome e o endereço dos locais.",
      "Waze: não aplicado, porque o status do item é controlado pela Equipe.",
    ],
  },
  gestalt: {
    id: "gestalt",
    label: "Gestalt e cores",
    question: "O design usou princípios de Gestalt e a psicologia das cores?",
    answer:
      "Sim. A organização visual segue princípios de Gestalt, e a paleta busca transmitir calma, confiança e seriedade institucional.",
    evidence: [
      "Proximidade: o cartão \"Retirar em\" agrupa local, endereço, horário e selo de aberto ou fechado.",
      "Similaridade: botões principais sempre na mesma cor, e selos de status com o mesmo formato.",
      "Continuidade: a linha do tempo do item é uma linha vertical que liga cada passagem.",
      "Figura e fundo: cartões brancos sobre o fundo bege claro.",
      "Cor principal verde-azulado escuro (#004B57) e texto azul-marinho (#0A1828), pela sensação de confiança e seriedade.",
      "Fundo bege claro (#F7F4EE) para um ambiente calmo e sem aparência de mural de classificados.",
      "Vermelho reservado a erro, recusa e local fechado; âmbar para \"fecha em breve\". O selo de horário sempre traz texto além da cor.",
    ],
  },
  artefatos: {
    id: "artefatos",
    label: "Artefatos interativos",
    question: "Quais recursos o grupo prototipou para alcançar as metas de design?",
    answer: "Cada recurso responde a uma dor das personas, vinda da pesquisa da Etapa 1.",
    evidence: [
      "C3 e C6, aluno sem saber onde entregar: tela Locais e \"Onde entregar\", com horário e selo de aberto ou fechado.",
      "C6, aluno sem saber se o item chegou ao dono: Meus registros com o status do pedido e histórico de custódia.",
      "C5, aluno precisa recuperar com segurança: catálogo sem foto, prova de posse e QR de retirada.",
      "C1, atendente com o balcão cheio e sem registro: cadastro ultrarrápido com cronômetro e etiqueta com QR.",
      "C5, atendente entrega sem comprovante: avaliação do pedido e \"Registrar entrega ao dono\" depois de conferir o documento.",
      "C4, porteiro repassa sem rastro: Movimentar com leitor de QR e \"Registrar transferência\", que atualiza a linha do tempo.",
    ],
  },
  segmentacao: {
    id: "segmentacao",
    label: "Segmentação de personas",
    question: "Quantas personas o grupo criou e qual foi o critério de segmentação?",
    answer:
      "Três personas: Atendente da Secretaria, Porteiro e Aluno. O critério foi o papel de cada pessoa na cadeia do objeto.",
    evidence: [
      "Atendente da Secretaria: o custodiante, quem guarda e devolve.",
      "Porteiro: a triagem, quem recebe e encaminha.",
      "Aluno: o dono e quem encontra.",
      "Cada persona tem uma fonte de pesquisa própria: entrevistas (Atendente e Porteiro) e questionário (Aluno).",
    ],
  },
  personasCenarios: {
    id: "personasCenarios",
    label: "Personas e cenários",
    question: "Para que servem personas e cenários-problema?",
    answer:
      "Personas representam usuários típicos, com objetivos e dores baseados em dados. Cenários-problema mostram situações reais em que o processo atual falha.",
    evidence: [
      "Personas evitam projetar para um usuário imaginário e ajudam a decidir o design pelas necessidades reais.",
      "Cenários mostram onde o sistema precisa ganhar clareza, segurança e rastreabilidade.",
      "Neste projeto, os 6 cenários (C1 a C6) deram origem às tarefas de cada persona e aos recursos do protótipo.",
    ],
  },
  cognitiva: {
    id: "cognitiva",
    label: "Engenharia Cognitiva",
    question: "Como o grupo aplicou a Engenharia Cognitiva no design?",
    answer:
      "Aplicamos os princípios de design de Don Norman, que ajudam o usuário a saber o que fazer e a entender o que aconteceu.",
    evidence: [
      "Visibilidade: o Início mostra as duas ações principais e os locais abertos agora, sem menus escondidos.",
      "Feedback: tela \"Pedido enviado\" com protocolo, contador de caracteres e o aviso \"Salvo em Xs\" no balcão.",
      "Restrições: o botão \"Enviar pedido\" só é liberado com a descrição mínima e a matrícula válida.",
      "Mapeamento: o ícone e o nome de cada categoria representam o objeto de forma direta.",
      "Consistência: os mesmos botões, selos e linha do tempo são usados nas telas da Comunidade e da Equipe.",
      "Affordance: botões grandes e com ícone indicam que podem ser tocados.",
    ],
  },
  semiotica: {
    id: "semiotica",
    label: "Engenharia Semiótica",
    question: "Como o grupo aplicou a Engenharia Semiótica no design?",
    answer:
      "A interface funciona como uma conversa do designer com o usuário: ela explica a intenção do sistema e o motivo de cada regra.",
    evidence: [
      "Mensagem de boas-vindas que diz o propósito do sistema: \"Perdeu ou achou? A gente devolve.\"",
      "Explicação de uma restrição: \"Foto e detalhes só após aprovação\" mostra por que a foto não aparece.",
      "Explicação do recurso: \"Mesmo código da etiqueta\" e \"Identifica o objeto em qualquer balcão, mesmo se ele mudar de local\".",
      "Orientação do próximo passo: \"Cole a etiqueta no objeto. O QR também abre o histórico digital.\"",
    ],
  },
};
