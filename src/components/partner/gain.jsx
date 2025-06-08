import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const benefitsData = {
  en: {
    heading: "What You Gain From the Partnership",
    items: [
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
    ],
  },
  ar: {
    heading: "ماذا ستجني من هذه الشراكة",
    items: [
      {
        image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749131029/1_cpccbe.webp",
        title: "الوصول العالمي",
        text: "استفد من وصولنا إلى أسواق الخليج والعالم من خلال علاقاتنا الدولية الراسخة.",
      },
      {
        image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749131030/2_u1dwp2.webp",
        title: "تنفيذ أسرع",
        text: "أطلق حملاتك التسويقية ومنتجاتك ووسع نشاطك في مناطق جديدة بسرعة فائقة.",
      },
      {
        image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749131031/3_1_ua0om9.webp",
        title: "شراكة طويلة الأمد",
        text: "نستثمر في علاقات شراكة طويلة الأمد ونساعد في بناء علامات تجارية مستدامة.",
      },
    ],
  },
};

const BenefitsSection = () => {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const content = benefitsData[language];

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0px 20px",
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
      <h2
        style={{
          fontSize: 30,
          fontWeight: "500",
          textAlign: "center",
          color: "#000",
          marginBottom: 40,
        }}
      >
        {content.heading}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {content.items.map((item, idx) => (
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
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  marginBottom: 10,
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "#555",
                  lineHeight: 1.6,
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
