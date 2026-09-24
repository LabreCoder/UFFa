import {
  ProblemChannel,
  ResearchStep,
  CsdData,
  CompetitorGroup,
  EmpathyQuadrant,
  ResearchProfile,
  NextStepItem,
} from "../types";

export const PROBLEM_CHANNELS: ProblemChannel[] = [
  { icon: "💬", label: "Grupos de WhatsApp", desc: "Turmas, DCE, grupos de departamento" },
  { icon: "🏢", label: "Portaria e Segurança", desc: "Ponto físico de entrega e registro" },
  { icon: "📋", label: "Secretaria", desc: "Comunicação formal interna" },
  { icon: "📌", label: "Achados e Perdidos", desc: "Quando existe — localização variável" },
  { icon: "👥", label: "Colegas e Professores", desc: "Redes pessoais e de confiança" },
  { icon: "📱", label: "Redes Sociais", desc: "Instagram, Facebook, grupos abertos" },
];

export const RESEARCH_STEPS: ResearchStep[] = [
  {
    label: "Análise da Situação Atual",
    desc: "Mapeamento do contexto e dos atores envolvidos no processo de achados e perdidos nos campi.",
    done: true,
  },
  {
    label: "Matriz CSD",
    desc: "Organização das certezas, suposições e dúvidas do grupo sobre o problema.",
    done: true,
  },
  {
    label: "How Might We (Como Poderíamos?)",
    desc: "Reformulação das principais dores e desafios em perguntas norteadoras de oportunidade para orientar a geração de soluções.",
    done: true,
  },
  {
    label: "Análise Competitiva",
    desc: "Estudo de soluções existentes — diretas, indiretas e inspiradoras.",
    done: true,
  },
  {
    label: "Mapa de Empatia",
    desc: "Hipóteses sobre o que o usuário faz, fala, pensa e sente nessa situação.",
    done: true,
  },
  {
    label: "Roteiro de Entrevistas & Questionário",
    desc: "Instrumento semiestruturado definido para quem perdeu, encontrou, docentes, técnicos e atendentes, acompanhado do questionário quantitativo.",
    done: true,
  },
  {
    label: "Coleta Quantitativa",
    desc: "Aplicação e distribuição do questionário estruturado para obter escala e dados estatísticos.",
    done: true,
  },
  {
    label: "Entrevistas em Profundidade",
    desc: "Realização de conversas qualitativas semiestruturadas com os perfis para aprofundar narrativas e mapear gargalos reais.",
    done: false,
  },
];

// Matriz inicial (Antes da consultoria)
export const CSD_DATA: CsdData = {
  certezas: [
    "É uma dor dos alunos da UFF",
    "É necessário um canal de divulgação da nossa solução",
    "Há muita desinformação sobre como recuperar objetos perdidos",
    "Há muita desinformação sobre como devolver objetos achados",
    "O projeto tem como objetivo facilitar a conexão entre quem perdeu e quem encontrou um objeto",
    "A plataforma pode possuir filtros por campus, categoria e período",
    "O sistema pode registrar data e local onde o objeto foi encontrado/perdido",
    "A plataforma poderia permitir o cadastro de objetos perdidos e encontrados",
  ],
  suposicoes: [
    "Muitos objetos perdidos dentro da universidade não são recuperados",
    "Atualmente, os usuários dependem de grupos de WhatsApp, Instagram ou comunicação informal para procurar objetos",
    "A falta de uma plataforma centralizada dificulta a localização dos objetos",
    "Fotos dos objetos ajudariam bastante na identificação",
    "Gamificação ou recompensas poderiam incentivar pessoas a devolverem objetos",
  ],
  duvidas: [
    "Quem são os concorrentes?",
    "Como garantir a segurança da entrega ser feita ao verdadeiro dono?",
    "Há alguma barreira legal que impeça os objetos encontrados a serem doados após muito tempo guardado?",
    "A UFF aceitaria disponibilizar um local para armazenar os objetos?",
    "Como atrair as pessoas para essa implementação?",
    "Como funciona o processo atual na faculdade para quem perde e acha objetos pelo campus?",
    "Como lidar com objetos de alto valor encontrados?",
  ],
};

// Matriz refinada após a consultoria com as correções (certezas com links de embasamento)
export const CSD_DATA_AFTER = {
  suposicoes: [...CSD_DATA.suposicoes],
  duvidas: [...CSD_DATA.duvidas],
  certezas: [
    {
      texto: "É uma dor dos alunos da UFF",
      link: {
        rotulo: "Relatos e discussões discentes",
        url: "https://www.uff.br",
      },
    },
    {
      texto: "É necessário um canal de divulgação da nossa solução",
      link: {
        rotulo: "Diretrizes de comunicação UFF",
        url: "https://www.uff.br/comunicacao",
      },
    },
    {
      texto: "Há muita desinformação sobre como recuperar objetos perdidos",
      link: {
        rotulo: "Mapeamento dos postos de atendimento",
        url: "https://www.uff.br",
      },
    },
    {
      texto: "Há muita desinformação sobre como devolver objetos achados",
      link: {
        rotulo: "Normas de recolha e devolução",
        url: "https://www.uff.br",
      },
    },
    {
      texto: "O projeto tem como objetivo facilitar a conexão entre quem perdeu e quem encontrou um objeto",
      link: {
        rotulo: "Declaração de escopo e proposta de valor",
        url: "https://www.uff.br",
      },
    },
    {
      texto: "A plataforma pode possuir filtros por campus, categoria e período",
      link: {
        rotulo: "Requisitos funcionais de busca",
        url: "https://www.uff.br",
      },
    },
    {
      texto: "O sistema pode registrar data e local onde o objeto foi encontrado/perdido",
      link: {
        rotulo: "Estrutura geográfica dos campi",
        url: "https://www.uff.br/campi",
      },
    },
    {
      texto: "A plataforma poderia permitir o cadastro de objetos perdidos e encontrados",
      link: {
        rotulo: "Benchmark e arquitetura de formulários",
        url: "https://www.uff.br",
      },
    },
  ],
};

export const CSD_COMPARATIVE = {
  before: CSD_DATA,
  after: CSD_DATA_AFTER,
};

export const COMPETITORS: CompetitorGroup[] = [
  {
    group: "Diretos",
    color: "uffa-coral",
    bg: "bg-uffa-coral/10",
    border: "border-uffa-coral/25",
    dot: "bg-uffa-coral",
    items: [
      { name: "ACHUSP / Unicamp Serviços", obs: "Sistemas institucionais de universidades públicas com processos formalizados" },
      { name: "UniFind / Perdi Mas Achei", obs: "Plataformas web para registro de perdas e achados em geral" },
      { name: "Finder", obs: "App móvel com matching entre perda e achado e contato mediado" },
    ],
  },
  {
    group: "Indiretos",
    color: "uffa-blue",
    bg: "bg-uffa-blue/8",
    border: "border-uffa-blue/20",
    dot: "bg-uffa-blue",
    items: [
      { name: "WhatsApp / Facebook", obs: "Grupos informais — alto alcance, baixa organização e sem histórico" },
      { name: "Marketplace / Classificados", obs: "OLX, Mercado Livre — usados por vezes para recuperar itens vendidos indevidamente" },
    ],
  },
  {
    group: "Inspiradores",
    color: "uffa-yellow",
    bg: "bg-uffa-gold/15",
    border: "border-uffa-gold/40",
    dot: "bg-amber-400",
    items: [
      { name: "Tinder", obs: "Modelo de match bilateral — potencial para conectar perda e achado de forma eficiente" },
      { name: "Waze", obs: "Atualização colaborativa em tempo real — prova social e confiança distribuída" },
    ],
  },
];

export const OPPORTUNITIES: string[] = [
  "Busca e histórico de registros",
  "Contato protegido entre as partes",
  "Localização no campus (mapa/pin)",
  "Prova social e reputação",
  "Match automático perdido ↔ achado",
  "Atualização colaborativa de status",
];

export const EMPATHY_DATA: EmpathyQuadrant[] = [
  {
    quadrant: "FAZ",
    icon: "⚡",
    color: "bg-uffa-blue/10 border-uffa-blue/20",
    header: "text-uffa-blue",
    items: [
      "Procura no achados e perdidos do D.A",
      "Envia em um grupo do WhatsApp",
      "Envia um email para a secretaria",
      "Identifica os objetos e se identifica",
      "Fala com os colegas",
      "Procura no achados e perdidos",
      "Onde encontrar?",
      "Deixa na portaria",
      "Fala com o professor",
      "Pergunta ao segurança",
      "Deixa com o professor",
      "Envia no Classroom e pra coordenação",
    ],
  },
  {
    quadrant: "FALA",
    icon: "💬",
    color: "bg-uffa-gold/20 border-uffa-gold/40",
    header: "text-uffa-gold",
    items: [
      "Não conseguem encontrar",
      '"Me dei mal!"',
      '"Já era!"',
      "Deixa no local que achou",
      "Falta de comunicação",
      "Desorganização geral",
      "Falta de informações",
      "Medo de ser furtado",
      "Procura o achados e perdidos",
    ],
  },
  {
    quadrant: "PENSA",
    icon: "💭",
    color: "bg-uffa-tractorgreen/10 border-uffa-tractorgreen/25",
    header: "text-uffa-tractorgreen",
    items: [
      "Mais divulgação",
      "Pedir documento e registrar quem pegou",
      "Bagunça",
      "Mais informações",
      "Descrever o item",
      "Onde encontrar?",
      "Indiferença e descaso",
      "Guardar em uma sala",
      "Falta de controle e de sistema",
    ],
  },
  {
    quadrant: "SENTE",
    icon: "❤️",
    color: "bg-uffa-coral/10 border-uffa-coral/20",
    header: "text-uffa-coral",
    items: [
      "Triste e frustrado",
      "Estresse",
      "Medo",
      "Raiva com o excesso de burocracia",
      "Insegurança",
      "Chateação",
      "Ser roubado",
      "Deprimido",
      "Desespero e revolta com o descaso",
      '"Se for uma caneta, me sinto normal, mas um celular…"',
    ],
  },
];

export const RESEARCH_PROFILES: ResearchProfile[] = [
  { label: "Quem perdeu um objeto", icon: "😟", desc: "Experiência de perda, canais usados, emoções, desfecho" },
  { label: "Quem encontrou um objeto", icon: "🔍", desc: "Comportamento ao encontrar, motivação para devolver, barreiras" },
  { label: "Docentes e técnicos", icon: "🏫", desc: "Rotinas de departamento, como lidam com objetos deixados" },
  { label: "Atendentes de ocorrências", icon: "🛡️", desc: "Portaria, segurança — processo atual e dificuldades" },
];

export const QUESTIONNAIRE_TOPICS = [
  { label: "Frequência de perda/achado", sub: "Com que frequência as pessoas passam por isso?" },
  { label: "Canais utilizados", sub: "Quais meios são mais usados e percebidos como eficazes?" },
  { label: "Barreiras de confiança", sub: "O que impede as pessoas de entregar ou reclamar objetos?" },
  { label: "Disposição para uso de app", sub: "Há interesse em uma solução digital centralizada?" },
];

export const NEXT_STEPS: NextStepItem[] = [
  {
    num: "01",
    label: "Realizar entrevistas e piloto",
    desc: "Conduzir as entrevistas semiestruturadas com os quatro perfis definidos e validar o roteiro com um piloto.",
  },
  {
    num: "02",
    label: "Aplicar questionário",
    desc: "Distribuir o questionário quantitativo na comunidade UFF e coletar respostas em escala.",
  },
  {
    num: "03",
    label: "Analisar dados coletados",
    desc: "Transcrição, codificação e análise qualitativa e quantitativa dos dados de campo.",
  },
  {
    num: "04",
    label: "Sintetizar necessidades e oportunidades",
    desc: "Transformar os dados em insights acionáveis: personas, jornadas, requisitos de design.",
  },
  {
    num: "05",
    label: "Propor a solução UFFa",
    desc: "Com base na síntese, projetar e prototipar a solução que dá nome ao projeto.",
  },
];