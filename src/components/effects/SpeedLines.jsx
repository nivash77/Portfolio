const CENTER = 600;
const LINE_COUNT = 72;

export default function SpeedLines({ className = "" }) {
  const lines = Array.from({ length: LINE_COUNT }, (_, index) => {
    const angle = (index / LINE_COUNT) * Math.PI * 2;
    const inner = 168 + (index % 4) * 11;
    const outer = 548 - (index % 6) * 16;
    const x1 = CENTER + Math.cos(angle) * inner;
    const y1 = CENTER + Math.sin(angle) * inner;
    const x2 = CENTER + Math.cos(angle) * outer;
    const y2 = CENTER + Math.sin(angle) * outer;
    const heavy = index % 9 === 0;

    return (
      <line
        key={index}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth={heavy ? 3.2 : 1.3}
        opacity={heavy ? 0.85 : 0.42}
        strokeLinecap="round"
      />
    );
  });

  return (
    <svg
      className={className}
      viewBox="0 0 1200 1200"
      aria-hidden="true"
      focusable="false"
    >
      {lines}
    </svg>
  );
}
