import { workExperience } from "@/data";
import { TracingBeam } from "./ui/tracing-beam";

const Experience = () => {
  return (
    <section className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">work experience</span>
      </h1>

      <TracingBeam className="mt-12 px-2 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {workExperience.map((card, idx) => (
            <article
              key={card.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-[0_25px_80px_rgba(3,8,23,0.55)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-white/80 ring-1 ring-white/20">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="h-10 w-10 flex-shrink-0 rounded-xl object-cover ring-1 ring-white/10"
                      loading="lazy"
                    />
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-300/70">
                      Experience
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
};

export default Experience;
