import React, { useState } from "react";

// --- Data
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

const benefits = [
  {
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748775686/Blog_Cover_yzuexj.webp",
    title: "Global Reach",
    text: "Access GCC and global markets with our established international connections.",
  },
  {
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748775686/Blog_Cover_yzuexj.webp",
    title: "Faster Execution",
    text: "Deploy marketing, launch products, and activate regions faster than ever.",
  },
  {
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748775686/Blog_Cover_yzuexj.webp",
    title: "Enduring Partnership",
    text: "We invest in long-term collaborations and help co-build sustainable brands.",
  },
];

// --- Features Section (FAQ style)
const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "20px 20px 0 20px" }}>
      <h2
        style={{
          fontSize: 32,
          fontWeight: "500",
          textAlign: "center",
          color: "#000",
          marginBottom: 40,
        }}
      >
        Why Partner With Al Thakeel?
      </h2>

      <div style={{ borderTop: "1px solid #ddd" }}>
        {features.map((item, idx) => {
          const isOpen = idx === activeIndex;
          return (
            <div
              key={idx}
              style={{
                borderBottom: "1px solid #ddd",
                backgroundColor: isOpen ? "#fafafa" : "#fff",
                transition: "background 0.3s ease",
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: "100%",
                  padding: "18px 20px",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#333",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {item.title}
                <span style={{ fontSize: 24, lineHeight: "1" }}>
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen && (
                <div
                  style={{
                    padding: "0 20px 20px",
                    fontSize: 15,
                    color: "#555",
                    lineHeight: 1.6,
                  }}
                >
                  {item.text}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

// --- Benefits Section
const BenefitsSection = () => (
  <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px" }}>
    <h2
      style={{
        fontSize: 30,
        fontWeight: "500",
        textAlign: "center",
        color: "#000",
        marginBottom: 40,
      }}
    >
      What You Gain From the Partnership
    </h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 24,
      }}
    >
      {benefits.map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            transition: "transform 0.2s ease",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
            }}
          />
          <div style={{ padding: 20 }}>
            <h4
              style={{ fontSize: 18, fontWeight: "600", marginBottom: 10 }}
            >
              {item.title}
            </h4>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6 }}>
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- Main Component
const PartnerWithUs = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        color: "#333",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "40px 20px 10px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.6 }}>
          Join Al Thakeel, a multi-brand powerhouse behind Nexso, Store 1920,
          Armed, Vellore Paris, and Grahaam. We specialize in online sales,
          digital marketing, logistics, and brand growth across the Middle East
          and beyond. Let’s collaborate to expand your reach, drive sales, and
          unlock new market opportunities together.
        </p>
      </section>

      <FeaturesSection />
      <BenefitsSection />
    </div>
  );
};

export default PartnerWithUs;
