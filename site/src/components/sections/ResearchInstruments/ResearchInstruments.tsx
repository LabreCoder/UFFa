import { RESEARCH_PROFILES, QUESTIONNAIRE_TOPICS } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionDefault } from "../../ui/SectionDefault";

export function ResearchInstruments() {
  return (
    <SectionDefault colorDefault="bg-uffa-coral/20">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        
        {/* ========================================================= */}
        {/* PARTE 1: INSTRUMENTOS METODOLÓGICOS (EXISTENTES)          */}
        {/* ========================================================= */}
        <div>
          <SectionHeader
            tag="Instrumentos de Pesquisa"
            title="Entrevistas e Questionário"
            tagColor="text-uffa-blue"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Roteiro Qualitativo */}
            <div className="bg-white border border-uffa-navy/8 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-uffa-blue/10 flex items-center justify-center text-lg">🎙️</div>
                <h3 className="font-semibold text-uffa-navy text-lg">Roteiro Semiestruturado</h3>
              </div>
              <p className="text-sm text-uffa-navy/60 leading-relaxed mb-6">
                Instrumento qualitativo elaborado para explorar experiências, motivações e barreiras em profundidade. Quatro perfis de participantes definidos:
              </p>
              <div className="flex flex-col gap-3">
                {RESEARCH_PROFILES.map((p) => (
                  <div key={p.label} className="flex items-start gap-3 bg-uffa-lightblue/50 rounded-xl px-4 py-3">
                    <span className="text-lg shrink-0">{p.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-uffa-navy">{p.label}</p>
                      <p className="text-xs text-uffa-navy/65 leading-relaxed mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Questionário Quantitativo */}
            <div className="bg-white border border-uffa-navy/8 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-uffa-blue/10 flex items-center justify-center text-lg">📊</div>
                  <h3 className="font-semibold text-uffa-navy text-lg">Questionário Quantitativo</h3>
                </div>
                <p className="text-sm text-uffa-navy/60 leading-relaxed mb-6">
                  Validação com a comunidade acadêmica da UFF (n=23 respostas coletadas com consentimento).
                </p>
                <div className="flex flex-col gap-4">
                  {QUESTIONNAIRE_TOPICS.map((t) => (
                    <div key={t.label} className="border-l-2 border-uffa-blue/40 pl-4">
                      <p className="text-sm font-medium text-uffa-navy">{t.label}</p>
                      <p className="text-xs text-uffa-navy/60 mt-0.5">{t.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão para o Questionário */}
              <div className="mt-8 pt-6 border-t border-uffa-navy/10 flex items-center justify-between">
                <span className="text-xs text-uffa-navy/60">Acessar formulário original:</span>
                <a
                  href="https://docs.google.com/forms/d/1ELlygIwhemoqmasnITXQ0LlBrhuB33XAw4cWwxnLp1c/edit?ts=6aae9f1a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-uffa-blue text-white text-xs font-medium px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
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
            tagColor="text-uffa-blue"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-uffa-navy/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider text-uffa-blue uppercase">Gargalo Crítico</span>
                <h4 className="text-xl font-bold text-uffa-navy mt-1 mb-3">70% não sabem onde entregar</h4>
                <p className="text-sm text-uffa-navy/70 leading-relaxed mb-4">
                  16 de 23 pessoas não sabem ou têm dúvidas sobre o local correto. A portaria é usada como improviso: 7 de 8 que entregaram lá disseram não ter certeza se era o canal oficial.
                </p>
              </div>
              <div className="bg-uffa-lightblue/30 rounded-xl p-3 border border-uffa-blue/10">
                <div className="flex justify-between text-xs font-medium text-uffa-navy mb-1">
                  <span>Pedem clareza de onde ir</span>
                  <span className="font-bold">91%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-uffa-blue h-full w-[91%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-uffa-navy/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider text-uffa-blue uppercase">Efetividade</span>
                <h4 className="text-xl font-bold text-uffa-navy mt-1 mb-3">Perda frequente, resgate raro</h4>
                <p className="text-sm text-uffa-navy/70 leading-relaxed mb-4">
                  Das 11 pessoas que perderam itens no último ano, só 4 recuperaram (todas garrafas, refazendo o caminho a pé). Documentos e cartões tiveram 0% de recuperação.
                </p>
              </div>
              <div className="bg-uffa-lightblue/30 rounded-xl p-3 border border-uffa-blue/10">
                <div className="flex justify-between text-xs font-medium text-uffa-navy mb-1">
                  <span>Taxa de recuperação observada</span>
                  <span className="font-bold">36%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[36%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-uffa-navy/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider text-uffa-blue uppercase">Privacidade e Posse</span>
                <h4 className="text-xl font-bold text-uffa-navy mt-1 mb-3">Verificação vs Exposição</h4>
                <p className="text-sm text-uffa-navy/70 leading-relaxed mb-4">
                  88% exigem checagem de dados que só o dono sabe antes de entregar. A solução precisa exibir fotos sem revelar características que validam a propriedade.
                </p>
              </div>
              <div className="bg-uffa-lightblue/30 rounded-xl p-3 border border-uffa-blue/10">
                <div className="flex justify-between text-xs font-medium text-uffa-navy mb-1">
                  <span>Prioridade à devolução segura</span>
                  <span className="font-bold">87%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[87%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PARTE 3: RESERVA PARA A TÉCNICA QUALITATIVA (PENDENTE)    */}
        {/* ========================================================= */}
        <div className="border-2 border-dashed border-uffa-navy/20 rounded-3xl p-8 bg-white/40">
          <SectionHeader
            tag="Etapa Qualitativa"
            title="Entrevistas em Profundidade e TCLE"
            tagColor="text-uffa-blue"
          />
          <p className="text-sm text-uffa-navy/70 mb-6">
            Espaço reservado para a documentação da técnica qualitativa de campo conforme os requisitos da avaliação:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-uffa-navy/10">
              <h5 className="font-semibold text-uffa-navy text-sm mb-2">1. Seleção dos Participantes</h5>
              <p className="text-xs text-uffa-navy/60 leading-relaxed">
                Justificativa da escolha dos perfis recrutados (Docentes/Técnicos, Atendentes/Portaria e Alunos) demonstrando a relevância de cada ator no fluxo.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-uffa-navy/10">
              <h5 className="font-semibold text-uffa-navy text-sm mb-2">2. Termos de Consentimento (TCLE)</h5>
              <p className="text-xs text-uffa-navy/60 leading-relaxed">
                Repositório dos termos de consentimento livre e esclarecido aplicados aos entrevistados, garantindo a ética na pesquisa.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-uffa-navy/10">
              <h5 className="font-semibold text-uffa-navy text-sm mb-2">3. Análise Temática & Conclusões</h5>
              <p className="text-xs text-uffa-navy/60 leading-relaxed">
                Método de análise adotado (ex: Análise Temática de Braun & Clarke) e os principais direcionadores que orientarão os protótipos da solução.
              </p>
            </div>
          </div>
        </div>

      </div>
    </SectionDefault>
  );
}