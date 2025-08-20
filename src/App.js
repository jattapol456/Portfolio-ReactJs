import "./App.css";
import { useEffect } from "react";
import Aboutme from "./components/aboutme";
import Experienc from "./components/experienc";
import Skill from "./components/skill";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".revealUp").forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        markers: false,
        onEnter: () => {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeave: () => {
          gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: () => {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeaveBack: () => {
          gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
        },
      });
    });
  }, []);

  const sections = [
    { component: <Aboutme />, id: "About" },
    { component: <Skill />, id: "Skills" },
    { component: <Experienc />, id: "Experience" }
  ];

  return (
    <main className="lg:px-56 sm:px-24 px-6 bg-gray-200 pt-32">
      {sections.map((section, idx) => (
        <div className="section" id={section.id} key={idx}>
          <div className="revealUp">{section.component}</div>
        </div>
      ))}
      <div className="spacer"></div>
    </main>
  );
}

export default App;
