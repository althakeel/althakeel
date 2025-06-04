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
        padding: "20px 20px 0 ",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: 36,
            fontWeight: "600",
            textAlign: "center",
            color: "#222",
            marginBottom: 50,
          }}
        >
          Why Partner With Al Thakeel?
        </h2>

        <div style={{ borderTop: "1px solid #ccc" }}>
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
                    padding: "20px 30px",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 20,
                    fontWeight: "500",
                    color: "#111",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "color 0.3s",
                  }}
                >
                  {item.title}
                  <span style={{ fontSize: 24, marginLeft: 10 }}>
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 30px 25px",
                      fontSize: 16,
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
