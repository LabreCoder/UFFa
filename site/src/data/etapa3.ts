import { FirstClickTask, Heuristic, HeuristicProblem, NavLink, Severity } from "../types";
import tarefa1 from "../assets/etapa3/first-click/tarefa-1.jpeg";
import tarefa2 from "../assets/etapa3/first-click/tarefa-2.jpeg";
import tarefa3 from "../assets/etapa3/first-click/tarefa-3.jpeg";

export const ETAPA3_NAV_LINKS: NavLink[] = [
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Problemas", href: "#problemas" },
  { label: "First Click", href: "#first-click" },
];

// As 10 heurísticas, na ordem do material e do formulário da disciplina.
export const HEURISTICS: Heuristic[] = [
  { id: 1, name: "Visibilidade do estado do sistema" },
  { id: 2, name: "Correspondência entre o sistema e o mundo real" },
  { id: 3, name: "Controle e liberdade do usuário" },
  { id: 4, name: "Consistência e padronização" },
  { id: 5, name: "Reconhecimento em vez de memorização" },
  { id: 6, name: "Flexibilidade e eficiência de uso" },
  { id: 7, name: "Projeto estético e minimalista" },
  { id: 8, name: "Prevenção de erros" },
  { id: 9, name: "Reconhecimento, diagnóstico e recuperação de erros" },
  { id: 10, name: "Ajuda e documentação" },
];

export const SEVERITY_SCALE: { level: Severity; label: string; desc: string }[] = [
  { level: 4, label: "Catastrófico", desc: "Impede concluir a tarefa. Corrigir imediatamente." },
  { level: 3, label: "Grande", desc: "Causa hesitação e frustração. Alta prioridade." },
  { level: 2, label: "Pequeno", desc: "Dificuldade menor, contornada com facilidade." },
  { level: 1, label: "Cosmético", desc: "Superficial, não afeta o uso diretamente." },
];

export const METHOD_STEPS = [
  { title: "Preparação", desc: "Os avaliadores conheceram o UFFa e as tarefas principais do protótipo de alta fidelidade." },
  { title: "Inspeção individual", desc: "Cada avaliação foi feita de forma independente, registrando tela, problema, heurística violada, severidade e sugestão." },
  { title: "Interpretação", desc: "Cada problema foi associado às heurísticas de Nielsen e recebeu uma severidade de 1 a 4." },
  { title: "Consolidação", desc: "Juntamos as listas, unimos os problemas repetidos e calculamos a severidade pela média das notas." },
  { title: "Relato", desc: "Organizamos os resultados em gráficos, na lista consolidada e nas sugestões de correção abaixo." },
];

// Avaliadores identificados por código. A avaliação A foi feita em dupla.
export const EVALUATORS = [
  { code: "A", note: "em dupla" },
  { code: "B", note: "" },
  { code: "C", note: "" },
];

// Achados individuais antes da consolidação, contados a partir da lista consolidada.
export function findingsByEvaluator(): { code: string; total: number }[] {
  return EVALUATORS.map((e) => ({
    code: e.code,
    total: PROBLEMS.filter((p) => p.findings.some((f) => f.evaluator === e.code)).length,
  }));
}

// Lista consolidada. Severidade consolidada = média das notas, arredondada.
export const PROBLEMS: HeuristicProblem[] = [
  {
    id: "C1",
    problem: "O aluno lê o pedido de mais informações da equipe, mas não consegue abrir o registro para respondê-lo.",
    screen: "Meus registros",
    heuristics: [3, 9],
    findings: [{ evaluator: "A", severity: 4 }],
    recommendation: "Permitir abrir o registro, ver a solicitação e o histórico e enviar as informações pedidas.",
  },
  {
    id: "C2",
    problem: "Depois de enviado, o registro não abre: não dá para ver o que foi solicitado nem a resposta da equipe.",
    screen: "Meus registros",
    heuristics: [1],
    findings: [{ evaluator: "A", severity: 3 }],
    recommendation: "Abrir os detalhes da solicitação junto com a comunicação da equipe.",
  },
  {
    id: "C3",
    problem: "A tela mostra um único card e muito espaço vazio, sem ação para novo registro ou para filtrar o histórico.",
    screen: "Meus registros",
    heuristics: [3, 7],
    findings: [{ evaluator: "B", severity: 3 }],
    recommendation: "Botão principal “+ Novo registro” e abas “Em andamento” e “Concluídos”.",
  },
  {
    id: "C4",
    problem: "Quem avalia o pedido não vê o que já solicitou ao aluno quando pede mais informações.",
    screen: "Avaliação de pedido (equipe)",
    heuristics: [1],
    findings: [{ evaluator: "A", severity: 3 }],
    recommendation: "Manter no item o histórico das mensagens da equipe.",
  },
  {
    id: "C5",
    problem: "O cadastro da equipe identifica o item só por local e categoria, e muitos itens acabam em “Outro”.",
    screen: "Cadastro (equipe)",
    heuristics: [2],
    findings: [{ evaluator: "A", severity: 3 }],
    recommendation: "Incluir um campo para uma breve descrição do item.",
  },
  {
    id: "C6",
    problem: "O card “Achei algo / Saiba onde entregar” mistura duas ações: registrar o item e consultar os pontos de entrega.",
    screen: "Início",
    heuristics: [2, 3],
    findings: [{ evaluator: "B", severity: 3 }],
    recommendation: "Separar em “Cadastrar item encontrado” (principal) e “Ver pontos de entrega” (secundária).",
  },
  {
    id: "C7",
    problem: "O catálogo não oferece ordenação nem filtro por data.",
    screen: "Catálogo",
    heuristics: [6, 5],
    findings: [{ evaluator: "B", severity: 3 }],
    recommendation: "Menu “Ordenar por” e filtro por período.",
  },
  {
    id: "C8",
    problem: "Detalhes de localização, como sala e andar, não aparecem na listagem: ficam em telas internas, sem pré-visualização.",
    screen: "Listagem de itens",
    heuristics: [5],
    findings: [{ evaluator: "C", severity: 3 }],
    recommendation: "Mostrar foto, data e local direto na listagem.",
  },
  {
    id: "C9",
    problem: "Faltam instruções sobre os documentos exigidos para retirar o item.",
    screen: "Contato e retirada",
    heuristics: [10],
    findings: [{ evaluator: "C", severity: 3 }],
    recommendation: "Avisar que é preciso documento com foto e comprovante de vínculo.",
  },
  {
    id: "C10",
    problem: "O botão com ícone de scanner, ao lado da busca, não tem rótulo e sua função não fica clara.",
    screen: "Início e catálogo",
    heuristics: [2, 5],
    findings: [
      { evaluator: "A", severity: 2 },
      { evaluator: "B", severity: 2 },
    ],
    recommendation: "Rótulo visível, como “Ler etiqueta” ou “Escanear QR Code”.",
  },
  {
    id: "C11",
    problem: "O filtro de campi tem pouco contraste e parece apenas informação, não um filtro.",
    screen: "Catálogo",
    heuristics: [4],
    findings: [{ evaluator: "A", severity: 2 }],
    recommendation: "Contorno e fundo que indiquem que o filtro é clicável.",
  },
  {
    id: "C12",
    problem: "O botão “Equipe” com cadeado não deixa claro para quem é essa área.",
    screen: "Início",
    heuristics: [4, 2],
    findings: [{ evaluator: "B", severity: 2 }],
    recommendation: "Rótulo como “Área administrativa” ou “Acesso da equipe”.",
  },
  {
    id: "C13",
    problem: "O número nas pílulas dos locais não tem rótulo: não se sabe se são itens, sala ou capacidade.",
    screen: "Locais",
    heuristics: [1, 2],
    findings: [{ evaluator: "B", severity: 2 }],
    recommendation: "Escrever o significado, por exemplo “23 itens guardados”.",
  },
  {
    id: "C14",
    problem: "“Perdi algo” e “Achei algo” têm a mesma cor, tamanho e peso, o que favorece cliques por engano.",
    screen: "Início",
    heuristics: [7, 4],
    findings: [{ evaluator: "B", severity: 2 }],
    recommendation: "Diferenciar os dois botões, por exemplo preenchido e contorno.",
  },
  {
    id: "C15",
    problem: "O card do registro mostra só código e data, sem foto, nome do item ou local.",
    screen: "Meus registros",
    heuristics: [5, 9],
    findings: [{ evaluator: "B", severity: 2 }],
    recommendation: "Miniatura, nome do objeto e local no card.",
  },
  {
    id: "C16",
    problem: "Não fica claro se o contador de itens muda ao filtrar, e não há aviso para lista vazia.",
    screen: "Catálogo",
    heuristics: [1],
    findings: [{ evaluator: "B", severity: 2 }],
    recommendation: "Contador dinâmico e mensagem para lista vazia.",
  },
  {
    id: "C17",
    problem: "Ao cadastrar um item, não há indicação de carregamento nem confirmação de envio.",
    screen: "Cadastro de item",
    heuristics: [1],
    findings: [{ evaluator: "C", severity: 2 }],
    recommendation: "Indicador de progresso e mensagem de sucesso.",
  },
  {
    id: "C18",
    problem: "O formulário de registro usa termos pouco familiares ao estudante.",
    screen: "Formulário de registro",
    heuristics: [2],
    findings: [{ evaluator: "C", severity: 2 }],
    recommendation: "Rótulos simples, como “Campus”, “Bloco/Prédio” e “Status do item”.",
  },
  {
    id: "C19",
    problem: "Quem usa o sistema com frequência precisa de muitos cliques para filtrar por categoria.",
    screen: "Filtros de categoria",
    heuristics: [6],
    findings: [{ evaluator: "C", severity: 2 }],
    recommendation: "Seletores rápidos e atalhos para a equipe.",
  },
  {
    id: "C20",
    problem: "Textos repetidos e poluição visual em volta da foto do item.",
    screen: "Detalhe do item",
    heuristics: [7],
    findings: [{ evaluator: "C", severity: 2 }],
    recommendation: "Priorizar foto, descrição e contato do ponto de coleta.",
  },
  {
    id: "C21",
    problem: "No menu, “Locais” não diz se são pontos de entrega ou de retirada.",
    screen: "Menu",
    heuristics: [2],
    findings: [{ evaluator: "A", severity: 1 }],
    recommendation: "Usar um nome mais específico para o item do menu.",
  },
  {
    id: "C22",
    problem: "A escolha do campus é opcional, mas isso não está sinalizado.",
    screen: "Perdi algo",
    heuristics: [8, 4],
    findings: [{ evaluator: "A", severity: 1 }],
    recommendation: "Indicar “opcional” no rótulo ou no campo.",
  },
  {
    id: "C23",
    problem: "Os cards de local mostram informações diferentes no Início e em Locais.",
    screen: "Início e locais",
    heuristics: [4],
    findings: [{ evaluator: "B", severity: 1 }],
    recommendation: "Usar um único componente de card de local.",
  },
  {
    id: "C24",
    problem: "Falta um botão evidente para limpar os filtros ou cancelar a busca.",
    screen: "Busca",
    heuristics: [3],
    findings: [{ evaluator: "C", severity: 1 }],
    recommendation: "Botão “Limpar filtros” junto da pesquisa.",
  },
  {
    id: "C25",
    problem: "Botões, cores e navegação variam entre as telas.",
    screen: "Navegação",
    heuristics: [4],
    findings: [{ evaluator: "C", severity: 1 }],
    recommendation: "Padronizar paleta, botões e navegação.",
  },
];

// Mesma escala de cor em gráficos e etiquetas: quanto mais grave, mais escuro.
export const SEVERITY_BAR_CLASS: Record<Severity, string> = {
  4: "bg-uffa-azulpetroleo-dark",
  3: "bg-uffa-azulpetroleo",
  2: "bg-uffa-tractorgreen",
  1: "bg-uffa-tractorgreen/40",
};

export function consolidatedSeverity(p: HeuristicProblem): Severity {
  const mean = p.findings.reduce((sum, f) => sum + f.severity, 0) / p.findings.length;
  return Math.round(mean) as Severity;
}

// First Click (curiosidade): teste com 10 participantes no Useberry.
export const FIRST_CLICK = {
  participants: 10,
  tool: "Useberry",
  tasks: [
    { id: "T1", title: "Procurar um item perdido", target: "“Perdi algo” ou busca", result: "10 de 10 acertaram o primeiro clique (contagem aproximada)", confidence: 4.8, image: tarefa1 },
    { id: "T2", title: "Entregar um item encontrado", target: "“Achei algo”", result: "9 de 10 acertaram (aprox.); a tarefa mais rápida", confidence: 4.9, image: tarefa2 },
    { id: "T3", title: "Saber quando e onde deixar ou buscar um item", target: "aba “Locais”, link “Ver todos” ou card de local", result: "Cliques divididos entre quatro caminhos", confidence: 4.1, image: tarefa3 },
  ] as FirstClickTask[],
  conclusion:
    "Os dois fluxos principais, procurar e entregar, funcionaram bem. O ponto de melhoria é chegar ao horário e ao local a partir da tela inicial.",
};
