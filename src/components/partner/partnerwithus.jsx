import React, { useState } from "react";

const features = [
  {
    title: "Established Infrastructure",
    text: "Full-scale logistics and years of operational excellence make scaling seamless.",
  },
  {
    title: "Multi-Brand Synergy",
    text: "We manage brands like Nexso, Store 1920, and Armed — driven by market insight.",
  },
  {
    title: "Proven Growth Engine",
    text: "We accelerate expansion through data-driven strategies and multichannel marketing.",
  },
];

const WhyPartnerSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      style={{
        width: "100%",
        background: "#f5f5f5",
        padding: "0px 16px 0",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 600,
            textAlign: "center",
            color: "#222",
            marginBottom: "2.5rem",
            padding: "0 1rem",
          }}
        >
          Why Partner With Al Thakeel?
        </h2>

        <div
          style={{
            borderTop: "1px solid #ccc",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          {features.map((item, idx) => {
            const isOpen = idx === activeIndex;
            return (
              <div
                key={idx}
                style={{
                  borderBottom: "1px solid #ccc",
                  backgroundColor: isOpen ? "#fff" : "#f9f9f9",
                  transition: "background 0.3s ease",
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    padding: "16px",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    fontWeight: 500,
                    color: "#111",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {item.title}
                  <span style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginLeft: 10 }}>
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 16px 16px",
                      fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                      color: "#555",
                      lineHeight: 1.6,
                      backgroundColor: "#fff",
                    }}
                  >
                    {item.text}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
