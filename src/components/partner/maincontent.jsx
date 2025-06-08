import React from "react";
import WhyPartnerSection from "./partnerwithus";
import BenefitsSection from "./gain";
import { useLanguage } from "../../context/LanguageContext";

const PartnerWithUs = () => {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const content = {
    en: {
      intro: `Join Al Thakeel, a multi-brand powerhouse behind Nexso, Store 1920, Armed, Vellore Paris, and Grahaam. We specialize in online sales, digital marketing, logistics, and brand growth across the Middle East and beyond. Let’s collaborate to expand your reach, drive sales, and unlock new market opportunities together.`,
    },
    ar: {
      intro: `انضم إلى الثقيل، القوة متعددة العلامات التجارية وراء نكسو، ستور 1920، آرمِد، فيلور باريس، وغراهام. نحن متخصصون في المبيعات الإلكترونية، التسويق الرقمي، الخدمات اللوجستية، ونمو العلامات التجارية في الشرق الأوسط وخارجه. دعونا نتعاون لتوسيع نطاقك، وزيادة مبيعاتك، وفتح فرص سوقية جديدة معًا.`,
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        color: "#333",
        fontFamily: "'Montserrat', sans-serif",
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "40px 20px 10px",
          textAlign: isArabic ? "right" : "center",
        }}
      >
        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.6 }}>
          {content[language].intro}
        </p>
      </section>

      <BenefitsSection />
      {/* Uncomment the line below if you want to show the WhyPartnerSection */}
      {/* <WhyPartnerSection /> */}
    </div>
  );
};

export default PartnerWithUs;
