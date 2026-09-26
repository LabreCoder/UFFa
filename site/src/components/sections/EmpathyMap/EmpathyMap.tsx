import { EMPATHY_DATA } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";
import mapa from "../../../assets/mapa-empatia-uffa.jpeg";

export function EmpathyMap() {

  const pdfDownloadUrl = "/public/mapa-empatia-uffa.pdf";
  const photo = mapa;
  return (
    <section className="relative py-24 px-6 bg-uffa-white/10">
      <SectionImage image="image1" />
      <div className="max-w-4/5 mx-auto">
        <div className="mb-6">
          <SectionHeader
            tag="Mapa de Empatia"
            title="Hipóteses sobre o usuário"
            className="mb-0"
            tagColor="text-uffa-blue"
          />
        </div>
        {/*
        <p className="text-sm text-uffa-navy/60 mb-12 max-w-lg leading-relaxed bg-uffa-gold/20 border border-uffa-gold/40 rounded-xl px-4 py-3 inline-block">
          <strong>Atenção:</strong> Este mapa representa hipóteses de investigação a validar — não dados coletados.
        </p>
        */}

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {EMPATHY_DATA.map((q) => (
            <div key={q.quadrant} className={`${q.color} border rounded-2xl p-6 hover:shadow-sm transition-shadow`}>
              <div className="flex flex-col items-center mb-4">
                <span className="text-xl">{q.icon}</span>
                <span className={`font-bold text-lg tracking-widest uppercase ${q.header}`}>{q.quadrant}</span>
              </div>

              {/* Perguntas */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-4 w-full">
                <div className="text-left text-sm text-uffa-navy/75">
                  <span className="font-bold">Q. 1 - </span>
                  <span className="font-semibold">{q.questions[0]}</span>
                </div>
                <div className="h-8 w-[2px] bg-uffa-navy/20" />
                <div className="text-right text-sm text-uffa-navy/75">
                  <span className="font-bold">Q. 2 - </span>
                  <span className="font-semibold">{q.questions[1]}</span>
                </div>
              </div>

              <div className="h-0.5 w-full bg-uffa-navy/10 my-4" />
              {/* Itens do quadrante */}
              <ul className="flex flex-col gap-2.5">
                {q.items.map((item, i) => (
                  <li key={i} className="text-sm text-uffa-navy/75 leading-relaxed flex items-start gap-2">
                    <span className="text-uffa-navy/30 mt-1">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/*Área da imagem */}
        <div>
          <div className=" mb-6">
            <span className="text-xl">Abaixo segue nosso <strong>mapa</strong> realizado em sala de aula no dia: <strong>04/08/2026</strong>.</span>
          </div>
          <div className="max-w-1xl max-h-1xl">
            <img src={photo} alt="Mapa de Empatia" className="rounded mb-6" />
          </div>
        </div>

        {/* Área de Download do PDF */}
        <div className="p-6 rounded-2xl bg-white/50 border border-uffa-navy/10 backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-uffa-navy/10 text-uffa-navy flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-uffa-navy">
                Documento de Mapa de Empatia (PDF)
              </h4>
              <p className="text-xs text-uffa-navy/60">
                Baixe o mapa de empatia completo.
              </p>
            </div>
          </div>

          <a
            href={pdfDownloadUrl}
            download="Mapa_Empatia_UFFA.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-uffa-navy hover:bg-uffa-navy/90 text-white rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow shrink-0 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Baixar PDF
          </a>
        </div>
      </div>
    </section>
  );
}