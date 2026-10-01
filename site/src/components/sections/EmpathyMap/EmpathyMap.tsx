import { EMPATHY_DATA } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";
import { SectionDefault } from "../../ui/SectionDefault";
import mapa from "../../../assets/mapa-empatia-uffa.jpeg";
import mapaEmpatia from "../../../../public/mapa-empatia-uffa.pdf";

export function EmpathyMap() {
  const pdfDownloadUrl = mapaEmpatia;
  const photo = mapa;
  const color = "bg-uffa-azulpetroleo";

  return (
    <SectionDefault colorDefault="bg-uffa-white/10">
      <SectionImage image="image1" />
      
      {/* Contêiner mestre com alinhamento e largura padronizados */}
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Mapa de Empatia"
          title="Hipóteses sobre o usuário"
          description="Mapeamento hipotético sobre o que o usuário pensa, sente, escuta, vê, fala e faz ao vivenciar a perda ou encontro de pertences."
          className="mb-14"
          tagColor="text-uffa-blue"
        />

        {/* Grid dos 4 quadrantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {EMPATHY_DATA.map((q) => (
            <div
              key={q.quadrant}
              className={`${q.color} border rounded-3xl p-7 md:p-8 hover:shadow-sm transition-shadow flex flex-col justify-between`}
            >
              <div>
                <div className="flex flex-col items-center mb-6">
                  <span className="text-3xl mb-2">{q.icon}</span>
                  <span className={`font-bold text-lg md:text-xl tracking-widest uppercase ${q.header}`}>
                    {q.quadrant}
                  </span>
                </div>

                {/* Perguntas norteadoras */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-4 w-full">
                  <div className="text-left text-xs md:text-sm text-uffa-navy/80">
                    <span className="font-bold">Q. 1 - </span>
                    <span className="font-semibold">{q.questions[0]}</span>
                  </div>
                  <div className="h-8 w-px bg-uffa-navy/20" />
                  <div className="text-right text-xs md:text-sm text-uffa-navy/80">
                    <span className="font-bold">Q. 2 - </span>
                    <span className="font-semibold">{q.questions[1]}</span>
                  </div>
                </div>

                <div className="h-px w-full bg-uffa-navy/10 my-5" />

                {/* Itens do quadrante */}
                <ul className="flex flex-col gap-3">
                  {q.items.map((item, i) => (
                    <li key={i} className="text-sm md:text-base text-uffa-navy/80 leading-relaxed flex items-start gap-2.5">
                      <span className="text-uffa-navy/40 font-bold mt-0.5">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bloco de imagem da dinâmica presencial */}
        <div className="mb-14 p-8 md:p-10 rounded-3xl bg-white/70 border border-uffa-navy/10 shadow-xs">
          <p className="text-base md:text-lg text-uffa-navy mb-6">
            Abaixo segue nosso <strong>mapa</strong> realizado em sala de aula no dia:{" "}
            <strong className="text-uffa-blue italic">04/08/2026</strong>.
          </p>
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
            <img
              src={photo}
              alt="Mapa de Empatia em sala de aula"
              className="w-full rounded-2xl border-2 border-uffa-gold/40 shadow-sm object-cover"
            />
          </div>
        </div>

        {/* Bloco de Download do PDF padronizado */}
        <div className="p-7 md:p-8 rounded-3xl bg-white/60 border border-uffa-navy/10 backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-uffa-navy/10 text-uffa-navy flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-semibold text-uffa-navy">
                Documento de Mapa de Empatia (PDF)
              </h4>
              <p className="text-xs md:text-sm text-uffa-navy/65">
                Baixe o mapa de empatia completo com as hipóteses detalhadas.
              </p>
            </div>
          </div>

          <a
            href={pdfDownloadUrl}
            download="Mapa_Empatia_UFFA.pdf"
            className={`inline-flex items-center gap-2.5 px-6 py-3 ${color} hover:bg-uffa-navy/90 text-white rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow shrink-0 cursor-pointer`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Baixar PDF
          </a>
        </div>
      </div>
    </SectionDefault>
  );
}