import { useEffect, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import CircularCarousel from "../CircularCarousel";
import FlipCard from "../FlipCard";
import DepthText from "../DepthText";
import { ScrollStack } from "../ScrollStack";
import { site } from "../../data/site";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const items = [
    { src: "/images/valley.jpg", alt: "Mist drifting through a valley", title: "Valley", subtitle: "Landscape" },
    { src: "/images/portrait.jpg", alt: "A studio portrait", title: "Portrait", subtitle: "Studio" },
    { src: "/images/towers.jpg", alt: "Glass towers from street level", title: "Towers", subtitle: "Architecture" }
  ];

  return (
    <section className="hero" id="top">
      <div className="hero__texture" aria-hidden="true" />

      <div className="hero__inner frame">
        <div className="hero__stage">
          <h1 className="hero__monument">
            <DepthText
              text="Nivash"
              layers={34}
              depth={2.4}
              depthColor="#7c3aed"
              gradientDepth={false}
              hoverPush={0.5}
              float={false}
              tilt={0}
              pointerTracking={false}
              smoothing={0.14}
              perspective={900}
              autoOrbit
              orbitSpeed={0.35}
              fontSize="clamp(3rem, 12cqi, 7rem)"
              fontWeight={900}
              shadow
              outline={false}
              intro
            />
            <span className="hero__frame portrait" aria-hidden="true">
              <span className={`portrait__media${ready ? " is-in" : ""}`} data-shutter>
                <img
                  src="/images/profile/nivash.png"
                  alt="Nivash M, QA engineer"
                  width="763"
                  height="961"
                  fetchpriority="high"
                />
                <span className="portrait__tint" />
                <span className="portrait__dots" />
                <span className="portrait__silhouette-outline">
                  <svg
                    viewBox="0 0 763 961"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="transparent"
                      fillOpacity="0.15"
                      d="M381.5 120c104.6 0 189.7 85.1 189.7 189.7 0 104.6-85.1 189.7-189.7 189.7S191.8 414.3 191.8 309.7 276.9 120 381.5 120zM381.5 530.3c-58.5 0-106.1 47.6-106.1 106.1s47.6 106.1 106.1 106.1 106.1-47.6 106.1-106.1S440 530.3 381.5 530.3z"
                    />
                  </svg>
                </span>
              </span>
            </span>
            <DepthText
              text="M"
              layers={34}
              depth={2.4}
              depthColor="#7c3aed"
              gradientDepth={false}
              hoverPush={0.5}
              float={false}
              tilt={0}
              pointerTracking={false}
              smoothing={0.14}
              perspective={900}
              autoOrbit
              orbitSpeed={0.35}
              fontSize="clamp(3rem, 12cqi, 7rem)"
              fontWeight={900}
              shadow
              outline={false}
              intro
            />
          </h1>
        </div>

        <div className="hero__projects">
          <ScrollStack height={560}>
            <div style={{ padding: "2rem", margin: "1rem 0", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", overflow: "hidden" }}>
              <CircularCarousel
                items={items}
                preset="cylinder"
                intro="rise"
                cardWidth={220}
                aspectRatio={1}
                speed={14}
                captions={false}
                gap={25}
                perspective={2500}
                fadeColor="#000000"
                depthFade={0.55}
                innerShade={0.6}
                cornerRadius={12}
              />
            </div>
          </ScrollStack>
        </div>

        <div className="hero__foot">
          <p className="hero__line">
            QA engineer in Coimbatore. I automate backend testing with Playwright, API suites, and MCP integrations.
          </p>
          <a className="btn hero__cta" href="#work">
            See the work
            <ArrowDownRight className="btn__arrow" aria-hidden="true" />
          </a>
        </div>

        <FlipCard
          front={
            <div
              style={{
                borderRadius: 22,
                background: "#27272a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <h3>Wooded Landscape</h3>
            </div>
          }
          back={
            <div style={{ padding: 24 }}>
              <h3>Wooded Landscape</h3>
              <p>17th century · Rijksmuseum</p>
            </div>
          }
          perspective={1100}
          stiffness={170}
          damping={20}
          width={300}
          height={400}
          radius={22}
          background="#27272a"
          color="#f5f5f5"
          shadow
          shadowColor="#000000"
          shadowOpacity={0.45}
          onFlipChange={flipped => console.log(flipped)}
        />
      </div>

      <a className="hero__mail" href={`mailto:${site.email}`}>
        {site.email}
      </a>
    </section>
  );
}