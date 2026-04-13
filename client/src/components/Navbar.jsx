import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav link style with animated underline
  const navClass = ({ isActive }) =>
    `relative pb-1 transition-all duration-300 ${
      isActive ? "text-black" : "text-neutral-500 hover:text-black"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-neutral-200 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-white "
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="logo"
            className={`transition-all duration-300 object-contain ${
              scrolled ? "h-12" : "h-20"
            }`}
          />
          <span className=" text-lg font-semibold lowercase sm:block">
            in nature architects
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-wide md:flex">
          {["/", "/projects", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Projects", "About", "Contact"];
            return (
              <NavLink key={path} to={path} className={navClass}>
                {({ isActive }) => (
                  <>
                    {labels[i]}
                    <span
                      className={`absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "group-hover:scale-x-100"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Hamburger Button */}
        <button
          className="flex flex-col gap-[5px] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-[2px] w-6 bg-black transition-all ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-black transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-black transition-all ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64 border-t border-neutral-200" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 py-6 text-sm uppercase tracking-wide">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
