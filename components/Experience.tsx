import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">work experience</span>
      </h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {workExperience.map((card) => (
          <article
            key={card.id}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(3,8,23,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:border-white/30"
          >
            <div className="flex items-start gap-5">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                loading="lazy"
              />
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-white md:text-xl">
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
    </section>
  );
};

export default Experience;
