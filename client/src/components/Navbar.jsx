import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoSrc = theme === "dark" ? "/Logo-dark.png" : "/Logo-light.png";

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
            src={logoSrc}
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
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8 text-sm uppercase tracking-wide">
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

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-black hover:text-black"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3c-.1.33-.15.68-.15 1.04A8 8 0 0 0 19.96 12c.36 0 .71-.05 1.04-.15Z" />
              </svg>
            )}
          </button>
        </div>

        {/* Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-black hover:text-black"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3c-.1.33-.15.68-.15 1.04A8 8 0 0 0 19.96 12c.36 0 .71-.05 1.04-.15Z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="flex flex-col gap-[5px]"
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
