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

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="text-gray-400 u87 leading-relaxed space-y-6">

              <p>
                Hi,<b>Everyone 👋</b>
              </p>

              <p>
                I’m Om Nadarkar, a BCA graduate passionate about building a career in Data Engineering.
              </p>

              <div>
                <p className="text-gray-400 u87 leading-relaxed space-y-6">I completed my degree in Bachelor of Computer Applications (BCA), where I developed a strong foundation in programming and data-related concepts. Over time, I discovered my interest in working with data — understanding it, transforming it, and using it to build meaningful solutions.</p>
                {/* <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Learning Apache Spark and PySpark for large-scale data processing</li>
                  <li>Deepening my understanding of SQL for data analysis and transformations</li>
                  <li>Exploring ETL pipeline design and real-world data workflows</li>
                  <li>Practicing real-world data problems and use cases</li>
                </ul> */}
              </div>

              <div>
                <p className="font-semibold text-white">💻 What I Do</p>
                <p className="text-gray-400 u87 leading-relaxed space-y-6">I focus on working with data using technologies like Python, SQL, Pandas, and PySpark. I enjoy cleaning raw data, performing transformations, and building simple ETL pipelines to understand how data flows in real-world systems.</p>
              </div>

              <div>
                <p className="font-semibold text-white">I have hands-on experience with:</p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Writing SQL queries for data analysis</li>
                  <li>Data cleaning and manipulation using Pandas</li>
                  <li>Processing large datasets using PySpark</li>
                  <li>Understanding ETL (Extract, Transform, Load) concepts</li>
                </ul>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-4">

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex justify-between">
                <span className="text-gray-500">Stack</span>
                <span>Data Engineer | Full-Stack Dev (MERN)</span>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex justify-between">
                <span className="text-gray-500">Currently exploring</span>
                <span>AI, Cloud, Data Engineering</span>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex justify-between">
                <span className="text-gray-500">Education</span>
                <span>Bachelor of Computer Applications ( BCA )</span>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex justify-between">
                <span className="text-gray-500">College</span>
                <span>Dr. D. Y. Patil Arts, Commerce & Science College</span>
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