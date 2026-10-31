import Reveal from "../ui/Reveal";
import { skills } from "../../data/skills";
import CircularCarousel from "../CircularCarousel";

export default function Skills() {
  const items = skills.map((skill, index) => ({
    alt: skill.tool,
    title: skill.tool,
    subtitle: skill.area,
  }));

  return (
    <section className="section section--deep skills" id="skills">
      <div className="frame skills__grid">
        <div className="skills__intro">
          <Reveal>
            <h2 className="h2">What I reach for.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lede">Grouped by where it sits in the stack.</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="skills__note">
              The list is the work, not a badge wall. Every tool here appears in a project below or
              in the credentials ledger.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="skills__carousel-wrap">
          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 1",
              position: "relative",
            }}
          >
            <CircularCarousel
              items={items}
              preset="orbit"
              intro="rise"
              cardWidth={320}
              aspectRatio={0.8}
              speed={10}
              captions={false}
              gap={30}
              spread={0.85}
              tilt={0}
              perspective={2000}
              autoplay="off"
              pauseOnHover
              focusOnClick
              draggable
              fadeColor="#000000"
              depthFade={0.35}
              innerShade={0.5}
              cornerRadius={18}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}