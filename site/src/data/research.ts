import {
  ProblemChannel,
  ResearchStep,
  CsdData,
  CompetitorGroup,
  EmpathyQuadrant,
  ResearchProfile,
  NextStepItem,
} from "../types";

// PROBLEM \\
// Dados de pesquisa relacionados ao problema de achados e perdidos na UFF
export const PROBLEM_CHANNELS: ProblemChannel[] = [
  { icon: "💬", label: "Grupos de WhatsApp", desc: "Turmas, DCE, grupos de departamento" },
  { icon: "🏢", label: "Portaria e Segurança", desc: "Ponto físico de entrega e registro" },
  { icon: "📋", label: "Secretaria", desc: "Comunicação formal interna" },
  { icon: "📌", label: "Achados e Perdidos", desc: "Quando existe — localização variável" },
  { icon: "👥", label: "Colegas e Professores", desc: "Redes pessoais e de confiança" },
  { icon: "📱", label: "Redes Sociais", desc: "Instagram, Facebook, grupos abertos" },
];

// ETAPAS DA PESQUISA \\
// Etapas da pesquisa realizadas pelo grupo
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

// CSD MATRIZ \\
// Matriz inicial (Antes da consultoria)
export const CSD_DATA: CsdData = {
  certezas: [
    "É uma dor dos alunos da UFF",
    "É necessário um canal de divulgação da nossa solução",
    "Há muita desinformação sobre como encontrar objetos perdidos",
    "Há muita desinformação sobre como devolver objetos achados",
    "Deve ser um canal simplificado que facilite a conexão de quem perdeu e quem encontrou um objeto",
    "A plataforma pode possuir filtros por campus, categoria e período",
    "O sistema pode registrar data e local onde o objeto foi encontrado/perdido",
    "A solução deve permitir o cadastro de objetos perdidos e encontrados",
  ],
  suposicoes: [
    "Muitos objetos perdidos dentro da universidade não são recuperados",
    "Atualmente, os usuários dependem de grupos de WhatsApp para anunciar os objetos",
    "A falta de um sistema centralizado dificulta a localização dos objetos",
    "Fotos dos objetos ajudariam muito na identificação",
    "Gamificação ou recompensas poderiam incentivar pessoas a devolverem objetos",
    "As pessoas teriam receio de cadastrar objetos de alto valor por medo de assumir responsabilidade",
    "A maioria usaria pelo celular",
  ],
  duvidas: [
    "Quem são os concorrentes?",
    "Como garantir a segurança da entrega ser feita ao verdadeiro dono?",
    "Há alguma barreira legal que impeça os objetos encontrados a serem doados após longo tempo guardado?",
    "A UFF aceitaria disponibilizar um local para armazenar os objetos?",
    "Como atrair as pessoas para essa implementação?",
    "Como a UFF lida com essa dor hoje?",
    "Como lidar com objetos de alto valor encontrados?",
    "Como agir caso duas pessoas diferentes reivindiquem o mesmo objeto?",
    "Por quanto tempo armazenar o objeto perdido?",
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
      texto: "Há muita desinformação sobre como encontrar objetos perdidos",
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
      texto: "Deve ser um canal simplificado que facilite a conexão de quem perdeu e quem encontrou um objeto",
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
      texto: "A solução deve permitir o cadastro de objetos perdidos e encontrados",
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

// ANÁLISE COMPETITIVA \\
// Análise Competitiva Inicial (Antes da consultoria)
export const COMPETITORS: CompetitorGroup[] = [
  {
    group: "Diretos",
    color: "uffa-coral",
    bg: "bg-uffa-red/15",
    border: "border-uffa-coral/25",
    dot: "bg-uffa-red/70",
    items: [
      { name: "ACHUSP / Unicamp Serviços", obs: "Sistemas institucionais de universidades públicas com processos formalizados" },
      { name: "UniFind / Perdi Mas Achei", obs: "Plataformas web para registro de perdas e achados em geral" },
      { name: "Finder", obs: "App móvel com matching entre perda e achado e contato mediado" },
    ],
  },
  {
    group: "Indiretos",
    color: "uffa-blue",
    bg: "bg-uffa-blue/15",
    border: "border-uffa-blue/20",
    dot: "bg-uffa-blue/70",
    items: [
      { name: "WhatsApp / Facebook", obs: "Grupos informais — alto alcance, baixa organização e sem histórico" },
      { name: "Marketplace / Classificados", obs: "OLX, Mercado Livre — usados por vezes para recuperar itens vendidos indevidamente" },
    ],
  },
  {
    group: "Inspiradores",
    color: "uffa-yellow",
    bg: "bg-uffa-yellow/20",
    border: "border-uffa-gold/40",
    dot: "bg-amber-400",
    items: [
      { name: "Tinder", obs: "Modelo de match bilateral — potencial para conectar perda e achado de forma eficiente" },
      { name: "Waze", obs: "Atualização colaborativa em tempo real — prova social e confiança distribuída" },
    ],
  },
];

// Análise Competitiva Refinada (Depois da consultoria - Extraída do PDF com Ideias e Links)
export const COMPETITORS_AFTER = [
  {
    group: "Diretos",
    color: "uffa-coral",
    bg: "bg-uffa-red/15",
    border: "border-uffa-coral/25",
    dot: "bg-uffa-red/70",
    items: [
      {
        name: "ACHUSP (USP)",
        desc: "Sistema web de achados e perdidos criado pelo IME-USP para o campus da Cidade Universitária.",
        positives: "Cadastro simples; seção pública de 'casos resolvidos' gera prova social.",
        negatives: "Cara de projeto acadêmico pontual; sem app mobile; sem busca avançada.",
        designIdea: "Criar uma seção pública de 'casos resolvidos' na home para mostrar prova social e incentivar a confiança.",
        links: [
          { label: "USP Notícias", url: "https://www5.usp.br/noticias/tecnologia-2/ime-desenvolve-site-para-objetos-achados-e-perdidos/" },
        ],
      },
      {
        name: "Achados e Perdidos app 'Unicamp Serviços'",
        desc: "Serviço oficial da universidade com seção dedicada dentro do app institucional de serviços.",
        positives: "Já está dentro de um app que o aluno usa — reduz fricção de adoção.",
        negatives: "Fica 'escondido' dentro de um app genérico; não é o foco principal; descoberta baixa.",
        designIdea: "Avaliar integração com canais que o aluno já usa (ex: portal do aluno) em vez de lançar app isolado.",
        links: [
          { label: "Prefeitura Unicamp", url: "https://prefeitura.unicamp.br/2014/07/24/achados-e-perdidos-conheca-o-servico/" },
          { label: "DAC Explica", url: "https://www.dac.unicamp.br/portal/noticias/2024/04/24/achados-e-perdidos" },
        ],
      },
      {
        name: "UniFind",
        desc: "App genérico voltado a comunidades universitárias para busca e recuperação de itens.",
        positives: "Fluxo claro: foto, descrição, exploração e contato direto mediado dentro do app.",
        negatives: "Não é feito para nenhuma universidade específica, diminuindo a confiança e senso comunitário.",
        designIdea: "Contato direto in-app (sem expor WhatsApp pessoal) entre quem perdeu e quem achou.",
        links: [
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.unifindapp.unifind" },
        ],
      },
      {
        name: "Perdi Mas Achei",
        desc: "Primeira plataforma brasileira de achados e perdidos (site + app) com chat interno.",
        positives: "Login social ágil, busca por texto e inbox estilo chat para negociação protegida.",
        negatives: "Erros de login/logout reportados, ícones pequenos e listagem sem filtro nem ordenação.",
        designIdea: "Manter chat interno protegido sem expor telefone, garantindo filtros e busca sem os bugs do concorrente.",
        links: [
          { label: "TechTudo Sobre", url: "https://www.techtudo.com.br/tudo-sobre/perdi-mas-achei/" },
          { label: "TechTudo Matéria", url: "https://www.techtudo.com.br/noticias/2015/10/site-ajuda-usuarios-encontrar-objetos-perdidos-conheca-perdi-mas-achei.ghtml" },
        ],
      },
      {
        name: "Finder (TCC IFSP Campus Hortolândia)",
        desc: "App acadêmico com geolocalização (GPS) para indicar onde o item foi perdido ou achado.",
        positives: "Mapa exibe ocorrências; formulário se adapta (câmera para 'achado', galeria para 'perdido').",
        negatives: "Protótipo acadêmico inicial, não um produto maduro em produção contínua.",
        designIdea: "Usar mapa do campus com pontos de ocorrência — diferencial de hiperlocalidade para os campi da UFF.",
        links: [
          { label: "TCC IFSP", url: "https://hto.ifsp.edu.br/portal/images/thumbnails/images/IFSP/Cursos/Coord_ADS/Arquivos/TCCs/2017/TCC_Justh_Franklin_Malheiro_Leal_A1420275.pdf" },
        ],
      },
    ],
  },
  {
    group: "Indiretos",
    color: "uffa-blue",
    bg: "bg-uffa-blue/15",
    border: "border-uffa-blue/30",
    dot: "bg-uffa-blue/70",
    items: [
      {
        name: "Grupos de WhatsApp/Facebook por curso ou unidade",
        desc: "Grupos informais já usados pelos alunos da UFF para avisar sobre achados e perdidos.",
        positives: "Já existem, zero fricção de baixar novo app e alcance imediato na turma.",
        negatives: "Fragmentado; publicações se perdem no feed e nada é indexado ou pesquisável com o tempo.",
        designIdea: "Oferecer a barra mínima que os grupos não têm: mecanismo robusto de busca e histórico duradouro.",
        links: [],
      },
      {
        name: "Marketplace / Classificados genéricos (Facebook, OLX)",
        desc: "Plataformas de anúncios onde pontualmente surgem itens achados/perdidos.",
        positives: "Base massiva de usuários com aplicativo já instalado.",
        negatives: "Sem categoria própria, sem verificação de dono e mistura prejudicial com vendas.",
        designIdea: "Contraste de design: criar um ambiente focado e verificado, livre do ruído comercial.",
        links: [],
      },
    ],
  },
  {
    group: "Inspiradores",
    color: "uffa-yellow",
    bg: "bg-uffa-yellow/15",
    border: "border-uffa-gold/40",
    dot: "bg-amber-400",
    items: [
      {
        name: "Apps de Namoro (ex: Tinder)",
        desc: "Plataformas de match entre duas pontas com atributos complementares.",
        positives: "Fluxo ágil e visual (card/foto) com notificação imediata de compatibilidade.",
        negatives: "Modelo de match estético simplifica um processo onde a validação da posse é crítica.",
        designIdea: "Match automático: notificar imediatamente as duas pontas quando um 'perdido' for compatível com um 'achado'.",
        links: [],
      },
      {
        name: "Waze",
        desc: "App colaborativo com dados e alertas gerados pela comunidade em tempo real.",
        positives: "Reporte ultrarrápido geolocalizado com validação e confirmação social da comunidade.",
        negatives: "Depende de volume contínuo de usuários reportando ativamente para se manter relevante.",
        designIdea: "Confirmação social ('essa informação ainda é válida?') com geolocalização dos reportes no campus.",
        links: [],
      },
    ],
  },
];

// OPORTUNIDADES
export const OPPORTUNITIES: string[] = [
  "Busca e histórico de registros",
  "Contato protegido entre as partes",
  "Localização no campus (mapa/pin)",
  "Prova social e reputação",
  "Match automático perdido ↔ achado",
  "Atualização colaborativa de status",
];

// MAPA DE EMPATIA \\
export const EMPATHY_DATA: EmpathyQuadrant[] = [
  {
    quadrant: "FALA",
    icon: "💬",
    color: "bg-uffa-gold/20 border-uffa-gold/40",
    header: "text-uffa-gold",
    questions: [
      "O que seus amigos ou colegas comentam quando perdem ou encontram algo na UFF?",
      "Você já viu ou ouviu alguém reclamando de como é difícil recuperar um item perdido no campus?",
    ],
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
    questions: [
      "Na sua opinião, como a UFF lida hoje com os objetos perdidos e achados?",
      "O que você acha mais importante para confiar em devolver - ou receber de volta - um objeto perdido?",
    ],
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
    questions: [
      "Como você se sente quando perde algo importante na faculdade (documento, celular, chave, material de curso)?",
      "Quais são suas maiores preocupações ou frustrações ao tentar recuperar - ou devolver - um objeto?",
    ],
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
  {
    quadrant: "FAZ",
    icon: "⚡",
    color: "bg-uffa-blue/10 border-uffa-blue/20",
    header: "text-uffa-blue",
    questions: [
      "O que você faz hoje quando perde algo no campus? Por onde você começa a procurar?",
      "Você conhece ou já usou algum grupo, app ou canal espefícifico para achados e perdidos no campus?",
    ],
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
];

// PERFIS DE PESQUISA \\
export const RESEARCH_PROFILES: ResearchProfile[] = [
  { label: "Quem perdeu um objeto", icon: "😟", desc: "Experiência de perda, canais usados, emoções, desfecho" },
  { label: "Quem encontrou um objeto", icon: "🔍", desc: "Comportamento ao encontrar, motivação para devolver, barreiras" },
  { label: "Docentes e técnicos", icon: "🏫", desc: "Rotinas de departamento, como lidam com objetos deixados" },
  { label: "Atendentes de ocorrências", icon: "🛡️", desc: "Portaria, segurança — processo atual e dificuldades" },
];

// TÓPICOS DO QUESTIONÁRIO \\
export const QUESTIONNAIRE_TOPICS = [
  { label: "Frequência de perda/achado", sub: "Com que frequência as pessoas passam por isso?" },
  { label: "Canais utilizados", sub: "Quais meios são mais usados e percebidos como eficazes?" },
  { label: "Barreiras de confiança", sub: "O que impede as pessoas de entregar ou reclamar objetos?" },
  { label: "Disposição para uso de app", sub: "Há interesse em uma solução digital centralizada?" },
];

// PRÓXIMOS PASSOS \\
export const NEXT_STEPS: NextStepItem[] = [
  /*{
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
  },*/
  {
    num: "01",
    label: "Síntese em Personas e Mapas de Empatia Refinados",
    desc: "Estruturar arquétipos fiéis aos papéis identificados em campo: a Secretaria (sobrecarregada com guarda longa e identificação manual), a Portaria (ponto de trânsito rápido e chave de salas) e os Estudantes/Docentes (vítimas do gargalo da troca de turnos).",
  },
  {
    num: "02",
    label: "Mapeamento do Service Blueprint (On/Off-line)",
    desc: "Desenhar a jornada do serviço conectando o suporte físico nos prédios (cartazes informativos, etiquetas físicas com QR Code) à interface digital, garantindo que o fluxo não dependa de digitação burocrática.",
  },
  {
    num: "03",
    label: "Definição dos Requisitos de Qualidade de Interação",
    desc: "Formalizar os critérios de usabilidade e experiência (eficiência de registro em até 2 cliques, rastreabilidade sem ruído e privacidade de dados sensíveis na consulta pública).",
  },
  {
    num: "04",
    label: "Ideação e Prototipação de Baixa Fidelidade",
    desc: "Explorar alternativas conceituais através de esboços e wireframes navegáveis para validar a triagem de itens e o termo digital de entrega antes de avançar para a alta fidelidade.",
  },
];