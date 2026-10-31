import React from "react";

const Stack = ({ children, height }) => {
  const divStyle = {
    height: height ? height : "100%",
    overflowY: "auto",
    "-webkit-overflow-scrolling": "touch",
  };

  return <div style={divStyle}>{children}</div>;
};

Stack.Item = function Item({ children, index }) {
  // Removed staggered entrance animation for professional design
  // const [moved, setMoved] = React.useState(false);
  // React.useEffect(() => {
  //   if (index === 0) {
  //     setMoved(true);
  //   }
  // }, [index]);

  const itemStyle = {
    padding: "2rem",
    margin: "1rem 0",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    // Removed transition and transform for static items
    // transition: "transform 0.2s ease",
    // transform: moved ? "translateY(0)" : "translateY(20px)",
  };

  return <div style={itemStyle}>{children}</div>;
};

Stack.Item.defaultProps = {
  index: 0,
};

export { Stack as ScrollStack };