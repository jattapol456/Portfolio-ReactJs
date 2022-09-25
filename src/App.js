import "./App.css";
import Aboutme from "./components/aboutme";
import Experienc from "./components/experienc";
import Skill from "./components/skill";

function App() {
  return (
    <main className="lg:px-56 sm:px-24 px-6 bg-gray-200 py-32">
      <div id="About" className="selection px-20 py-20 rounded-lg shadow-lg mb-52 bg-white">
        <Aboutme/>
      </div>

      <div className="selection px-12 py-12 rounded-lg shadow-lg mb-52 bg-white">
        <div className="font-bold uppercase">
          <h1 className="text-5xl text-center"> Resume </h1>
          <div id="Experience" className="pt-8">
            <p className="text-2xl pl-[5%]">Experience</p>
            <div className="pt-[50px]">
              <Experienc />
            </div>
          </div>

          <div id="Skills" className="pt-20">
            <p className="text-2xl pl-[5%]">Technical Skill</p>
            <div className="pt-[50px]">
              <Skill />
            </div>
          </div>
        </div>
      </div>

      <div className="selection px-12 py-12 rounded-lg shadow-lg mb-52 bg-white">
        <div className="font-bold uppercase">
          <h1 className="text-5xl text-center"> Resume </h1>
          
        </div>
      </div>
    </main>
  );
}

export default App;
