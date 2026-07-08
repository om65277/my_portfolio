import FadeSection from "./FadeSection";

export default function About({ innerRef }) {
  return (
    <section ref={innerRef} className="py-24 border-t border-white/10">
      <div className="max-w-[1100px] mx-auto px-8">

        <FadeSection>
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-2">01</p>
            <h2 className="text-5xl font-semibold">About me</h2>
            <div className="w-12 h-[2px] bg-white/20 mt-4"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="text-gray-400 u87 leading-relaxed space-y-6">
              <p>
               Hi, I'm <b>Om Nadarkar</b>, a Bachelor of Computer Applications ( BCA ) student at Dr. D. Y. Patil Arts, Commerce & Science College, based in Pune, India.
              </p>

              <p>
                I’m a passionate MERN Stack Developer who enjoys building full-stack web applications that are fast, scalable, and visually refined.
              </p>

              <p>
                I focus on creating seamless user experiences while maintaining clean and efficient code.
                Also a strong foundation in Core Java and Data Structures & Algorithms, I approach problem-solving with clarity and logic. 
              </p> 
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-4">
              
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex justify-between">
                <span className="text-gray-500">Stack</span>
                <span>MERN — MongoDB, Express, React, Node.js</span>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex justify-between">
                <span className="text-gray-500">Currently exploring</span>
                <span>AI, Cloud, Data Eng.</span>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex justify-between">
                <span className="text-gray-500">Education</span>
                <span>Bachelor of Computer Applications ( BCA )</span>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex justify-between">
                <span className="text-gray-500">Open to</span>
                <span>Full-time job, Internships, Freelance</span>
              </div>

            </div>
          </div>

        </FadeSection>
      </div>
    </section>
  );
}