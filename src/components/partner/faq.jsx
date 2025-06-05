import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const faqsContent = {
  en: [
    {
      question: "What infrastructure does Al Thakeel offer to partners?",
      answer:
        "Al Thakeel provides a full-scale logistics network and years of operational excellence, ensuring seamless scaling for our partners.",
    },
    {
      question: "Which brands are managed by Al Thakeel?",
      answer:
        "We manage a diverse portfolio of brands, including Nexso, Store 1920, and Armed, all driven by deep market insights.",
    },
    {
      question: "How does Al Thakeel drive growth for its partners?",
      answer:
        "Our proven growth engine accelerates expansion through data-driven strategies and multichannel marketing approaches.",
    },
  ],
  ar: [
    {
      question: "ما هي البنية التحتية التي تقدمها الثقيل لشركائها؟",
      answer:
        "توفر الثقيل شبكة لوجستية متكاملة وسنوات من التميز التشغيلي، مما يضمن التوسع السلس لشركائنا.",
    },
    {
      question: "ما هي العلامات التجارية التي تديرها الثقيل؟",
      answer:
        "ندير مجموعة متنوعة من العلامات التجارية، بما في ذلك Nexso وStore 1920 وArmed، مدفوعة بفهم عميق للسوق.",
    },
    {
      question: "كيف تسهم الثقيل في نمو شركائها؟",
      answer:
        "يعزز محرك النمو الخاص بنا التوسع من خلال استراتيجيات قائمة على البيانات وتسويق متعدد القنوات.",
    },
  ],
};

const FAQSection = () => {
  const { language } = useLanguage(); // 'en' or 'ar'
  const isArabic = language === "ar";
  const faqs = faqsContent[language];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      style={{
        width: "100%",
        background: "#f5f5f5",
        padding: "0px 16px 60px",
        boxSizing: "border-box",
        direction: isArabic ? "rtl" : "ltr",
        fontFamily: isArabic ? "'Tajawal', sans-serif" : '"Montserrat", sans-serif',
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
          {isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        </h2>

        <div
          style={{
            borderTop: "1px solid #ccc",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          {faqs.map((item, idx) => {
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
                    direction: "inherit",
                  }}
                >
                  <span>{item.question}</span>
                  <span style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginInlineStart: 10 }}>
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
                    {item.answer}
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

export default FAQSection;
