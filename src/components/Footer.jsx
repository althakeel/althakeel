import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language, toggleLanguage } = useLanguage();
  const isArabic = language === 'ar';

  const menuItems = isArabic
    ? ["معلومات عنا", "الوظائف", "علاماتنا التجارية", "التجارة الإلكترونية", "شراكة", "المدونات", "اتصل بنا"]
    : ["About Us", "Careers", "Our Brands", "Ecommerce", "Partner", "Blogs", "Contact"];

  const policyItems = isArabic
    ? ["سياسة الخصوصية", "إخلاء المسؤولية عن الاحتيال", "سياسة الإفصاح", "الشروط والأحكام", "الأسئلة الشائعة", "خريطة الموقع"]
    : ["Privacy Policy", "Disclosure", "Terms & Conditions", "FAQ"];

  const sectionTitles = {
    menu: isArabic ? "القائمة" : "Menu",
    legal: isArabic ? "سياسات" : "Legal",
    tagline: isArabic
      ? "قوة تعاونية للعلامات التجارية والابتكار."
      : "A cooperative powerhouse of brands & innovation.",
    copyright: isArabic
      ? "© 2025 الثكيل. جميع الحقوق محفوظة."
      : "© 2025 Al Thakeel. All rights reserved.",
    languageToggle: isArabic ? "English" : "العربية",
  };

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  return (
    <footer
      style={{
        background: "#111",
        color: "#eee",
        fontFamily: "Inter, sans-serif",
        padding: "30px 20px 15px",
        fontSize: "14px",
        direction: isArabic ? "rtl" : "ltr",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "40px",
        }}
      >
        {/* Column 1 - Logo & Tagline */}
        <div style={{ flex: "1 1 260px" }}>
          <div style={{ marginBottom: "14px" }}>
            <img
              src="https://res.cloudinary.com/dnpwsutir/image/upload/v1748353387/Logo_V2_1_dvu1bp.png"
              alt="Althakeel Logo"
              style={{
                maxWidth: "160px",
                height: "auto",
                display: "block",
                margin: isArabic ? "0 0 0 auto" : "0 auto 0 0",
              }}
            />
          </div>
          <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.6 }}>
            {sectionTitles.tagline}
          </p>
        </div>

        {/* Column 2 - Menu */}
        <div style={{ flex: "1 1 160px" }}>
          <h4 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "12px", color: "#fff" }}>
            {sectionTitles.menu}
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "6px",
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Policies */}
        <div style={{ flex: "1 1 160px" }}>
          <h4 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "12px", color: "#fff" }}>
            {sectionTitles.legal}
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {policyItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "6px",
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          marginTop: "30px",
          borderTop: "1px solid #333",
          fontSize: "12px",
          color: "#777",
          position: "relative",
        }}
      >
        {sectionTitles.copyright}

        {/* Language toggle button at bottom left */}
        <button
          onClick={handleLanguageToggle}
          style={{
            position: "absolute",
            left: isArabic ? "auto" : "20px",
            right: isArabic ? "20px" : "auto",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "1px solid #777",
            color: "#777",
            padding: "4px 10px",
            cursor: "pointer",
            fontSize: "12px",
            borderRadius: "3px",
            userSelect: "none",
          }}
          aria-label="Toggle language"
          title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
        >
          {sectionTitles.languageToggle}
        </button>
      </div>

      {/* Mobile Responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer div[style*='display: flex'] {
            flex-direction: column !important;
            align-items: ${isArabic ? "flex-end" : "flex-start"} !important;
          }
          footer img {
            margin: ${isArabic ? "0 0 12px auto" : "0 auto 12px 0"} !important;
          }
          button {
            position: static !important;
            transform: none !important;
            margin-top: 15px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
