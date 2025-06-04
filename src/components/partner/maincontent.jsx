import React, { useState } from "react";
import WhyPartnerSection from "./partnerwithus";
import BenefitsSection from "./gain";

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

      {/* <WhyPartnerSection /> */}
      <BenefitsSection />
    </div>
  );
};

export default PartnerWithUs;