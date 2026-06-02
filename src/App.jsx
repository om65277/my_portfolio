import { useRef, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV_ITEMS = ["About", "Skills", "Projects", "Contact"];

export default function App() {
  const refs = {
    About: useRef(null),
    Skills: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  const [activeNav, setActiveNav] = useState("About");

  const scrollTo = (key) => {
    const section = refs[key]?.current;

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveNav(key);
    } else {
      console.log("REF NOT FOUND:", key);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Hero
        scrollTo={scrollTo}
        activeNav={activeNav}
        NAV_ITEMS={NAV_ITEMS}
      />

      <About innerRef={refs.About} />
      <Skills innerRef={refs.Skills} />
      <Projects innerRef={refs.Projects} />
      <Contact innerRef={refs.Contact} />

      <Footer />
    </div>
  );
}