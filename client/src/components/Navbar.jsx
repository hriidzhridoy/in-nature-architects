import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-black font-medium" : "text-neutral-500 hover:text-black"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide lowercase text-black"
        >
          innaturesarchitects
        </Link>

        <nav className="flex items-center gap-6 text-sm uppercase tracking-wide">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
