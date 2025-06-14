import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language, toggleLanguage } = useLanguage();
  const isArabic = language === 'ar';

  const menuItems = isArabic
    ? [
        { label: "معلومات عنا", link: "/about" },
        { label: "الوظائف", link: "/careers" },
        { label: "علاماتنا التجارية", link: "/brands" },
        { label: "شراكة", link: "/partner" },
        { label: "المدونات", link: "/blogs" },
        { label: "اتصل بنا", link: "/contact" },
      ]
    : [
        { label: "About Us", link: "/about" },
        { label: "Careers", link: "/careers" },
        { label: "Our Brands", link: "/brands" },
        { label: "Partner", link: "/partner" },
        { label: "Blogs", link: "/blogs" },
        { label: "Contact", link: "/contact" },
      ];

  const policyItems = isArabic
    ? [
        { label: "سياسة الخصوصية", link: "/privacy" },
        { label: "الشروط والأحكام", link: "/terms&condition" },
        // { label: "الأسئلة الشائعة", link: "/faq" },
        // { label: "خريطة الموقع", link: "/sitemap" },
      ]
    : [
        { label: "Privacy Policy", link: "/privacy" },
        { label: "Terms & Conditions", link: "/terms&condition" },
        // { label: "FAQ", link: "/faq" },
        // { label: "Sitemap", link: "/sitemap" },
      ];

  const combinedLinks = [...menuItems, ...policyItems];
  const half = Math.ceil(combinedLinks.length / 2);
  const firstColumnLinks = combinedLinks.slice(0, half);
  const secondColumnLinks = combinedLinks.slice(half);

  const sectionTitles = {
    tagline: isArabic
      ? "قوة تعاونية للعلامات التجارية والابتكار."
      : "A cooperative powerhouse of brands & innovation.",
    copyright: isArabic
      ? "© 2025 الثكيل. جميع الحقوق محفوظة."
      : "© 2025 Al Thakeel. All rights reserved.",
    languageToggle: isArabic ? "English" : "العربية",
  };

  return (
    <footer
      style={{
        background: "#111",
        color: "#eee",
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        direction: isArabic ? "rtl" : "ltr",
        padding: "40px 20px 20px",
      }}
    >
      <div
        className="footer-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* Logo + Tagline */}
        <div
  style={{
    flex: "1 1 260px",
    textAlign: isArabic ? "right" : "left",
  }}
>
  <img
          src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748871708/Logo_1080_x_1080_White_en7zpv.png"
          alt="Al Thakeel Logo"
    style={{
      maxWidth: "160px",
      marginBottom: "3px",
    }}
  />
  <p style={{ color: "#aaa", fontSize: "13px", lineHeight: 1.6 }}>
    {sectionTitles.tagline}
  </p>
</div>

        {/* Desktop Columns */}
        <div className="desktop-columns" style={{ display: "flex", flex: "2 1 500px", gap: "40px" }}>
          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "10px" }}>
              {isArabic ? "القائمة" : "Menu"}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    style={{
                      display: "block",
                      color: "#ccc",
                      textDecoration: "none",
                      marginBottom: "6px",
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "10px" }}>
              {isArabic ? "سياسات" : "Legal"}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {policyItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    style={{
                      display: "block",
                      color: "#ccc",
                      textDecoration: "none",
                      marginBottom: "6px",
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile - 2 Column Mixed Menu */}
        <div className="mobile-columns" style={{ display: "none", flex: "1 1 100%", gap: "20px" }}>
          <div style={{ flex: "1 1 50%" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {firstColumnLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    style={{
                      display: "block",
                      color: "#ccc",
                      textDecoration: "none",
                      marginBottom: "6px",
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {secondColumnLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    style={{
                      display: "block",
                      color: "#ccc",
                      textDecoration: "none",
                      marginBottom: "6px",
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid #333",
          marginTop: "30px",
          paddingTop: "15px",
          textAlign: "center",
          fontSize: "12px",
          color: "#777",
          position: "relative",
        }}
      >
        {sectionTitles.copyright}
        <button
          onClick={toggleLanguage}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: isArabic ? "auto" : "20px",
            right: isArabic ? "20px" : "auto",
            background: "transparent",
            border: "1px solid #777",
            color: "#777",
            padding: "4px 10px",
            margin:"10px -20px ",
            fontSize: "12px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          {sectionTitles.languageToggle}
        </button>
      </div>

      {/* Responsive Style */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-columns {
            display: none !important;
          }
          .mobile-columns {
            display: flex !important;
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
