import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import { site } from "../../data/site";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/mnivash",
    href: site.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "nivash77",
    href: site.github,
    external: true,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: site.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="frame contact__inner">
        <Reveal className="contact__head">
          <div className="contact__intro">
            <p className="contact__eyebrow">Contact</p>
            <h2 className="contact__title" id="contact-title">
              Let&apos;s make it
              <span className="contact__title-accent">reliable.</span>
            </h2>
          </div>

          <div className="contact__side">
            <p className="contact__note">
              Currently a QA Engineer at AboveCloud9.Ai, focused on backend
              automation testing with Playwright, API suites, and MCP
              integrations. Based in Coimbatore, India. Email is fastest — I
              usually reply within a day.
            </p>
            <div className="contact__actions">
              <a
                className="btn contact__cta"
                href={`mailto:${site.email}?subject=Hello%20from%20your%20portfolio`}
              >
                Email me
                <ArrowUpRight className="btn__arrow" aria-hidden="true" />
              </a>
              <a className="btn contact__btn--ghost" href={site.resume} download>
                Download résumé
                <Download className="btn__arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        <ul className="contact__cards">
          {cards.map((card, index) => {
            const Tag = card.href ? "a" : "div";

            return (
              <Reveal
                as="li"
                key={card.label}
                delay={index * 60}
                className={`contact__card-wrap${index === 0 ? " contact__card-wrap--wide" : ""}`}
              >
                <Tag
                  className="contact__card"
                  href={card.href || undefined}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noreferrer" : undefined}
                >
                  <span className="contact__card-icon" aria-hidden="true">
                    <card.icon size={20} strokeWidth={2} />
                  </span>
                  <span className="contact__card-body">
                    <span className="contact__card-label">{card.label}</span>
                    <span className="contact__card-value">{card.value}</span>
                  </span>
                  {card.href && (
                    <span className="contact__card-arrow" aria-hidden="true">
                      <ArrowUpRight size={18} />
                    </span>
                  )}
                </Tag>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="contact__foot" delay={120}>
          <p>{site.location} · IST (UTC+5:30)</p>
          <p className="contact__foot-note">
            Open to QA and backend test-automation roles.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
