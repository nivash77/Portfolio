import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../../data/nav";
import { site } from "../../data/site";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const sectionIds = ["about", "skills", "work", "credentials", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef(null);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const active = useScrollSpy(sectionIds);

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${value})`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const timer = window.setTimeout(() => firstLinkRef.current?.focus(), 40);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a className="nav__mark" href="#top" aria-label="Nivash M, back to top">
            Nivash M
          </a>

          <nav className="nav__links" aria-label="Sections">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  className={`nav__link${isActive ? " is-active" : ""}`}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <button
            ref={menuButtonRef}
            className="nav__menu"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={18} aria-hidden="true" />
            Menu
          </button>
        </div>

        <span className="nav__progress" ref={progressRef} aria-hidden="true" />
      </header>

      {menuOpen && (
        <div className="drawer" id="site-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="drawer__top">
            <span className="nav__mark">Nivash M</span>
            <button className="drawer__close" type="button" onClick={closeMenu}>
              <X size={20} aria-hidden="true" />
              Close
            </button>
          </div>

          <nav className="drawer__links" aria-label="Sections">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                className="drawer__link"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="drawer__foot">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
