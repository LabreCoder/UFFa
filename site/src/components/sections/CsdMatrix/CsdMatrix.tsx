import { useState } from "react";
import { CSD_DATA, CSD_DATA_AFTER } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";

// Se colocar o arquivo na pasta src/assets, descomente a linha abaixo:
// import csdPdf from "../../../assets/matriz-csd-uffa.pdf";

function MatrixColumns({ data, badgeLabel }) {
  return (
    <div className="flex-1 p-6 bg-white/40 border border-uffa-navy/10 rounded-3xl">
      {badgeLabel && (
        <div className="mb-6 flex items-center justify-between border-b border-uffa-navy/30 pb-3">
          <span className="text-sm font-bold uppercase tracking-wider text-uffa-navy">
            {badgeLabel}
          </span>
          <span className="text-xs text-uffa-navy/50 font-medium">
            {data.certezas.length + data.suposicoes.length + data.duvidas.length} itens mapeados
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Certezas */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-uffa-green/70" />
            <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">
              Certezas ({data.certezas.length})
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {data.certezas.map((item, i) => {
              const isObject = typeof item === "object" && item !== null;
              const textContent = isObject ? item.texto : item;
              const link = isObject ? item.link : null;

              return (
                <div
                  key={i}
                  className="bg-uffa-green/15 border border-uffa-green/30 rounded-xl p-4 text-sm text-uffa-navy leading-relaxed hover:bg-uffa-tractorgreen/20 transition-colors flex flex-col justify-between gap-3 shadow-xs"
                >
                  <p>{textContent}</p>
                  {link && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-uffa-navy/80 hover:text-uffa-navy underline decoration-uffa-navy/30 underline-offset-2 pt-1 border-t border-uffa-tractorgreen/20"
                    >
                      <svg
                        className="w-3.5 h-3.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {link.rotulo || "Ver fonte"}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Suposições */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-uffa-yellow/70" />
            <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">
              Suposições ({data.suposicoes.length})
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {data.suposicoes.map((item, i) => (
              <div
                key={i}
                className="bg-uffa-yellow/20 border border-uffa-yellow/40 rounded-xl p-4 text-sm text-uffa-navy leading-relaxed hover:bg-uffa-yellow/30 transition-colors shadow-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Dúvidas */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-uffa-red/70" />
            <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">
              Dúvidas ({data.duvidas.length})
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {data.duvidas.map((item, i) => (
              <div
                key={i}
                className="bg-uffa-red/12 border border-uffa-red/30 rounded-xl p-4 text-sm text-uffa-navy leading-relaxed hover:bg-uffa-red/18 transition-colors shadow-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CsdMatrix() {
  const [viewMode, setViewMode] = useState("all"); // 'before' | 'after' | 'all'

  const pdfDownloadUrl = "public/matriz-csd-uffa.pdf";

  return (
    <section id="descobertas" className="relative py-24 px-6 bg-uffa-lightblue">
      <SectionImage image="image1" />
      <div
        className={`mx-auto transition-all duration-300 ${
          viewMode === "all" ? "max-w-4/5" : "max-w-5xl"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag="Matriz CSD"
            title="Certezas, Suposições e Dúvidas"
            description="Mapeamos o que sabemos, o que supomos e o que investigamos antes e depois dos apontamentos da consultoria."
            className="mb-0"
          />

          {/* Seletor de visualização */}
          <div className="inline-flex self-start md:self-auto p-1.5 bg-white/70 backdrop-blur-sm border border-uffa-navy/10 rounded-2xl shadow-xs shrink-0">
            <button
              onClick={() => setViewMode("before")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                viewMode === "before"
                  ? "bg-uffa-navy text-white shadow-sm"
                  : "text-uffa-navy/70 hover:text-uffa-navy hover:bg-black/5"
              }`}
            >
              Antes
            </button>
            <button
              onClick={() => setViewMode("after")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                viewMode === "after"
                  ? "bg-uffa-navy text-white shadow-sm"
                  : "text-uffa-navy/70 hover:text-uffa-navy hover:bg-black/5"
              }`}
            >
              Depois
            </button>
            <button
              onClick={() => setViewMode("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                viewMode === "all"
                  ? "bg-uffa-navy text-white shadow-sm"
                  : "text-uffa-navy/70 hover:text-uffa-navy hover:bg-black/5"
              }`}
            >
              Comparativo
            </button>
          </div>
        </div>

        {/* Visualizações */}
        {viewMode === "before" && (
          <MatrixColumns
            data={CSD_DATA}
            badgeLabel="Matriz Inicial (Antes da Consultoria)"
          />
        )}

        {viewMode === "after" && (
          <MatrixColumns
            data={CSD_DATA_AFTER}
            badgeLabel="Matriz Refinada com Fontes (Pós-Consultoria)"
          />
        )}

        {viewMode === "all" && (
          <div className="flex flex-col xl:flex-row gap-8">
            <div>
              <MatrixColumns
                data={CSD_DATA}
                badgeLabel="Antes da Consultoria"
              />
            </div>

            <div>
              <MatrixColumns
                data={CSD_DATA_AFTER}
                badgeLabel="Depois da Consultoria"
              />
            </div>
          </div>
        )}

        {/* Bloco de Download do PDF */}
        <div className="mt-12 p-6 rounded-2xl bg-white/50 border border-uffa-navy/10 backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-uffa-navy/10 text-uffa-navy flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-uffa-navy">
                Matriz CSD Completa (PDF)
              </h4>
              <p className="text-xs text-uffa-navy/60">
                Baixe o documento com as certezas, suposições e dúvidas.
              </p>
            </div>
          </div>

          <a
            href={pdfDownloadUrl}
            download="Matriz-CSD-UFFa.pdf"
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