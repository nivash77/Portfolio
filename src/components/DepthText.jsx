import React from "react";

const DEFAULT_PROPS = {
  layers: 34,
  depth: 2.4,
  depthColor: "#7c3aed",
  gradientDepth: false,
  hoverPush: 0.5,
  float: false,
  tilt: 7.5,
  pointerTracking: false,
  smoothing: 0.14,
  perspective: 900,
  autoOrbit: false,
  orbitSpeed: 0.35,
  fontSize: "clamp(3rem, 12cqi, 7rem)",
  fontWeight: 900,
  shadow: true,
  outline: false,
  intro: false,
};

const getDepth = (index, layers, depth, gradientDepth) => {
  const layerDepth = (index / layers) * depth;
  return gradientDepth ? `${layerDepth * 0.5}rem` : `${layerDepth}rem`;
};

const getColor = (index, layers, depthColor) => {
  // Simple color interpolation based on layer
  const ratio = index / layers;
  return depthColor;
};

const DepthText = ({
  text,
  layers = DEFAULT_PROPS.layers,
  depth = DEFAULT_PROPS.depth,
  depthColor = DEFAULT_PROPS.depthColor,
  gradientDepth = DEFAULT_PROPS.gradientDepth,
  hoverPush = DEFAULT_PROPS.hoverPush,
  float = DEFAULT_PROPS.float,
  tilt = 0,  // Removed motion: was DEFAULT_PROPS.tilt
  pointerTracking = false,  // Removed motion
  smoothing = DEFAULT_PROPS.smoothing,
  perspective = DEFAULT_PROPS.perspective,
  autoOrbit = DEFAULT_PROPS.autoOrbit,
  orbitSpeed = DEFAULT_PROPS.orbitSpeed,
  fontSize = DEFAULT_PROPS.fontSize,
  fontWeight = DEFAULT_PROPS.fontWeight,
  shadow = DEFAULT_PROPS.shadow,
  outline = DEFAULT_PROPS.outline,
  intro = DEFAULT_PROPS.intro,
}) => {
  const chars = text.split("");
  
  const style = {
    fontSize,
    fontWeight,
    textAlign: "center",
    perspective: perspective > 0 ? `perspective(${perspective}px)` : "none",
    whiteSpace: "nowrap",
    transition: "transform 0.2s ease",  // Added subtle transition
  };

  return (
    <div style={style}>
      {chars.map((char, charIndex) => {
        if (char === " ") return null;
        
        const layerDepth = getDepth(charIndex % layers, layers, depth, gradientDepth);
        const color = getColor(charIndex % layers, layers, depthColor);
        
        return (
          <span
            key={char}
            style={{
              display: "inline-block",
              margin: `0 0.1rem`,
              transform: `rotateX(${
                tilt * (1 - charIndex / chars.length)
              }deg) rotateY(${pointerTracking ? charIndex * 0.1 : 0}deg)`,
              color: color,
              textShadow: shadow
                ? `0 0 20px ${color}, 0 0 40px ${color}`
                : "none",
              ...(outline && {
                WebkitTextStroke: `1px ${color}`,
                color: "transparent",
              }),
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default DepthText;