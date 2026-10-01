import { SectionHeader } from "../../ui/SectionHeader";
import { Badge } from "../../ui/Badge";
import { SectionImage } from "../../ui/SectionImage";
import { SectionDefault } from "../../ui/SectionDefault";

const RESEARCH_STEPS = [
  {
    label: "Análise da Situação Atual & Desk Research",
    desc: "Mapeamento preliminar do contexto, atores e dinâmica de perdas no campus da UFF com levantamento de dados secundários.",
    done: true,
  },
  {
    label: "Design Challenge (HMW) & Matriz CSD",
    desc: "Formulação das perguntas 'Como nós podemos...' e estruturação das Certezas, Suposições e Dúvidas com referências empíricas.",
    done: true,
  },
  {
    label: "Análise Competitiva / Inspiradora",
    desc: "Benchmarking de soluções diretas, indiretas e análogas de achados e perdidos, levantando oportunidades para a interação.",
    done: true,
  },
  {
    label: "Mapa de Empatia",
    desc: "Levantamento de hipóteses e requisitos de UX com base no que os usuários observam, sentem, pensam, falam e enfrentam.",
    done: true,
  },
  {
    label: "Pesquisa Quantitativa (Questionário)",
    desc: "Coleta e análise estatística de 23 respostas com a comunidade acadêmica da UFF para validar comportamentos e taxas de resgate.",
    done: true,
  },
  {
    label: "Pesquisa Qualitativa de Campo (Entrevistas & TCLE)",
    desc: "Aplicação do TCLE e entrevistas semiestruturadas com 5 servidores no Instituto de Computação (Secretaria e Portarias 01 e 02), mapeando o fluxo real do objeto e tensões operacionais.",
    done: true,
  },
  {
    label: "Análise Temática & Requisitos de UX",
    desc: "Codificação qualitativa das respostas, mapeamento das barreiras de turno/privacidade e síntese das diretrizes que guiarão a solução.",
    done: true,
  },
  {
    label: "Modelagem de Personas e Jornadas",
    desc: "Construção de arquétipos representativos dos papéis identificados (Secretaria, Portaria e Aluno) a partir das evidências de campo.",
    done: false,
  },
  {
    label: "Ideação e Prototipação da Solução",
    desc: "Desenvolvimento de wireframes e protótipos de interação guiados pelos requisitos levantados (cadastro rápido, termos e visualização segura).",
    done: false,
  },
];

export function ResearchTimeline() {
  return (
    <SectionDefault id="pesquisa" colorDefault="bg-uffa-coral/30">
      <SectionImage image="image1" />
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Nossa Pesquisa"
          title="O que fizemos até aqui"
          description="Acompanhe as etapas metodológicas executadas ao longo do projeto, da desk research às investigações de campo com TCLE."
          className="mb-14"
          tagColor="text-uffa-blue"
        />

        <div className="relative w-full">
          <div className="absolute left-6 top-3 bottom-6 w-0.5 bg-uffa-navy/15 hidden md:block" />

          <div className="flex flex-col gap-6">
            {RESEARCH_STEPS.map((step, i) => (
              <div key={i} className="relative flex gap-6 md:gap-8 items-start w-full">
                <div
                  className="hidden md:flex shrink-0 w-12 h-12 rounded-full border-2 items-center justify-center z-10 mt-1 shadow-xs"
                  style={{
                    backgroundColor: step.done ? "var(--color-uffa-blue)" : "var(--color-uffa-bg)",
                    borderColor: step.done ? "var(--color-uffa-blue)" : "rgba(10, 24, 40, 0.2)",
                  }}
                >
                  {step.done ? (
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span className="w-2.5 h-2.5 rounded-full bg-uffa-navy/30" />
                  )}
                </div>

                <div
                  className={`flex-1 rounded-3xl p-6 md:p-8 border transition-all duration-200 ${
                    step.done
                      ? "bg-white/90 border-uffa-navy/10 hover:shadow-sm"
                      : "bg-white/60 border-uffa-gold/80 shadow-xs"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-uffa-navy text-lg md:text-xl">{step.label}</h3>
                    {!step.done && (
                      <Badge variant="red" className="text-xs px-2.5 py-0.5">Próximos Passos</Badge>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-uffa-navy/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionDefault>
  );
}