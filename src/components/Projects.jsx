import { PROJECTS } from "../data/projects";
import FadeSection from "./FadeSection";

export default function Projects({ innerRef }) {
  return (
    <section ref={innerRef} className="border-t border-white/10 py-24">
      <div className="max-w-[1100px] mx-auto px-8">

        {/* Header */}
        <FadeSection>
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-2">03</p>
            <h2 className="text-5xl font-semibold">Projects</h2>
            <div className="w-12 h-[2px] bg-white/20 mt-4"></div>
          </div>
        </FadeSection>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PROJECTS.map((p, i) => (
            <FadeSection key={p.title}>
              
              <div
                className={`h-full flex flex-col p-6 rounded-2xl border border-white/10 backdrop-blur 
                ${
                  i === 0 && "bg-gradient-to-br from-indigo-900/40 to-black"
                }
                ${
                  i === 1 && "bg-gradient-to-br from-green-900/40 to-black"
                }
                ${
                  i === 2 && "bg-gradient-to-br from-red-900/40 to-black"
                }
                ${
                  i === 3 && "bg-gradient-to-br from-yellow-900/40 to-black"
                }
                ${
                 i === 4 && "bg-gradient-to-br from-pink-900/40 to-black"
                }
                ${
                 i == 5 && "bg-gradient-to-br from-purple-900/40 to-black"
                }
                hover:scale-[1.02] transition duration-300`}
              >

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}