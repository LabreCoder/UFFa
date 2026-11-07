import { CrazyDiscarded, CrazyFollowed, NavLink, Persona, PrototypeImage, PrototypeView, Scenario, TaskGroup } from "../types";
import alunoInicio from "../assets/etapa2/aluno/inicio.png";
import alunoAcheiAlgo from "../assets/etapa2/aluno/achei-algo.png";
import alunoOndeEntregar from "../assets/etapa2/aluno/onde-entregar.png";
import alunoCatalogo from "../assets/etapa2/aluno/catalogo.png";
import alunoDetalhes from "../assets/etapa2/aluno/detalhes-item.png";
import equipeLogin from "../assets/etapa2/equipe/login.png";
import equipeCadastro from "../assets/etapa2/equipe/cadastro.png";
import equipeAvaliacao from "../assets/etapa2/equipe/avaliacao.png";
import crazyFolha1 from "../assets/etapa2/crazy4/folha-1.png";
import crazyFolha2 from "../assets/etapa2/crazy4/folha-2.jpeg";
import crazyFolha3 from "../assets/etapa2/crazy4/folha-3.png";
import crazyFolha4 from "../assets/etapa2/crazy4/folha-4.png";

export const ETAPA2_NAV_LINKS: NavLink[] = [
  { label: "Cenários", href: "#cenarios" },
  { label: "Personas", href: "#personas" },
  { label: "Tarefas", href: "#tarefas" },
  { label: "Ideação", href: "#ideacao" },
  { label: "Protótipo Digital", href: "#prototipo-digital" },
  { label: "Uso de IA", href: "#uso-de-ia" },
];

// Link do protótipo navegável.
export const FIGMA_PROTOTYPE_URL = "https://salt-spec-60265852.figma.site/";

// Telas do protótipo por visão.
export const PROTOTYPE_VIEWS: PrototypeView[] = [
  {
    id: "aluno",
    title: "Visão do aluno",
    description: "Telas da comunidade: quem perdeu ou achou um objeto, sem precisar de login.",
    images: [
      { title: "Início", caption: "Início: \"Perdi algo\" e \"Achei algo\" em destaque", src: alunoInicio },
      { title: "Achei algo", caption: "Achei algo: categoria e local em poucos passos", src: alunoAcheiAlgo },
      { title: "Onde entregar", caption: "Onde entregar: local, horário e se está aberto", src: alunoOndeEntregar },
      { title: "Catálogo", caption: "Catálogo: busca e filtros por categoria e campus", src: alunoCatalogo },
      { title: "Detalhes do item", caption: "Detalhes: onde retirar, QR Code e histórico do item", src: alunoDetalhes },
    ],
  },
  {
    id: "equipe",
    title: "Visão da equipe",
    description: "Telas de acesso restrito para a equipe que cuida dos objetos perdidos.",
    images: [
      { title: "Login", caption: "Login da equipe", src: equipeLogin },
      { title: "Cadastro", caption: "Cadastro rápido no balcão, com foto sigilosa", src: equipeCadastro },
      { title: "Avaliação", caption: "Avaliação do pedido: aprovar, pedir detalhes ou recusar", src: equipeAvaliacao },
    ],
  },
];

// Folhas do Crazy 4 feitas em sala.
export const CRAZY_IMAGES: PrototypeImage[] = [
  { title: "Folha 1", caption: "Folha 1 do Crazy 4", src: crazyFolha1 },
  { title: "Folha 2", caption: "Folha 2 do Crazy 4", src: crazyFolha2 },
  { title: "Folha 3", caption: "Folha 3 do Crazy 4", src: crazyFolha3 },
  { title: "Folha 4", caption: "Folha 4 do Crazy 4", src: crazyFolha4 },
];

export const PERSONAS: Persona[] = [
  {
    id: "atendente",
    initials: "MA",
    givenName: "Marcos",
    age: 42,
    bio: "Atende o balcão da Secretaria do IC e também guarda os objetos achados, mesmo sem ser sua função formal.",
    name: "Atendente da Secretaria",
    role: "O custodiante",
    basis: "Base: entrevistas P01–P03 (P01 e P02 inferidas a partir de P03)",
    basisTone: "blue",
    scenarios: ["C1", "C5"],
    goal: "Receber, guardar e devolver objetos sem atrapalhar o atendimento principal do balcão.",
    pains: ["Absorve a custódia sem que ela seja seu papel formal."],
  },
  {
    id: "porteiro",
    initials: "SE",
    givenName: "Sérgio",
    age: 51,
    bio: "Trabalha na portaria, recebe quem acha um objeto e o encaminha para a Secretaria.",
    name: "Porteiro",
    role: "A triagem",
    basis: "Base: entrevistas P04–P05",
    basisTone: "blue",
    scenarios: ["C2", "C3", "C4"],
    goal: "Receber o objeto rapidamente e encaminhá-lo ao destino certo.",
    pains: [],
    variation:
      "P04 segura o item por cerca de 1h antes de repassar; P05 repassa de imediato. O objetivo e a dor são os mesmos.",
  },
  {
    id: "aluno",
    initials: "JU",
    givenName: "Júlia",
    age: 21,
    bio: "Graduanda no campus Praia Vermelha, vai à UFF quase todos os dias e resolve tudo pelo celular.",
    name: "Aluno",
    role: "O dono (e quem encontra)",
    basis: "Base: questionário (n = 23)",
    basisTone: "gold",
    scenarios: ["C2", "C3", "C5", "C6"],
    goal: "Saber onde procurar ou entregar um objeto e recuperá-lo com segurança.",
    pains: [
      "Não sabe onde procurar: 5 de 11 que perderam objetos citaram isso.",
      "Só 4 de 11 recuperaram o objeto, todos garrafas; documentos não voltaram.",
      "16 de 23 não sabem, ou não têm certeza, de onde entregar um objeto achado.",
      "10 de 14 que entregaram um objeto não sabem se ele chegou ao dono.",
    ],
    evidence: [
      "22 de 23 são graduandos; 20 de 23 frequentam a Praia Vermelha",
      "18 de 23 vão à UFF de 4 a 7 dias por semana",
      "Preferem acessar por site no celular sem instalação (16 de 23)",
    ],
  },
];

export const SCENARIOS: Scenario[] = [
  {
    code: "C1",
    title: "Balcão cheio",
    persona: "Atendente",
    problem:
      "O item chega no meio da fila e recebe só uma fita com data e local. Não há registro, e o caderno foi abandonado.",
  },
  {
    code: "C2",
    title: "Troca de turno",
    persona: "Aluno / Porteiro",
    problem:
      "Esquece algo em sala, e a sala é trancada. Precisa pedir à portaria que chame o zelador com as chaves.",
  },
  {
    code: "C3",
    title: "Sem saber onde procurar",
    persona: "Aluno / Porteiro",
    problem:
      "O objeto passa da Portaria 02 para a 01 e depois para a Secretaria. O aluno não sabe onde perguntar e descreve o item oralmente.",
  },
  {
    code: "C4",
    title: "Item que repassa sem rastro",
    persona: "Porteiro",
    problem: "Recebe o item, pergunta dados, repassa, e ninguém registra o caminho.",
  },
  {
    code: "C5",
    title: "Retirada sem comprovante",
    persona: "Atendente / Aluno",
    problem:
      "A devolução depende de \"reconhecer e detalhar\". Não há termo de saída, e um erro não deixa evidência.",
  },
  {
    code: "C6",
    title: "Entregou e não soube o fim",
    persona: "Aluno",
    problem:
      "Acha um objeto e o entrega na portaria sem saber se ali é o lugar certo. Depois, não recebe nenhum retorno sobre o desfecho.",
  },
];

export const TASK_GROUPS: TaskGroup[] = [
  {
    persona: "Atendente da Secretaria",
    tasks: [
      "Cadastrar item em até 3 cliques (foto rápida → categoria → local)",
      "Gerar etiqueta/QR code para substituir a fita manuscrita",
      "Registrar a retirada e gerar recibo de saída",
      "Delegar a custódia a um posto centralizador",
    ],
  },
  {
    persona: "Porteiro",
    tasks: [
      "Cadastrar item rapidamente ao receber",
      "Emitir recibo de entrada",
      "Registrar o documento de quem retira",
    ],
  },
  {
    persona: "Aluno",
    tasks: [
      "Navegar pelo catálogo público (apenas foto e categoria)",
      "Reivindicar um item",
      "Comprovar a posse",
      "Retirar o item",
    ],
  },
];

// Crazy 4: 16 ideias do grupo, agrupadas por tema e sem autoria.
export const CRAZY_TOTAL_IDEAS = 16;

export const CRAZY_FOLLOWED: CrazyFollowed[] = [
  {
    title: "Balcão central que confere o dono",
    how: "A Secretaria é o ponto de custódia, e a Equipe aprova a prova de posse antes da retirada.",
    stage1: {
      outcome: "realidade",
      source: "Entrevistas e mapa de empatia",
      note: "A Secretaria já guardava os itens sem registro, e o mapa de empatia pedia \"pedir documento e registrar quem pegou\". No protótipo, a Equipe avalia o pedido e registra a entrega.",
    },
  },
  {
    title: "Pontos de entrega conhecidos",
    how: "A tela Locais e o \"Onde entregar\" mostram o local, o horário e se está aberto.",
    stage1: {
      outcome: "realidade",
      source: "Questionário e mapa de empatia",
      note: "16 de 23 não sabem onde entregar, e \"Onde encontrar?\" aparece duas vezes no mapa de empatia.",
    },
  },
  {
    title: "Etiqueta com QR no lugar da fita",
    how: "O item recebe um QR e um código que abrem o histórico dele.",
    stage1: {
      outcome: "realidade",
      source: "Entrevistas",
      note: "A fita com data e local não deixava rastro, e a equipe sugeriu QR code ou código curto.",
    },
  },
  {
    title: "Rastrear o caminho do objeto",
    how: "Cada item tem uma linha do tempo com o local e o horário de cada passagem.",
    stage1: {
      outcome: "realidade",
      source: "Entrevistas",
      note: "O objeto passava da portaria para a Secretaria sem registro (cenários C3 e C4).",
    },
  },
  {
    title: "Canal único no lugar do grupo de WhatsApp",
    how: "O catálogo oficial tem busca por tipo e local, filtros e histórico do item.",
    stage1: {
      outcome: "realidade",
      source: "Mapa de empatia e análise competitiva",
      note: "Enviar em grupo de WhatsApp é uma ação do mapa de empatia, e os grupos não têm busca nem histórico duradouro.",
    },
  },
  {
    title: "Aviso quando \"perdi\" combina com \"achei\"",
    how: "Versão simples da ideia da IA: \"Perdi algo\" abre o catálogo já filtrado por categoria e campus.",
    stage1: {
      outcome: "expectativa",
      source: "Análise competitiva (Tinder)",
      note: "A notificação automática de compatibilidade não está no protótipo. Hoje a pessoa precisa consultar o catálogo.",
    },
  },
];

export const CRAZY_NOT_FOLLOWED: CrazyDiscarded[] = [
  {
    title: "Pontos, ranking e recompensas",
    reason: "Dependem de recurso e de decisão da universidade, e não apareceram na pesquisa como necessidade.",
  },
  {
    title: "Câmeras, robôs e drone",
    reason: "Exigem infraestrutura que o grupo não tem e expõem dados de pessoas.",
  },
  {
    title: "Sala de exposição dos objetos",
    reason: "Mostrar os objetos facilita a retirada por quem não é o dono. Por isso o catálogo usa só ícones.",
  },
  {
    title: "Repasse de mão em mão",
    reason: "É o problema de hoje: o objeto circula sem registro.",
  },
  {
    title: "Cães farejadores e viagem no tempo",
    reason: "Fora da realidade do campus.",
  },
];
