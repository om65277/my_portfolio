import { SKILLS } from "../data/skills";
import FadeSection from "./FadeSection";

export default function Skills({ innerRef }) {
  return (
    <section ref={innerRef} className="border-t border-white/10 py-24 bg-black">
      <div className="max-w-[1100px] mx-auto px-8">

        <FadeSection>

          {/* Section Header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-500 mb-3">02</p>
            <h2 className="text-5xl font-bold text-gray-200">Skills</h2>
            <div className="w-10 h-[2px] bg-white/20 mt-4"></div>
          </div>

          {/* Skills */}
          <div className="space-y-10">
            {Object.entries(SKILLS).map(([cat, items]) => (
              
              <div key={cat} className="grid grid-cols-[120px_1fr] gap-6 items-start">

                {/* Left Category */}
                <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mt-2">
                  {cat}
                </h3>

                {/* Right Skills */}
                <div className="flex flex-wrap gap-3">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 text-sm rounded-lg border border-white/10 
                                 bg-white/[0.03] text-gray-300 
                                 hover:bg-white/[0.08] hover:border-white/30 
                                 hover:text-white transition-all duration-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </FadeSection>
      </div>
    </section>
  );
}