import { useState } from "react";
import FadeSection from "./FadeSection";

export default function Contact({ innerRef }) {
  const [sent, setSent] = useState(false);

  return (
    <section ref={innerRef} className="border-t border-white/10 py-24">
      <div className="max-w-[1100px] mx-auto px-8">

        {/* Header */}
        <FadeSection>
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-2">04</p>
            <h2 className="text-5xl font-semibold">Contact me</h2>
            <div className="w-12 h-[2px] bg-white/20 mt-4"></div>
          </div>
        </FadeSection>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <FadeSection>
            <div className="space-y-6 text-gray-400">

              <p>
                Have a project in mind or just want to say hi? I'm always open
                to interesting conversations and opportunities. Let's build
                something great together.
              </p>

              {/* Cards */}
              <div className="space-y-4">

                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-xs text-gray-500">EMAIL</p>
                  <p className="mt-1">omnadarkar1552@gmail.com</p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-xs text-gray-500">GITHUB</p>
                  <p className="mt-1">https://github.com/om65277</p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-xs text-gray-500">LINKEDIN</p>
                  <p className="mt-1">https://www.linkedin.com/in/om-nadarkar-1847a0284/</p>
                </div>

              </div>
            </div>
          </FadeSection>

          {/* RIGHT SIDE (FORM) */}
          <FadeSection>
            {sent ? (
              <p className="text-green-400">Message Sent!</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <input
                  placeholder="Your name"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/30"
                  required
                />

                <input
                  placeholder="Email address"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/30"
                  required
                />

                <textarea
                  placeholder="Your message..."
                  rows="5"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/30"
                  required
                />

                <button className="mt-4 px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
                  Send message →
                </button>
              </form>
            )}
          </FadeSection>

        </div>
      </div>
    </section>
  );
}