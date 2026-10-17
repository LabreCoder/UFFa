import { NavLink, Persona, Scenario, TaskGroup } from "../types";

export const ETAPA2_NAV_LINKS: NavLink[] = [
  { label: "Personas", href: "#personas" },
  { label: "Cenários", href: "#cenarios" },
  { label: "Tarefas", href: "#tarefas" },
];

export const PERSONAS: Persona[] = [
  {
    id: "atendente",
    initials: "AS",
    name: "Atendente da Secretaria",
    role: "O custodiante",
    basis: "Base: entrevistas P01–P03 (P01 e P02 inferidas a partir de P03)",
    basisTone: "blue",
    goal: "Receber, guardar e devolver objetos sem atrapalhar o atendimento principal do balcão.",
    pains: [
      "O item chega no meio da fila e recebe só uma fita com data e local.",
      "O caderno de registro foi abandonado, então não há histórico.",
      "A devolução depende de reconhecer e detalhar o objeto, sem termo de saída.",
      "Absorve a custódia sem que ela seja seu papel formal.",
    ],
  },
  {
    id: "porteiro",
    initials: "PO",
    name: "Porteiro",
    role: "A triagem",
    basis: "Base: entrevistas P04–P05",
    basisTone: "blue",
    goal: "Receber o objeto rapidamente e encaminhá-lo ao destino certo.",
    pains: [
      "Recebe o item, pergunta os dados, repassa e ninguém registra o caminho.",
      "Entre as portarias e a Secretaria, o objeto circula sem rastro.",
      "Precisa acionar o zelador para abrir salas trancadas na troca de turno.",
    ],
    variation:
      "P04 segura o item por cerca de 1h antes de repassar; P05 repassa de imediato. O objetivo e a dor são os mesmos.",
  },
  {
    id: "aluno",
    initials: "AL",
    name: "Aluno",
    role: "O dono (e quem encontra)",
    basis: "Base: questionário (n = 23)",
    basisTone: "gold",
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
    persona: "Aluno",
    problem:
      "Esquece algo em sala, e a sala é trancada. Precisa pedir à portaria que chame o zelador com as chaves.",
  },
  {
    code: "C3",
    title: "Sem saber onde procurar",
    persona: "Aluno",
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
