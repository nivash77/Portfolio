import { useEffect, useState } from "react";
import Reveal from "../ui/Reveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const moments = [
  "GUVI's AI app workshop",
  "CDW's QA360 day",
  "Rampex's fifteen-day MERN training",
  "the Kalam'24 CTF I volunteered at",
];

export default function Activity() {
  const [lit, setLit] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;

    const timer = window.setInterval(() => {
      setLit((current) => (current + 1) % moments.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [reduced]);

  return (
    <section className="section section--ink activity" id="activity">
      <div className="frame">
        <Reveal>
          <h2 className="h2">Workshops, training, one CTF.</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="activity__run">
            {moments.map((moment, index) => (
              <span key={moment}>
                <span className={`activity__name${index === lit ? " is-lit" : ""}`}>{moment}</span>
                {index < moments.length - 2 ? ", " : index === moments.length - 2 ? ", and " : "."}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={160} className="activity__note">
          <p>2024. Coimbatore. Each one came with a certificate or a day of work.</p>
        </Reveal>
      </div>
    </section>
  );
}
