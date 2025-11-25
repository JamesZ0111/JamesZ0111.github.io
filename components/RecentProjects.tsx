"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { Meteors } from "./ui/meteors";

const RecentProjects = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleProject = (projectId: number) => {
    setExpandedId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <section id="projects" className="pt-32">
      <div className="py-16">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">recent projects</span>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((item) => {
            const isExpanded = expandedId === item.id;
            const detailsId = `project-details-${item.id}`;

            return (
              <article
                key={item.id}
                className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(3,8,23,0.5)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 hover:border-white/40"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div aria-hidden className="absolute inset-0">
                  <Meteors number={22} className="opacity-60" />
                </div>

                <div className="relative flex w-full flex-col">
                  <button
                    type="button"
                    onClick={() => toggleProject(item.id)}
                    className="w-full text-left"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                  >
                    <div className="relative mb-8 h-56 overflow-hidden rounded-2xl border border-white/5">
                      <Image
                        src={item.img}
                        alt={`${item.title} showcase`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 30vw"
                        className="object-cover"
                        priority={item.id === 1}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300">
                          {item.summary}
                        </p>
                      </div>
                      <FaChevronDown
                        className={`mt-1 text-slate-300 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    {item.iconLists.length > 0 && (
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 first:ml-0"
                          >
                            <img src={icon} alt="tech icon" className="h-5 w-5" loading="lazy" />
                          </div>
                        ))}
                      </div>
                    )}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-100 transition hover:border-white/50 hover:text-white"
                    >
                      Visit website
                      <FaLocationArrow className="text-sm" />
                    </a>
                  </div>

                  <div
                    id={detailsId}
                    className={`mt-4 overflow-hidden text-sm text-slate-200 transition-all duration-300 ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-2 leading-relaxed">
                      {item.details?.map((detail, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-300" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
