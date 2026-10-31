import Reveal from "../ui/Reveal";
import { aboutFacts, aboutParagraphs } from "../../data/about";

export default function About() {
  return (
    <section className="section section--paper about" id="about">
      <div className="frame about__grid">
        <div className="about__text">
          <Reveal>
            <h2 className="h2">Nivash M</h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="about__media">
              <img
                src="/images/profile/nivash.png"
                alt="Nivash M"
                width="763"
                height="961"
                loading="lazy"
                style={{ width: "100%", maxWidth: "200px", height: "auto" }}
              />
            </div>
          </Reveal>

          <Reveal delay={140} className="about__copy">
            {aboutParagraphs.map((paragraph) => (
              <p className="body" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={200}>
            <dl className="about__facts">
              {aboutFacts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}