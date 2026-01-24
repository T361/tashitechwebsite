import React from "react";
import WorkflowPattern from "./WorkflowPattern";
import RippleBackground from "./RippleBackground";

// Kore.ai-style split layout: left text, right SVG, strict enterprise grid
const HeroView: React.FC = () => {
  return (
    <section
      style={{
        width: "100%",
  background: "#fff",
        padding: "120px 0 120px 0",
        minHeight: 480,
        boxSizing: "border-box",
      }}
    >
      <RippleBackground />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: Text */}
        <div style={{ textAlign: "left" }}>
          <h1
            style={{
              fontFamily: 'Inter Tight, Inter, Arial, sans-serif',
              fontWeight: 700,
              fontSize: 48,
              color: "#0a0a0a",
              lineHeight: 1.1,
              marginBottom: 32,
              letterSpacing: -1.5,
            }}
          >
            The Agentic Workforce<br />for Enterprise.
          </h1>
          <p
            style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: 20,
              color: "#444",
              maxWidth: 520,
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Tashi provides the platform to build, deploy, and manage autonomous agents that execute complex, mission-critical workflows with verifiable trust and safety.
          </p>
          {/* No buttons remain in Hero section */}
        </div>
        {/* Right: SVG Visual (empty or as needed) */}
        <div />
      </div>
    </section>
  );
};

export default HeroView;