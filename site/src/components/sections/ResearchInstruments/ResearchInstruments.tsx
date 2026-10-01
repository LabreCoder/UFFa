import { RESEARCH_PROFILES, QUESTIONNAIRE_TOPICS } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionDefault } from "../../ui/SectionDefault";
import tclePdf from "../../../../public/TCLE-UFFA.pdf";

export function ResearchInstruments() {
  const pdfDownloadUrl = tclePdf;
  const color = "bg-uffa-azulpetroleo";
  
  return (
    <SectionDefault colorDefault="bg-uffa-coral/20">
      {/* Contêiner mestre alinhado com todas as outras seções */}
      <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col gap-20">
        
        {/* ========================================================= */}
        {/* PARTE 1: INSTRUMENTOS METODOLÓGICOS                       */}
        {/* ========================================================= */}
        <div>
          <SectionHeader
            tag="Instrumentos de Pesquisa"
            title="Entrevistas e Questionário"
            description="Metodologias quantitativas e qualitativas desenvolvidas para investigar padrões de comportamento e validar hipóteses de uso."
            tagColor="text-uffa-blue"
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Roteiro Qualitativo */}
            <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-8 md:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-uffa-blue/10 flex items-center justify-center text-2xl shrink-0">
                    🎙️
                  </div>
                  <h3 className="font-bold text-uffa-navy text-xl md:text-2xl">Roteiro Semiestruturado</h3>
                </div>
                <p className="text-base text-uffa-navy/70 leading-relaxed mb-8">
                  Instrumento qualitativo com 14 perguntas elaborado para explorar o fluxo físico, guarda, verificações de posse e atritos da rotina universitária[cite: 1].
                </p>
                <div className="flex flex-col gap-4">
                  {RESEARCH_PROFILES.map((p) => (
                    <div key={p.label} className="flex items-start gap-4 bg-uffa-lightblue/50 border border-uffa-blue/10 rounded-2xl p-4 md:p-5">
                      <span className="text-2xl shrink-0 mt-0.5">{p.icon}</span>
                      <div>
                        <p className="text-base font-semibold text-uffa-navy">{p.label}</p>
                        <p className="text-sm text-uffa-navy/70 leading-relaxed mt-1">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Questionário Quantitativo */}
            <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-8 md:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-uffa-blue/10 flex items-center justify-center text-2xl shrink-0">
                    📊
                  </div>
                  <h3 className="font-bold text-uffa-navy text-xl md:text-2xl">Questionário Quantitativo</h3>
                </div>
                <p className="text-base text-uffa-navy/70 leading-relaxed mb-8">
                  Mapeamento com a comunidade acadêmica da UFF (n=23 respostas coletadas com consentimento).
                </p>
                <div className="flex flex-col gap-5">
                  {QUESTIONNAIRE_TOPICS.map((t) => (
                    <div key={t.label} className="border-l-3 border-uffa-blue/60 pl-5">
                      <p className="text-base font-semibold text-uffa-navy">{t.label}</p>
                      <p className="text-sm text-uffa-navy/65 mt-1 leading-relaxed">{t.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de Acesso */}
              <div className="mt-10 pt-6 border-t border-uffa-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-sm text-uffa-navy/70">Acessar formulário original:</span>
                <a
                  href="https://forms.gle/NQx53u5XJ15qaq5J8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-uffa-azulpetroleo text-white text-xs md:text-sm font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
                >
                  Ver Questionário (Google Forms) ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PARTE 2: ANÁLISE DOS PRINCIPAIS RESULTADOS DO FORMULÁRIO  */}
        {/* ========================================================= */}
        <div>
          <SectionHeader
            tag="Resultados e Descobertas"
            title="Análise dos Dados do Questionário (n=23)"
            description="Síntese das principais evidências empíricas identificadas no formulário quantitativo inicial."
            tagColor="text-uffa-blue"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-7 md:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-bold tracking-widest text-uffa-blue uppercase">Gargalo Crítico</span>
                <h4 className="text-xl md:text-2xl font-bold text-uffa-navy mt-2 mb-3">70% não sabem onde entregar</h4>
                <p className="text-sm md:text-base text-uffa-navy/75 leading-relaxed mb-6">
                  16 de 23 pessoas não sabem ou têm dúvidas sobre o local correto. A portaria é usada como improviso: 7 de 8 que entregaram lá disseram não ter certeza se era o canal oficial.
                </p>
              </div>
              <div className="bg-uffa-lightblue/40 rounded-2xl p-4 border border-uffa-blue/15">
                <div className="flex justify-between text-xs md:text-sm font-semibold text-uffa-navy mb-2">
                  <span>Pedem clareza de onde ir</span>
                  <span className="font-bold">91%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-uffa-blue h-full w-[91%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-7 md:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-bold tracking-widest text-uffa-blue uppercase">Efetividade</span>
                <h4 className="text-xl md:text-2xl font-bold text-uffa-navy mt-2 mb-3">Perda frequente, resgate raro</h4>
                <p className="text-sm md:text-base text-uffa-navy/75 leading-relaxed mb-6">
                  Das 11 pessoas que perderam itens no último ano, só 4 recuperaram (todas garrafas, refazendo o caminho a pé). Documentos e cartões tiveram 0% de recuperação.
                </p>
              </div>
              <div className="bg-uffa-lightblue/40 rounded-2xl p-4 border border-uffa-blue/15">
                <div className="flex justify-between text-xs md:text-sm font-semibold text-uffa-navy mb-2">
                  <span>Taxa de recuperação observada</span>
                  <span className="font-bold">36%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[36%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-7 md:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-bold tracking-widest text-uffa-blue uppercase">Privacidade e Posse</span>
                <h4 className="text-xl md:text-2xl font-bold text-uffa-navy mt-2 mb-3">Verificação vs Exposição</h4>
                <p className="text-sm md:text-base text-uffa-navy/75 leading-relaxed mb-6">
                  88% exigem checagem de dados que só o dono sabe antes de entregar. A solução precisa exibir fotos sem revelar características que validam a propriedade.
                </p>
              </div>
              <div className="bg-uffa-lightblue/40 rounded-2xl p-4 border border-uffa-blue/15">
                <div className="flex justify-between text-xs md:text-sm font-semibold text-uffa-navy mb-2">
                  <span>Prioridade à devolução segura</span>
                  <span className="font-bold">87%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[87%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PARTE 3: TÉCNICA QUALITATIVA - ENTREVISTAS & TCLE         */}
        {/* ========================================================= */}
        <div>
          <SectionHeader
            tag="Pesquisa de Campo Qualitativa"
            title="Entrevistas Contextuais Semiestruturadas e TCLE"
            description="Investigação em profundidade no Instituto de Computação (IC - Praia Vermelha) para desvendar a jornada física, gargalos de turno e rotinas de atendimento."
            tagColor="text-uffa-blue"
            className="mb-14"
          />

          {/* 1. Amostragem e Justificativa + Ética/TCLE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Amostra e Justificativa */}
            <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">👥</span>
                  <h4 className="text-xl font-bold text-uffa-navy">Amostragem e Critérios de Escolha</h4>
                </div>
                <p className="text-sm text-uffa-navy/75 leading-relaxed mb-6">
                  Amostra intencional focada nos agentes centrais da custódia física dos objetos (n=5)[cite: 1]. Optou-se por entrevistar os operadores da linha de frente para entender a logística oculta que questionários não captam:
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-uffa-lightblue/40 border border-uffa-blue/10">
                    <p className="text-sm font-bold text-uffa-navy">Secretaria de Unidade (Part. 01, 02 e 03)</p>
                    <p className="text-xs text-uffa-navy/70 mt-1">
                      Ponto central de guarda prolongada (~6 meses)[cite: 1]. Selecionados para entender o volume real, o método manual de identificação (fitas adesivas)[cite: 1] e a sobrecarga operacional em um setor cuja atribuição formal não é achados e perdidos[cite: 1].
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-uffa-lightblue/40 border border-uffa-blue/10">
                    <p className="text-sm font-bold text-uffa-navy">Portarias 01 e 02 (Part. 04 e 05)</p>
                    <p className="text-xs text-uffa-navy/70 mt-1">
                      Pontos de entrada primária imediata[cite: 1]. Selecionados para mapear o primeiro contato após as aulas, o tempo de retenção transitória (1 hora)[cite: 1], a gestão de salas trancadas[cite: 1] e o fluxo de repasse entre prédios[cite: 1].
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ética e TCLE */}
            <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">⚖️</span>
                  <h4 className="text-xl font-bold text-uffa-navy">Procedimentos Éticos e TCLE</h4>
                </div>
                <p className="text-sm text-uffa-navy/75 leading-relaxed mb-6">
                  A pesquisa seguiu rigorosamente os preceitos éticos para pesquisa com seres humanos, assegurando transparência e proteção integral aos voluntários:
                </p>
                <ul className="space-y-3.5 text-xs md:text-sm text-uffa-navy/75 mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Termo de Consentimento (TCLE):</strong> Todos os 5 participantes leram e assinaram o TCLE antes do início das perguntas, sendo esclarecidos sobre os objetivos do projeto acadêmico[cite: 1].</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Garantia de Anonimato:</strong> Identificação codificada (Participante 01 a 05) para resguardar a identidade funcional dos servidores e terceirizados[cite: 1].</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Sem Captação de Áudio:</strong> Para manter o ambiente de trabalho confortável e sem constrangimento, o registro foi feito exclusivamente por notas e citações manuais[cite: 1].</span>
                  </li>
                </ul>
              </div>

              {/* Botão de Acesso Padronizado com o EmpathyMap */}
              <div className="mt-8 pt-6 border-t border-uffa-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-semibold text-uffa-navy">TCLE da Pesquisa Qualitativa</span>
                  <p className="text-xs text-uffa-navy/60">Termo de consentimento aplicado aos participantes.</p>
                </div>
                <a
                  href={pdfDownloadUrl}
                  download="TCLE-UFFA.pdf"
                  className={`inline-flex items-center gap-2.5 px-6 py-3 ${color} hover:bg-uffa-navy/90 text-white rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow shrink-0 cursor-pointer`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Baixar TCLE (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* 2. Mapeamento do Fluxo Físico do Objeto */}
          <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-8 md:p-10 shadow-xs mb-10">
            <span className="text-xs font-bold tracking-widest text-uffa-blue uppercase">Mapeamento de Processo</span>
            <h4 className="text-xl md:text-2xl font-bold text-uffa-navy mt-1 mb-4">A Jornada Real do Objeto Encontrado</h4>
            <p className="text-sm md:text-base text-uffa-navy/75 leading-relaxed mb-8">
              A partir da triangulação das falas, identificou-se um fluxo linear e desconexo: o objeto troca de mãos sucessivas sem registro integrado ou rastreamento de desfecho[cite: 1].
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-uffa-lightblue/50 p-5 rounded-2xl border border-uffa-blue/15 text-center flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-uffa-blue uppercase">1. Origem</span>
                  <h5 className="font-bold text-uffa-navy text-base mt-1">Salas de Aula</h5>
                  <p className="text-xs text-uffa-navy/70 mt-2">Maioria achada por professores na troca de turno[cite: 1].</p>
                </div>
                <span className="text-uffa-blue font-bold mt-3 text-lg">↓</span>
              </div>

              <div className="bg-uffa-lightblue/50 p-5 rounded-2xl border border-uffa-blue/15 text-center flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-uffa-blue uppercase">2. Triagem</span>
                  <h5 className="font-bold text-uffa-navy text-base mt-1">Portaria 02</h5>
                  <p className="text-xs text-uffa-navy/70 mt-2">Sem espaço de guarda. Encaminha para o outro prédio[cite: 1].</p>
                </div>
                <span className="text-uffa-blue font-bold mt-3 text-lg">↓</span>
              </div>

              <div className="bg-uffa-lightblue/50 p-5 rounded-2xl border border-uffa-blue/15 text-center flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-uffa-blue uppercase">3. Espera</span>
                  <h5 className="font-bold text-uffa-navy text-base mt-1">Portaria 01</h5>
                  <p className="text-xs text-uffa-navy/70 mt-2">Retém o item por ~1h. Se ninguém buscar, sobe à secretaria[cite: 1].</p>
                </div>
                <span className="text-uffa-blue font-bold mt-3 text-lg">↓</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border-2 border-uffa-blue text-center flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-xs font-bold text-uffa-blue uppercase">4. Guarda Central</span>
                  <h5 className="font-bold text-uffa-navy text-base mt-1">Secretaria do IC</h5>
                  <p className="text-xs text-uffa-navy/70 mt-2">Aplica fita com data/local. Fica guardado por até 6 meses[cite: 1].</p>
                </div>
                <span className="text-uffa-blue font-bold mt-3 text-lg">↓</span>
              </div>

              <div className="bg-uffa-lightblue/50 p-5 rounded-2xl border border-uffa-blue/15 text-center flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-uffa-blue uppercase">5. Destino Final</span>
                  <h5 className="font-bold text-uffa-navy text-base mt-1">Almoxarifado / Doação</h5>
                  <p className="text-xs text-uffa-navy/70 mt-2">Direção encaminha os itens não reclamados[cite: 1].</p>
                </div>
                <span className="text-emerald-600 font-bold mt-3 text-base">Conclusão</span>
              </div>
            </div>
          </div>

          {/* 3. Análise Temática e Conclusões para o Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Eixos da Análise Temática */}
            <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-8 shadow-xs">
              <span className="text-xs font-bold tracking-widest text-uffa-blue uppercase">Método Qualitativo</span>
              <h4 className="text-xl font-bold text-uffa-navy mt-1 mb-4">Síntese por Análise Temática</h4>
              <p className="text-xs md:text-sm text-uffa-navy/75 leading-relaxed mb-6">
                Codificação das anotações das 14 perguntas estruturada em quatro pilares determinantes[cite: 1]:
              </p>

              <div className="space-y-4">
                <div className="border-l-3 border-uffa-blue pl-4">
                  <h5 className="font-bold text-uffa-navy text-sm">Gargalo Operacional e Carga de Trabalho</h5>
                  <p className="text-xs text-uffa-navy/70 mt-1">
                    Secretaria e portarias operam no limite de tempo[cite: 1]. Cadernos de registro foram abandonados por falta de praticidade[cite: 1]. A ferramenta não pode exigir digitação burocrática ("Tem que vir para facilitar e não para atrapalhar")[cite: 1].
                  </p>
                </div>
                <div className="border-l-3 border-uffa-blue pl-4">
                  <h5 className="font-bold text-uffa-navy text-sm">Falta de Rastreabilidade e Comunicação</h5>
                  <p className="text-xs text-uffa-navy/70 mt-1">
                    A Portaria 02 declarou ficar "sem retorno" após repassar itens[cite: 1]. Não há comprovantes formais de entrada e saída, tornando a cadeia suscetível a desencontros[cite: 1].
                  </p>
                </div>
                <div className="border-l-3 border-uffa-blue pl-4">
                  <h5 className="font-bold text-uffa-navy text-sm">O Ponto Crítico da Troca de Turnos</h5>
                  <p className="text-xs text-uffa-navy/70 mt-1">
                    A maior incidência de perdas ocorre na transição de aulas e turnos, quando as salas são trancadas pela zeladoria e os alunos ficam sem acesso aos pertences esquecidos[cite: 1].
                  </p>
                </div>
                <div className="border-l-3 border-uffa-blue pl-4">
                  <h5 className="font-bold text-uffa-navy text-sm">Tensão entre Validação e Exposição de Dados</h5>
                  <p className="text-xs text-uffa-navy/70 mt-1">
                    Enquanto a portaria defende exigir documentos de quem retira[cite: 1], a secretaria preconiza expor apenas a foto com descrição oculta para evitar reivindicações ilegítimas[cite: 1].
                  </p>
                </div>
              </div>
            </div>

            {/* Requisitos e Diretrizes para o Design */}
            <div className="bg-white/90 border border-uffa-navy/10 rounded-3xl p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-uffa-blue uppercase">Diretrizes de UX</span>
                <h4 className="text-xl font-bold text-uffa-navy mt-1 mb-4">Requisitos Identificados para a Solução</h4>
                <p className="text-xs md:text-sm text-uffa-navy/75 leading-relaxed mb-6">
                  Conclusões que irão orientar diretamente a ideação e a criação dos wireframes na próxima fase:
                </p>

                <div className="space-y-4">
                  <div className="bg-uffa-lightblue/35 p-4 rounded-2xl border border-uffa-blue/15">
                    <h5 className="font-bold text-uffa-navy text-sm">1. Cadastro em 2 Cliques + Impressão de Etiqueta</h5>
                    <p className="text-xs text-uffa-navy/70 mt-1">
                      Fluxo de entrada ultrarrápido: foto automática + geração de identificador com data e local para substituir a fita adesiva manual[cite: 1].
                    </p>
                  </div>
                  <div className="bg-uffa-lightblue/35 p-4 rounded-2xl border border-uffa-blue/15">
                    <h5 className="font-bold text-uffa-navy text-sm">2. Termo Digital de Transferência / Recibo</h5>
                    <p className="text-xs text-uffa-navy/70 mt-1">
                      Registro de custódia simples ("de quem recebeu" para "quem transferiu") para fechar o ciclo de comunicação entre portaria e secretaria[cite: 1].
                    </p>
                  </div>
                  <div className="bg-uffa-lightblue/35 p-4 rounded-2xl border border-uffa-blue/15">
                    <h5 className="font-bold text-uffa-navy text-sm">3. Visualização Pública com Ocultamento Seguro</h5>
                    <p className="text-xs text-uffa-navy/70 mt-1">
                      Catálogo público que exibe a foto do item, mas oculta descrições minuciosas e marcas singulares, exigindo validação prévia na devolução[cite: 1].
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionDefault>
  );
}