import "./navbar.css";

function Navbar() {
  return (
    <header className="bg-white max-w-full h-[60px] shadow-md flex justify-around items-center sticky top-0 z-50">
      <div className="uppercase font-bold text-3xl">
        <a href="#">Jattapol</a>
      </div>
      <div className="menu-left">
        <ul className="flex items-center space-x-10">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
