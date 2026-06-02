export default function Hero({ scrollTo, activeNav, NAV_ITEMS }) {
  return (
    <div className="max-w-[1100px] mx-auto px-8 pt-12">
      
      {/* Banner */}
      <div className="h-[180px] rounded-xl overflow-hidden border border-white/10">
        <img
          src="/banner.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile */}
      <div className="-mt-20 ml-6">
        <div className="w-60 h-60 rounded-full border-4 border-black overflow-hidden shadow-lg">
          <img
            src="/profile.png"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="ml-6 mt-5">
        <h1 className="text-5xl font-bold">Om Nadarkar</h1>
        <p className="text-gray-300 text-sm mt-2">
          MERN Stack Developer · React.js · Node.js · Express.js · MongoDB · Core Java + DSA
        </p>
        <span className="text-sm text-gray-500">
          Pune, Maharashtra, India
        </span>
      </div>

      {/* Nav */}
      <div className="flex gap-3 mt-6 ml-6 pb-10 flex-wrap">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className={`px-5 py-2 border rounded-full text-sm transition ${
              activeNav === item
                ? "bg-white text-black"
                : "border-white/20 hover:bg-white/10"
            }`}
          >
            {item}
          </button>
        ))}

        {/* ✅ Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full text-sm bg-black text-white border border-white/20 hover:bg-white/10 transition"
        >
          Resume
        </a>
      </div>
    </div>
  );
}