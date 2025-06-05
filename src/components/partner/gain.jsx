import React from "react";

const benefits = [
  {
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749131029/1_cpccbe.webp",
    title: "Global Reach",
    text: "Access GCC and global markets with our established international connections.",
  },
  {
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749131030/2_u1dwp2.webp",
    title: "Faster Execution",
    text: "Deploy marketing, launch products, and activate regions faster than ever.",
  },
  {
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749131031/3_1_ua0om9.webp",
    title: "Enduring Partnership",
    text: "We invest in long-term collaborations and help co-build sustainable brands.",
  },
];

const BenefitsSection = () => (
  <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0px 20px" }}>
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

export default BenefitsSection;
