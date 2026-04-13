import { Link, NavLink } from "react-router-dom";
import {
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_PHONE,
  LINKEDIN_URL,
} from "../config/site";

function Footer({ theme }) {
  const logoSrc = theme === "dark" ? "/Logo-dark.png" : "/Logo-light.png";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logoSrc}
                alt="in nature architects"
                className="h-16 object-contain"
              />
              <span className="text-lg font-semibold lowercase text-black">
                in nature architects
              </span>
            </Link>

            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600">
              A design practice shaped by clarity, environmental sensitivity,
              and timeless architectural thinking. We create spaces that feel
              calm, meaningful, and deeply connected to people and place.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Navigation
              </p>
              <div className="mt-5 space-y-3 text-sm text-neutral-600">
                {[
                  ["/", "Home"],
                  ["/projects", "Projects"],
                  ["/about", "About"],
                  ["/contact", "Contact"],
                ].map(([path, label]) => (
                  <NavLink
                    key={path}
                    to={path}
                    className="block transition hover:text-black"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Contact
              </p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-neutral-600">
                <p>{COMPANY_LOCATION}</p>
                <a
                  href={`tel:${COMPANY_PHONE.replace(/-/g, "")}`}
                  className="block transition hover:text-black"
                >
                  {COMPANY_PHONE}
                </a>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="block transition hover:text-black"
                >
                  {COMPANY_EMAIL}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition hover:text-black"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-xs uppercase tracking-[0.22em] text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} In Nature Architects</p>
          <p>Built by Shuvrojit Roy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
