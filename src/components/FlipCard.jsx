import React, { useState } from "react";

const FlipCard = ({
  front,
  back,
  axis,
  flipOnClick,
  draggable,
  dragDistance,
  tilt,
  tiltMax,
  glare,
  glareOpacity,
  hoverScale,
  perspective,
  stiffness,
  damping,
  width,
  height,
  radius,
  background,
  color,
  shadow,
  shadowColor,
  shadowOpacity,
  onFlipChange,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
    onFlipChange?.(flipped);
  };

  return (
    <div
      style={{
        width,
        height,
        background,
        borderRadius: radius,
        boxShadow: shadow
          ? `${shadowColor || "#000"} ${shadowOpacity || 0.5}px ${shadowOpacity || 0.5}px 0 ${shadowColor || "#000"}`
          : "none",
        perspective: perspective,
        style: {
          transformStyle: "preserve-3d",
          transition: `transform ${0.3}s cubic-bezier(0.4, 0, 0.2, 1)`,
        },
        cursor: "grab",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          transform: flipped ? `rotateY(${axis === "y" ? 180 : 0}deg)` : "rotateY(0deg)",
        }}
      >
        {front}
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          transform: flipped ? `rotateY(${axis === "y" ? 0 : -180}deg)` : "rotateY(180deg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {back}
      </div>
    </div>
  );
};

export default FlipCard;