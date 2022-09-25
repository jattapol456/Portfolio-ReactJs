import "./App.css";
import Aboutme from "./components/aboutme";
import Experienc from "./components/experienc";
import Skill from "./components/skill";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  // REVEAL //
  gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 80%",
      end: "bottom 20%",
      markers: false,
      onEnter: function () {
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
      onLeave: function () {
        gsap.fromTo(
          elem,
          { autoAlpha: 1 },
          { autoAlpha: 0, overwrite: "auto" }
        );
      },
      onEnterBack: function () {
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
      onLeaveBack: function () {
        gsap.fromTo(
          elem,
          { autoAlpha: 1 },
          { autoAlpha: 0, overwrite: "auto" }
        );
      },
    });
  });

  return (
    <main className="lg:px-56 sm:px-24 px-6 bg-gray-200 py-32">
      <div className="section">
        <div className="revealUp">
          <Aboutme />
        </div>
      </div>

      <div className="section">
        <div className="revealUp">
          <Experienc />
        </div>
      </div>

      <div className="section">
        <div className="revealUp">
          <Skill />
        </div>
      </div>

      <div class="spacer"></div>
    </main>
  );
}

export default App;
