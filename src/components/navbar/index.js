import './navbar.css'

function Navbar() {
  return (
    <header className="bg-white max-w-full h-[60px] shadow-md flex justify-around items-center">
      <div className="uppercase font-bold text-3xl">
        <a>Jattapol</a>
      </div>
      <div className="menu-left">
        <button className="flex items-center space-x-10">
          <a to={{ path: '/', hash: "#About" }}>About</a>
          <a to={{ path: '/', hash: "#Resume" }}>Resume</a>
          <a to={{ path: '/', hash: "#Skills" }}>Skills</a>
          <a to={{ path: '/', hash: "#Projects" }}>Projects</a>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
