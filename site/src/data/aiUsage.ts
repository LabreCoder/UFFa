import { AiUsageItem } from "../types";

// Os comandos (prompts) abaixo estão exatamente como foram usados. Não alterar o texto.
export const AI_USAGE: AiUsageItem[] = [
  {
    num: "01",
    title: "Otimização do Formulário de Coleta",
    summary: "Análise da estrutura das questões do formulário para tornar a coleta de dados mais dinâmica.",
    tool: "ChatGPT",
    stage: "Etapa 1",
    prompt: `"Faça uma análise profunda do formulário anexado e proponha alterações na estrutura das questões (não mude o conteúdo nem adicione nada). O objetivo é que a coleta de dados do formulário seja coletada de forma mais dinâmica dentro do próprio formulário. Para isso, diminua a quantidade de questões múltipla escolha e proponha novos formatos para as perguntas sem mudar o objetivo de coleta da pergunta."`,
  },
  {
    num: "02",
    title: "Cruzamento de Dados e Métricas",
    summary: "Relatório com gráficos que cruzam os dados do formulário para definir métricas de recuperação dos itens.",
    tool: "Claude",
    stage: "Etapa 1",
    prompt: `"Elabore um relatório com gráficos, cruzando os dados anexados que foram extraídos do formulário, para gerar gráficos que correlacionem a coleta de dados. O objetivo é definir algumas métricas quanto a recuperação dos itens, e para isso, faça uma avaliação das métricas anexadas e as correlacione."`,
  },
  {
    num: "03",
    title: "Tabulação e Análise das Entrevistas",
    summary: "Resultado completo das entrevistas, com perguntas, respostas dos participantes, observações e um resumo.",
    tool: "Claude",
    stage: "Etapa 1",
    prompt: `"Faça o seguinte no final, como as perguntas foram as mesmas para todos os participantes, gere um resultado completo contendo primeiro as perguntas feitas e depois a resposta de cada participante (01 a 05), independente se a resposta foi vazia ou não. Coloque no final as observações para a análise. Também faça um resuminho sobre tudo."`,
  },
  {
    num: "04",
    title: "Engenharia de Prompt para Prototipação (Meta-prompt)",
    summary: "Criação do prompt que foi usado no Figma Make, a partir do material da pesquisa e da ideação.",
    tool: "Gemini",
    stage: "Etapa 2",
    prompt: `
#PAPEL

Assuma a posição de um especialista em UI/UX com experiência em prototipação de alta fidelidade
Atue com foco em acessibilidade e design inclusivo para pessoas de diferentes idades e níveis de familiaridade digital
Atue também como redator UX (UX Writing), com experiência em textos curtos e botões de ação (CTAs) claros
Escreva todo o resultado em português do Brasil
----------------

#CONSIDERAÇÕES

Considere que o problema é a perda de objetos nos campi da UFF, a começar pelo Instituto de Computação (IC) da Praia Vermelha, onde perder é comum e recuperar é raro, porque o objeto passa por várias pessoas sem registro e ninguém sabe onde entregar ou onde buscar.
Considere que a solução é o sistema web "UFFa" (Achados e Perdidos IC/UFF), uma plataforma institucional para a devolução segura de objetos, com foco absoluto em minimalismo extremo, que cria uma cadeia de custódia transparente e devolve o item ao verdadeiro dono com prova de posse empírica.
Considere que a interface deve ser "direto ao ponto" para alunos com pressa, que a comunidade não precisa de login e usa apenas a matrícula nos fluxos de ação, e que a Equipe (portarias e secretarias) entra com login restrito.
Considere o questionário, que estou copiando a você no documento intitulado "Analise_questionario_Achados_e_Perdidos_UFF.pdf" (23 respostas). Os principais insights são: 11 de 23 perderam algo e só 4 recuperaram (todas garrafas; os documentos não voltaram); 16 de 23 não sabem ou não têm certeza de onde entregar um objeto achado; 21 de 23 dizem que saber onde procurar ou entregar ajudaria muito; 19 de 23 querem ver descrição sem expor dados sensíveis; 10 de 14 que entregaram um objeto não sabem se ele chegou ao dono; 14 de 16 dão nota alta a confirmar características que só o dono saberia; 13 de 14 valorizam horário de entrega acessível; 13 de 17 valorizam um responsável claro; 16 de 23 preferem um site no celular sem instalação; acompanhar o status em detalhe é o recurso menos valorizado.
Considere as entrevistas com a Secretaria e as Portarias do IC, que estou copiando a você no documento intitulado "Relatório_Consolidado_de_Pesquisa_-_Achados_e_Perdidos.pdf" (5 participantes). Os principais insights são: nenhum recurso digital é usado hoje; o objeto recebe uma fita com data e local; a Portaria 01 guarda o item por cerca de 1 hora antes de levá-lo à Secretaria; a Portaria 02 repassa na hora; a devolução depende de o aluno "reconhecer e detalhar" o objeto, sem termo de saída; o cadastro no balcão deve ser em poucos cliques, com foto rápida, categoria e local; a equipe sugeriu QR code, etiqueta, recibo de entrada e saída e registro do documento de quem retira; a tela pública deve mostrar o mínimo e manter os detalhes sob sigilo; o balcão tem fila e a equipe não tem tempo para formulários longos.
Considere o meu mapa de empatia, que estou copiando a você no documento intitulado "Mapa de Empatia", para refletir nos textos e no fluxo o que as pessoas pensam, sentem, dizem e fazem diante do problema.
Considere as ideias do Crazy 4, que estou copiando a você no documento intitulado "crazy-4-uffa.md", apenas como inspiração. As ideias aproveitadas, já adaptadas à realidade, são: ponto central de custódia com atendente que entrega ao dono certo; pontos de entrega conhecidos; etiqueta com QR code no lugar da fita; aviso de situação do item. Pontos, ranking, prêmios, câmeras, robôs, drone, cães e viagem no tempo ficam fora.
Considere a análise competitiva, que estou copiando a você no documento intitulado "Analise_Competitiva_v2.pdf". As ideias a aproveitar são: prova social com número de itens devolvidos (ACHUSP); acesso por link, sem instalação (Unicamp Serviços); orientação do campus pelos pontos de custódia (Finder); superar o grupo de WhatsApp oferecendo busca e histórico.
Considere prototipar a solução para as personas que estou copiando a você no documento intitulado "personas.pdf": Atendente da Secretaria (o custodiante), Porteiro (a triagem) e Aluno (o dono e quem encontra).
Considere prototipar a solução para os cenários que estou copiando a você no documento intitulado "cenarios.pdf": C1 Balcão cheio; C2 Troca de turno; C3 Sem saber onde procurar; C4 Item que repassa sem rastro; C5 Retirada sem comprovante; C6 Entregou e não soube o fim.
Considere as tarefas que estou copiando a você no documento intitulado "tarefas.pdf": cadastrar item rapidamente; gerar etiqueta/QR code; registrar a retirada; delegar a custódia a um posto centralizador; registrar o documento de quem retira; navegar pelo catálogo público; reivindicar um item; comprovar a posse; retirar o item.
Considere a prototipação em papel, que estou copiando a você no documento intitulado "prototipacao-em-papel-uffa.md", como base das telas e dos estados do item.

Considere que o protótipo deve ter as telas e os comportamentos abaixo.
Tela Início (Dashboard da Comunidade): topo em bloco azul escuro (#0A1828) com cantos inferiores arredondados e círculos concêntricos decorativos sutis ao fundo; logo "UFFa" em branco, com o "a" em itálico verde-água claro; botão discreto "Equipe" com ícone de cadeado, que leva ao login da equipe; subtítulo "Achados e Perdidos · IC/UFF"; frase de acolhimento em DM Serif Display: "Perdeu ou achou? A gente devolve." (com "A gente devolve." em itálico); faixa de prova social com 3 números: "128 devolvidos" (com ícone de selo de verificação), "itens sob custódia" e "locais abertos agora" (calculado pelo horário atual); botão primário "Perdi algo" (apoio: "Veja se já foi entregue"); botão primário "Achei algo" (apoio: "Saiba onde entregar"); botão secundário (outline) "Buscar nos itens encontrados", com um botão de ícone ao lado para ler o QR Code da etiqueta; no rodapé, cards minimalistas dos locais de custódia reais (ex.: "Secretaria do IC", "Portaria 01"), com dias, horário e selo de aberto ou fechado, e o link "Ver todos".
Tela "Perdi algo": passo 1 com seleção de categoria por ícones redondos grandes; passo 2 com o Campus; botão "Ver itens compatíveis", que abre o Catálogo já filtrado.
Tela de registro "Achei algo": wizard em uma única tela rolável, com o objetivo de registrar rapidamente onde o objeto foi encontrado. Passo 1: categoria com ícones redondos grandes (Garrafa, Documento, Eletrônico, Chaves, Mochila, Roupa, Material, Óculos, Guarda-chuva, Outro). Passo 2: localização em cascata com dropdowns limpos: "Campus" (Praia Vermelha, Gragoatá, Valonguinho, Campus do Ingá); "Bloco/Prédio", que depende do campus; "Andar" (Subsolo, Térreo, 1º ao 5º andar, Área externa); "Ambiente" (Sala de aula, Laboratório, Corredor, Banheiro, Escada, Elevador, Auditório, Biblioteca, Sala de estudos, Secretaria, Cantina / Bandejão, Hall de entrada, Estacionamento, Pátio / Jardim, Ponto de ônibus, Outro); campo opcional "Sala ou referência" (ex.: "Sala 219, perto do bebedouro"), com até 40 caracteres. Passo 3: botão "Ver onde entregar". O resultado "Onde entregar" não usa nenhum mapa, só texto: card de destaque com o ponto de coleta mais próximo (ex.: "Secretaria do IC"), com prédio/andar, campus, dias e horário e selo de aberto ou fechado; lista "Também recebem" com as demais portarias e secretarias do mesmo campus (ex.: "Portaria do Prédio Principal") e o status de cada uma; botão "Vou entregar agora".
Tela Catálogo: busca por tipo, local ou código, ao lado de um botão para ler o QR Code da etiqueta; filtro por categoria (chips) e por campus; cards com ícone vetorial genérico da categoria, duas linhas de local (ex.: "Bloco E (IC) · 3º andar" e "Banheiro · Masculino"), data e local de custódia atual ("Em: Secretaria do IC"); itens já devolvidos não aparecem.
Tela Detalhes do Item: ícone da categoria, nome e código do item (ex.: "UF-4821"); aviso "Foto e detalhes só após aprovação"; card "Retirar em" com nome do local, endereço, dias e horário e selo de aberto ou fechado; card "QR Code digital" (mesmo código da etiqueta física), que amplia ao tocar, para identificar o objeto em qualquer balcão mesmo que ele mude de local; componente vertical de Linha do Tempo com o histórico de custódia, em horários e locais (ex.: "10h05 · Encontrado – Bloco E (IC) · 3º andar · Laboratório", "10h15 · Registrado na Portaria", "11h40 · Transferido para custódia – Secretaria do IC"), com o passo mais recente marcado como "Situação atual"; botão "É meu", que leva à Prova de Posse.
Tela Prova de Posse: o objetivo é eliminar falsas retiradas exigindo prova antes de exibir a foto real. Passo 1: área de texto grande "Descreva o que só você saberia (marcas, adesivos, arranhões)", com mínimo de 30 e máximo de 500 caracteres e contador. Passo 2: botão discreto (outline com ícone de clipe) "Anexar foto do objeto (Opcional)", para enviar uma foto antiga que comprove a posse. Passo 3: campo simples "Sua Matrícula" (somente números), sem criar conta. Passo 4: botão "Enviar pedido", com o apoio "Só a Equipe acessa seus dados", liberado só com o mínimo de caracteres atingido e a matrícula válida. Confirmação com número de protocolo e o local de retirada.
Tela Meus Registros: lista dos pedidos e achados do aluno, com status (Em análise, Aprovado, Mais detalhes, Recusado, Entregue, Aguardando entrega); mensagem da equipe quando houver pedido de mais detalhes; nos pedidos aprovados, botão "Mostrar QR de retirada", que abre um QR para apresentar no balcão junto com documento com foto.
Tela Locais: locais de custódia agrupados por campus, com endereço, quantidade de itens sob custódia, dias e horário e selo de status; filtro "Todos / Abertos agora".
Tela de Login da Equipe (acesso restrito): minimalista e centrada na tela, com o logo no topo; campo grande "SIAPE / Matrícula"; campo "Senha" com ícone de olho para mostrar ou ocultar; link discreto "Esqueci minha senha"; botão largo "Entrar no Sistema"; em caso de falha, contorno vermelho e mensagem de erro.
Área da Equipe: cabeçalho com o nome do balcão, botão de sair e alternância entre "Cadastro", "Movimentar" e "Pedidos" (com contador de pendentes).
Área da Equipe, Cadastro ultra-rápido: o objetivo é cadastrar o item em menos de 10 segundos, com cronômetro visível; passo 1 com bloco superior grande de câmera e o botão "Tirar foto sigilosa" (a foto não vai para o catálogo público); passo 2 com categoria por toque em ícones e local pré-preenchido (Campus, Bloco, Andar, Ambiente, Sala ou referência); passo 3 com botão largo de contraste forte "Salvar e gerar QR Code", seguido da tela da etiqueta com o QR, o código, "Imprimir etiqueta" e "Próximo item".
Área da Equipe, Movimentar (cadeia de custódia): leitura do QR Code pela câmera traseira, com alternativa de digitar o código (formato UF-0000); mostra o item, a custódia atual com selo de aberto ou fechado e o histórico completo (mesma Linha do Tempo vista pelo aluno); ações "Registrar transferência" para outro local de custódia, que atualiza a linha do tempo e o local de retirada, e, quando houver pedido aprovado, "Registrar entrega ao dono" (após conferir o documento com foto).
Área da Equipe, Pedidos: fila "A avaliar" e lista "Avaliados", com categoria, código, matrícula, horário e indicação de foto anexada.
Área da Equipe, Avaliação de Pedido: tela dividida em duas áreas, "Informado pelo aluno" (matrícula, item, descrição de posse em destaque e foto opcional, ou "Nenhuma foto anexada") e "Foto sigilosa · sistema" (foto tirada no balcão, marcada como "Só equipe", com local e horário de registro); abaixo, o histórico de custódia completo; rodapé fixo com "Aprovar Devolução" (primário), "Pedir mais detalhes" (abre um campo de mensagem ao aluno, com mínimo de 10 e máximo de 200 caracteres e contador) e "Recusar" (em vermelho, com confirmação).
Considere que todo campo de texto livre tem contador de caracteres visível com mínimo e máximo: mostrar "Faltam X caracteres (mín. Y)" até atingir o mínimo, depois "Tamanho mínimo atingido", e o contador "n/máx", que fica vermelho perto do limite.
Considere que cada local de custódia tem dias e horário de funcionamento (ex.: secretarias de segunda a sexta, 8h às 20h; portarias 24h) e um selo de status calculado pelo horário atual: "Aberto · fecha às 20h" (verde-azulado), "Fecha em X min" (âmbar, na última hora) e "Fechado · abre amanhã às 8h" (vermelho).
----------------

#TAREFA

Crie para mim o prompt que eu vou utilizar para dar entrada no Figma Make para criar os protótipos através de inteligência artificial.
----------------

#RESTRIÇÕES

Estilo e layout
Interface em português do Brasil.
Protótipo responsivo de alta fidelidade, com foco em smartphones e tablets, para um sistema web.
Minimalismo extremo, aparência institucional, limpa e altamente organizada, sem cara de mural de classificados desorganizado. Cantos levemente arredondados e bastante espaço em branco.

Paleta de cores e fontes
Fundo bege claro institucional: #F7F4EE. Títulos e textos em azul escuro: #0A1828. Botões primários em verde-azulado escuro: #004B57. Superfícies de cartões em bege muito sutil ou branco.
Estados: verde-azulado para aberto, âmbar para fecha em breve, vermelho para fechado, erro e recusa.
Títulos em "DM Serif Display" e textos de corpo em "DM Sans". Ícones vetoriais, simples e genéricos, focados no universo universitário.

Responsividade e padrões de plataforma
Smartphone: menu inferior fixo na zona do polegar, respeitando a barra de gestos (área segura inferior).
Tablet e smartphone na horizontal (a partir de 768 px): o menu vira uma barra de navegação lateral à esquerda, com os mesmos 4 itens.
Respeitar as áreas seguras do sistema: cabeçalhos abaixo do notch ou câmera frontal e recuo extra nas laterais no modo paisagem. Não usar moldura de celular simulada; o app ocupa a tela inteira.
No tablet: formulários centralizados com largura confortável de leitura; listas (Catálogo, Locais, Meus registros, Pedidos) em 2 colunas; detalhes do item com as informações ao lado da linha do tempo; Avaliação de Pedido com as duas áreas lado a lado; cadastro do balcão com a câmera ao lado do formulário.

Princípios de Gestalt
Aplicar proximidade, similaridade e hierarquia visual de forma implícita no layout, sem citar esses termos no prompt gerado.

Acessibilidade
Fontes a partir de 16 px, contraste forte (4,5:1) e alvos de toque maiores que 44 px. Elementos interativos devem ser óbvios.

Limites do escopo
Gerar somente as telas descritas em considerações. Basear-se unicamente nos arquivos fornecidos e nas telas descritas, sem inventar telas ou funções.

O que deve ser usado na interface
Ícones vetoriais genéricos de categoria nas telas públicas. QR Code na etiqueta, no item e na retirada. Linha do Tempo vertical de custódia. Selos de status com horário de funcionamento. Contadores de caracteres nos campos livres. Menu com APENAS 4 itens: "Início", "Catálogo", "Meus registros" e "Locais".

O que não deve ser usado na interface
Nenhuma interface de chat, mensagens ou negociação entre alunos: o sistema atua apenas como registro, e a mediação e a custódia física são feitas pelas portarias e pela secretaria.
Nenhuma fotografia real de objeto nas telas públicas (Catálogo e Detalhes do Item), para que ninguém copie as características do objeto e o reivindique. Fotos aparecem somente na área da Equipe.
Nenhum mapa interativo ou visual: a orientação de locais é só por texto.
Nenhuma barra de navegação no topo com textos como "Fluxos" ou "Passos".
Nenhum parágrafo longo explicativo.
Nenhum login para a comunidade, só matrícula nos fluxos de ação.
Nenhum ponto, ranking ou prêmio.
----------------

#FORMATO

Quero um texto único, em português, que será um prompt para ser colado no Figma Make, sem comentários antes ou depois.
O texto deve começar com o rótulo "Prompt:" e, em seguida, as quatro instruções de papel, uma por linha, na mesma redação da seção #PAPEL.
Depois das instruções de papel, o texto traz um parágrafo de abertura: "Crie um protótipo de UI responsivo de alta fidelidade, com foco em smartphones e tablets, para o sistema web "UFFa" (Achados e Perdidos IC/UFF)", seguido da descrição da plataforma, do foco em minimalismo e cadeia de custódia, e de que a interface é direto ao ponto, sem login para a comunidade e só com matrícula nos fluxos de ação.
Em seguida, o texto é organizado com estas seções em negrito, nesta ordem: Identidade Visual e Estilo (com os itens Paleta de Cores, Tipografia e Ícones, Vibe Geral da UI); Responsividade e Padrões de Plataforma; Telas e Fluxos Principais a serem gerados (10 telas numeradas, sendo a décima a Área da Equipe, com os subitens 10.1 Cadastro Ultra-Rápido no Balcão, 10.2 Movimentar (Cadeia de Custódia), 10.3 Pedidos e 10.4 Avaliação de Pedido); Regras de Conteúdo de Texto; Horário de Funcionamento; Regras e Restrições de UX (Importante).
Dentro de cada tela, usar listas com objetivo, interface, passos, textos dos botões e para onde cada ação leva.
----------------

#CRITÉRIOS DE QUALIDADE

O prompt gerado deve ter detalhes suficientes para que eu não precise adicionar mais nada.
O prompt gerado deve manter exatamente os textos de interface, os códigos de exemplo (UF-4821, UF-0000), as cores, as medidas e os limites de caracteres informados em considerações e restrições, sem trocar nem resumir.
O prompt gerado deve usar como base todo o material fornecido e estar em português.
Aplicar os princípios de design e as regras de UX Writing e CTAs da aula 11: hierarquia visual, consistência, simplicidade, feedback a cada ação e prevenção de erros.
Botões com verbo de ação e resultado claro. Textos extremamente curtos e focados na ação, para respeitar a pressa dos alunos entre as aulas e a alta demanda dos atendentes.
----------------

#EXEMPLOS

Considere como exemplos e inspiração:
ACHUSP: seção pública de casos resolvidos como prova social.
Unicamp Serviços: achados e perdidos dentro de um canal que o aluno já usa, com baixa fricção de acesso.
UniFind e Perdi Mas Achei: fluxo claro de postar item e explorar achados. Evitar o contato direto entre usuários e os problemas de ícones pequenos e listagem sem filtro.
Finder (IFSP Hortolândia): orientação do campus pelos pontos de ocorrência, aqui feita só por texto.
Grupos de WhatsApp e Facebook: concorrência real. Oferecer o que eles não têm, que é busca e histórico.
Facebook Marketplace e OLX: servem de contraste, por misturarem achados com vendas e não terem verificação de dono.
----------------

    `,
  },
  {
    num: "05",
    title: "Geração das Telas e UI (Alta Fidelidade)",
    summary: "Geração das telas de alta fidelidade do protótipo digital, nas visões do aluno e da equipe.",
    tool: "Figma Make",
    stage: "Etapa 2",
    prompt: `**Prompt:**
Assuma a posição de um especialista em UI/UX com experiência em prototipação de alta fidelidade

Atue com foco em acessibilidade e design inclusivo para pessoas de diferentes idades e níveis de familiaridade digital

Atue também como redator UX (UX Writing), com experiência em textos curtos e botões de ação (CTAs) claros

Escreva todo o resultado em português do Brasil

Crie um protótipo de UI responsivo de alta fidelidade, com foco em smartphones e tablets, para o sistema web "UFFa" (Achados e Perdidos IC/UFF). O app é uma plataforma institucional para a devolução segura de objetos nos campi da Universidade Federal Fluminense (UFF). O foco absoluto do design é o minimalismo extremo, estabelecendo uma cadeia de custódia transparente para devolver o item ao verdadeiro dono com prova de posse empírica. A interface deve ser "direto ao ponto" para alunos com pressa e não exige login para a comunidade, utilizando apenas a matrícula nos fluxos de ação.

**Identidade Visual e Estilo:**

* Paleta de Cores: Utilize um fundo bege claro institucional (#F7F4EE). Títulos e textos em azul escuro (#0A1828). Botões primários em verde-azulado escuro (#004B57). Superfícies de cartões em bege muito sutil ou branco.
* Tipografia e Ícones: Use tipografia "DM Serif Display" para títulos e "DM Sans" para textos de corpo, garantindo leitura rápida e reduzindo a carga cognitiva. Ícones devem ser vetoriais, simples e genéricos, focados no universo universitário.
* Vibe Geral da UI: Minimalista, com aparência institucional, limpa e altamente organizada. A interface não deve parecer um mural de classificados desorganizado. Use cantos levemente arredondados e bastante espaço em branco.

**Responsividade e Padrões de Plataforma:**

* Smartphone: menu inferior fixo na zona do polegar, respeitando a barra de gestos (área segura inferior).
* Tablet e smartphone na horizontal (a partir de 768px): o menu vira uma barra de navegação lateral à esquerda, com os mesmos 4 itens.
* Respeite as áreas seguras do sistema: cabeçalhos abaixo do notch/câmera frontal e recuo extra nas laterais no modo paisagem. Não use moldura de celular simulada; o app ocupa a tela inteira.
* No tablet:
  * Formulários centralizados com largura confortável de leitura.
  * Listas (Catálogo, Locais, Meus registros, Pedidos) em 2 colunas.
  * Detalhes do item com as informações ao lado da linha do tempo.
  * Avaliação de Pedido com as duas áreas lado a lado.
  * Cadastro do balcão com a câmera ao lado do formulário.

**Telas e Fluxos Principais a serem gerados:**

1. **Tela Início (Dashboard da Comunidade):**

   * Topo em bloco azul escuro (#0A1828) com cantos inferiores arredondados e círculos concêntricos decorativos sutis ao fundo.
   * No topo: logo "UFFa" em branco (o "a" em itálico verde-água claro), botão discreto "Equipe" com ícone de cadeado (acesso ao login da equipe) e subtítulo "Achados e Perdidos · IC/UFF".
   * Frase de acolhimento em DM Serif Display: "Perdeu ou achou? *A gente devolve.*"
   * Faixa de prova social com 3 números: "128 devolvidos" (com ícone de selo de verificação), "itens sob custódia" e "locais abertos agora" (calculado pelo horário atual).
   * Navegação Rápida: botões grandes e limpos de entrada principal.
     * Botão primário "Perdi algo" (apoio: "Veja se já foi entregue").
     * Botão primário "Achei algo" (apoio: "Saiba onde entregar").
     * Botão secundário (outline) "Buscar nos itens encontrados", com um botão de ícone ao lado para ler o QR Code da etiqueta.
   * Rodapé: cards minimalistas dos locais de custódia reais (ex.: "Secretaria do IC", "Portaria 01"), com dias, horário e selo de aberto/fechado, e o link "Ver todos".
2. **Tela "Perdi algo":**

   * Passo 1: seleção de categoria (ícones redondos grandes).
   * Passo 2: Campus.
   * CTA "Ver itens compatíveis", que abre o Catálogo já filtrado.
3. **Tela de Registro "Achei algo" (Fluxo de Localização Hierárquica):**

   * Objetivo: registrar rapidamente onde o objeto foi encontrado.
   * Interface: um wizard (passo a passo) em uma única tela rolável.
   * Passo 1: seleção de categoria com ícones redondos grandes: Garrafa, Documento, Eletrônico, Chaves, Mochila, Roupa, Material, Óculos, Guarda-chuva, Outro.
   * Passo 2: localização em cascata via dropdowns limpos:
     * "Campus" (Praia Vermelha, Gragoatá, Valonguinho, Campus do Ingá).
     * "Bloco/Prédio", que depende do campus.
     * "Andar": Subsolo, Térreo, 1º ao 5º andar, Área externa.
     * "Ambiente": Sala de aula, Laboratório, Corredor, Banheiro, Escada, Elevador, Auditório, Biblioteca, Sala de estudos, Secretaria, Cantina / Bandejão, Hall de entrada, Estacionamento, Pátio / Jardim, Ponto de ônibus, Outro.
     * Campo opcional "Sala ou referência" (ex.: "Sala 219, perto do bebedouro"), com até 40 caracteres.
   * Passo 3: CTA "Ver onde entregar", que leva ao resultado.
   * Resultado "Onde entregar": sem nenhum mapa, apenas texto informativo.
     * Card de destaque com o ponto de coleta mais próximo (ex.: "Secretaria do IC"), com prédio/andar, campus, dias e horário, e selo de aberto/fechado.
     * Lista "Também recebem" com as demais portarias e secretarias do mesmo campus (ex.: "Portaria do Prédio Principal") e o status de cada uma.
     * CTA "Vou entregar agora".
4. **Tela Catálogo:**

   * Busca por tipo, local ou código, ao lado de um botão para ler o QR Code da etiqueta.
   * Filtro por categoria (chips) e por campus.
   * Cards com ícone vetorial genérico da categoria e duas linhas de local (ex.: "Bloco E (IC) · 3º andar" e "Banheiro · Masculino"), além de data e local de custódia atual ("Em: Secretaria do IC").
   * Itens já devolvidos não aparecem.
5. **Tela de Detalhes do Item:**

   * Ícone da categoria, nome e código do item (ex.: "UF-4821").
   * Aviso: "Foto e detalhes só após aprovação".
   * Card "Retirar em": nome do local, endereço, dias/horário e selo de aberto/fechado.
   * Card "QR Code digital" (mesmo código da etiqueta física), que amplia ao tocar, para identificar o objeto em qualquer balcão mesmo que ele mude de local.
   * Componente vertical de "Linha do Tempo" com o histórico de custódia, em horários e locais (ex.: "10h05 · Encontrado – Bloco E (IC) · 3º andar · Laboratório", "10h15 · Registrado na Portaria", "11h40 · Transferido para custódia – Secretaria do IC"). O passo mais recente fica marcado como "Situação atual".
   * CTA "É meu", que leva à Prova de Posse.
6. **Tela Prova de Posse (Reivindicação de Item):**

   * Objetivo: eliminar falsas retiradas exigindo prova antes de exibir a foto real.
   * Passo 1: área de texto (textarea) grande: "Descreva o que só você saberia (marcas, adesivos, arranhões)". Mínimo de 30 e máximo de 500 caracteres, com contador.
   * Passo 2: botão discreto (outline com ícone de clipe) "Anexar foto do objeto (Opcional)", permitindo enviar uma foto antiga que comprove a posse.
   * Passo 3: campo de input simples "Sua Matrícula" (somente números), eliminando a necessidade de criar uma conta/login prévio.
   * Passo 4: CTA "Enviar pedido", com texto de apoio "Só a Equipe acessa seus dados". O botão só é liberado com o mínimo de caracteres atingido e a matrícula válida.
   * Confirmação com número de protocolo e o local de retirada.
7. **Tela Meus Registros:**

   * Lista dos pedidos e achados do aluno, com status: Em análise, Aprovado, Mais detalhes, Recusado, Entregue, Aguardando entrega.
   * Mensagem da equipe quando houver pedido de mais detalhes.
   * Em pedidos aprovados: botão "Mostrar QR de retirada", que abre um QR para apresentar no balcão junto com documento com foto.
8. **Tela Locais:**

   * Locais de custódia agrupados por campus, com endereço, quantidade de itens sob custódia, dias/horário e selo de status.
   * Filtro "Todos / Abertos agora".
9. **Tela de Login da Equipe (Acesso Restrito):**

   * Objetivo: garantir segurança na área administrativa seguindo boas práticas de UX.
   * Interface: minimalista e centrada na tela, com o logo do sistema no topo.
   * Passo 1: campo de input grande e claro para "SIAPE / Matrícula".
   * Passo 2: campo de input para "Senha", com ícone de visibilidade (olho) acionável.
   * Passo 3: link discreto "Esqueci minha senha".
   * Passo 4: botão primário largo "Entrar no Sistema". Feedback visual de erro (contorno vermelho e mensagem) caso as credenciais falhem.
10. **Área da Equipe:**

* Cabeçalho com o nome do balcão, botão de sair e alternância entre "Cadastro", "Movimentar" e "Pedidos" (com contador de pendentes).

   **10.1. Cadastro Ultra-Rápido no Balcão:**

* Objetivo: cadastrar o item recebido em menos de 10 segundos, considerando a fila no balcão (com cronômetro visível).
* Passo 1: bloco superior expansivo de câmera com o CTA "Tirar foto sigilosa" (foto que não vai para o catálogo público).
* Passo 2: confirmação rápida com categoria por toque em ícones e local pré-preenchido (Campus ➔ Bloco ➔ Andar ➔ Ambiente ➔ Sala ou referência).
* Passo 3: botão largo de contraste forte "Salvar e gerar QR Code", que cria o identificador único. Em seguida, a tela da etiqueta com o QR, o código, "Imprimir etiqueta" e "Próximo item".

   **10.2. Movimentar (Cadeia de Custódia):**

* Leitura do QR Code da etiqueta pela câmera traseira, com alternativa de digitar o código (formato UF-0000).
* Exibe o item, a custódia atual com selo de aberto/fechado e o histórico de custódia completo (mesma Linha do Tempo vista pelo aluno).
* Ações: "Registrar transferência" para outro local de custódia (atualiza a linha do tempo e o local de retirada) e, quando houver pedido aprovado, "Registrar entrega ao dono" (após conferir documento com foto).

   **10.3. Pedidos:**

* Fila "A avaliar" e lista "Avaliados", com categoria, código, matrícula, horário e indicação de foto anexada.

   **10.4. Avaliação de Pedido:**

* Tela dividida em duas áreas:
  * "Informado pelo aluno": matrícula, item, descrição de posse em destaque e foto opcional (ou "Nenhuma foto anexada").
  * "Foto sigilosa · sistema": foto tirada no balcão, marcada como "Só equipe", com local e horário de registro.
* Abaixo, o histórico de custódia completo do item (Linha do Tempo).
* Rodapé fixo com:
  * "Aprovar Devolução" (primário).
  * "Pedir mais detalhes": abre um campo de mensagem ao aluno, com mínimo de 10 e máximo de 200 caracteres e contador.
  * "Recusar": em vermelho, com confirmação.

**Regras de Conteúdo de Texto:**

* Todo campo de texto livre deve ter contador de caracteres visível com mínimo e máximo. Mostre "Faltam X caracteres (mín. Y)" até atingir o mínimo, depois "Tamanho mínimo atingido", e o contador "n/máx", que fica vermelho perto do limite.

**Horário de Funcionamento:**

* Cada local de custódia tem dias e horário de funcionamento (ex.: secretarias seg–sex 8h–20h; portarias 24h).
* Exiba um selo de status calculado pelo horário atual:
  * "Aberto · fecha às 20h" (verde-azulado)
  * "Fecha em X min" (âmbar, na última hora)
  * "Fechado · abre amanhã às 8h" (vermelho)

**Regras e Restrições de UX (Importante):**

* Não inclua nenhuma interface de chat, mensagens (P2P) ou negociação entre os alunos. O sistema atua apenas como registro; a mediação e a custódia física são feitas pelas portarias e secretaria.
* Proibição visual: não exiba fotografias reais de objetos nas telas públicas (como o Catálogo e os Detalhes do Item). Use apenas ícones vetoriais genéricos, para evitar que pessoas mal-intencionadas copiem as características do objeto e o reivindiquem. Fotos aparecem somente na área da equipe.
* Não utilize mapas interativos ou visuais. A orientação de locais é feita apenas por texto (portarias e secretarias dos prédios).
* Proibições estruturais: NÃO crie barras de navegação no topo com textos como "Fluxos" ou "Passos". NÃO adicione parágrafos longos explicativos. O menu de navegação (inferior no smartphone, lateral no tablet) deve ter APENAS 4 itens: "Início", "Catálogo", "Meus registros", "Locais".
* Mantenha os textos extremamente curtos e focados na ação. O design deve respeitar a pressa dos alunos entre as aulas e a alta demanda dos atendentes da equipe.
* Acessibilidade: fontes a partir de 16px, contraste forte (4,5:1) e alvos de toque maiores que 44px. Elementos interativos devem ser óbvios.`,
  },
];
