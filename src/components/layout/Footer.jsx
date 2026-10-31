import { navLinks } from "../../data/nav";
import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cols">
        <div className="footer__col">
          <span>Elsewhere</span>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="footer__col">
          <span>Contact</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
        </div>

        <div className="footer__col">
          <span>Index</span>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__col">
          <span>Colophon</span>
          <span>React, Vite, Tailwind</span>
          <span>Anton and Manrope</span>
          <span>Coimbatore, India</span>
        </div>
      </div>

      <div className="footer__close">
        <div className="footer__legal">
          <span>© 2026 Nivash M</span>
          <span>Built from schema to screen.</span>
        </div>
      </div>
    </footer>
  );
}
