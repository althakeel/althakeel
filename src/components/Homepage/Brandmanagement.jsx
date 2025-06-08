import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    en: {
      title: "Brands Management",
      desc: "We develop private-label brands from idea to market, ensuring product–market fit and scalable growth in the UAE.",
      points: [
        { bold: "Market Validation: ", text: "Analyze local demand and benchmark competitors to confirm niche potential." },
        { bold: "Brand Identity & Launch: ", text: "Create cohesive branding and SEO-optimized websites tailored for the UAE market." },
        { bold: "Marketplace Onboarding: ", text: "List products on Amazon.ae, Noon, and other major platforms for visibility and sales." },
        { bold: "Marketing & Growth: ", text: "Run localized campaigns using social, email, and influencers aligned with UAE audiences." },
      ],
    },
    ar: {
      title: "إدارة العلامات التجارية",
      desc: "نطوّر علامات تجارية خاصة من الفكرة حتى السوق، مع ضمان توافق المنتج مع احتياجات السوق المحلي في الإمارات.",
      points: [
        { bold: "تحقق من السوق: ", text: "تحليل الطلب المحلي ومقارنة المنافسين لتحديد مدى جدوى الفكرة." },
        { bold: "هوية العلامة والإطلاق: ", text: "تصميم علامة متكاملة وموقع إلكتروني مهيأ لمحركات البحث ومناسب للجمهور الإماراتي." },
        { bold: "إدراج في المتاجر: ", text: "إدراج المنتجات على Amazon.ae وNoon ومنصات أخرى لزيادة الظهور والمبيعات." },
        { bold: "التسويق والنمو: ", text: "تنفيذ حملات تسويقية مخصصة للسوق الإماراتي باستخدام السوشيال ميديا والبريد والمؤثرين." },
      ],
    },
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749066176/4_1_vykdyn.webp",
  },
  {
    en: {
      title: "Brand Acquisition",
      desc: "We acquire underutilized brands with growth potential in the UAE through rigorous evaluation.",
      points: [
        { bold: "Target Sourcing: ", text: "Identify brands with strong assets but low market penetration." },
        { bold: "Due Diligence: ", text: "Evaluate financials, legal aspects, and market fit for fair acquisition terms." },
        { bold: "Deal Structuring: ", text: "Structure full or partial equity deals, with possible performance-based components." },
        { bold: "Integration: ", text: "Streamline logistics and operations under our framework to maximize value." },
      ],
    },
    ar: {
      title: "الاستحواذ على العلامات التجارية",
      desc: "نستحوذ على علامات تجارية ذات إمكانيات نمو غير مستغلة من خلال تحليل شامل للسوق والبيانات.",
      points: [
        { bold: "البحث عن العلامات: ", text: "تحديد علامات تجارية قوية لم تحقق انتشاراً واسعاً في الإمارات." },
        { bold: "تحقيق العناية الواجبة: ", text: "تحليل البيانات المالية والقانونية ومدى ملاءمة السوق." },
        { bold: "هيكلة الصفقة: ", text: "تقديم عروض استحواذ جزئي أو كلي تتضمن محفزات مرتبطة بالأداء." },
        { bold: "الدمج بعد الاستحواذ: ", text: "توحيد العمليات والخدمات اللوجستية لتحقيق الكفاءة القصوى." },
      ],
    },
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749130433/3_z5lhq0.webp",
  },
  {
    en: {
      title: "Brand Partnerships",
      desc: "We bring international brands into the UAE by localizing their presence and distribution strategy.",
      points: [
        { bold: "Global Scouting: ", text: "Source international brands that align with UAE consumer trends." },
        { bold: "Risk Evaluation: ", text: "Assess legal and logistical readiness for market entry." },
        { bold: "Market Entry: ", text: "Localize messaging and product mix for UAE audiences." },
        { bold: "Ongoing Support: ", text: "Collaborate on co-marketing and performance tracking." },
      ],
    },
    ar: {
      title: "شراكات العلامات التجارية",
      desc: "نساعد العلامات العالمية على دخول السوق الإماراتي من خلال توزيع وخطط محلية مدروسة.",
      points: [
        { bold: "استكشاف عالمي: ", text: "البحث عن علامات تجارية دولية تناسب توجهات المستهلك الإماراتي." },
        { bold: "تقييم المخاطر: ", text: "تحليل التحديات القانونية واللوجستية قبل دخول السوق." },
        { bold: "دخول السوق: ", text: "توطين المحتوى والعروض لتناسب الجمهور المحلي." },
        { bold: "دعم مستمر: ", text: "تعاون تسويقي ومراقبة الأداء للنمو المستدام." },
      ],
    },
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749066175/1_2_fqcipr.webp",
  },
  {
    en: {
      title: "Niched Marketplaces",
      desc: "We develop vertical e-commerce platforms that serve specific UAE market segments with tailored experiences.",
      points: [
        { bold: "Niche Selection: ", text: "Target promising verticals like sustainable home goods or luxury grooming." },
        { bold: "Platform Design: ", text: "Build user-centric experiences with smart filtering and education." },
        { bold: "Premium Services: ", text: "Offer white-glove fulfillment, expert guides, and content-rich value." },
        { bold: "Data Optimization: ", text: "Use analytics to refine offerings and improve retention." },
      ],
    },
    ar: {
      title: "الأسواق المتخصصة",
      desc: "نصمم منصات تجارة إلكترونية عمودية تخدم شرائح معينة في السوق الإماراتي بأسلوب مخصص.",
      points: [
        { bold: "اختيار التخصص: ", text: "التركيز على فئات مميزة مثل الأدوات المستدامة أو العناية الرجالية الفاخرة." },
        { bold: "تصميم المنصة: ", text: "توفير تجربة سهلة مع فلاتر ذكية ومحتوى تعليمي مفيد." },
        { bold: "الخدمات المميزة: ", text: "تقديم توصيل مميز ودلائل خبراء لرفع القيمة." },
        { bold: "تحسين بالبيانات: ", text: "استخدام تحليلات مستمرة لتطوير تجربة العميل وزيادة الولاء." },
      ],
    },
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749033450/2_ro2lla.webp",
  },
];

const FullWidthCarousel = ({ lang = "en", dir = "ltr" }) => {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const slideContainerRef = useRef(null);
  const timeoutRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const scrollToCurrent = () => {
      if (slideContainerRef.current) {
        const container = slideContainerRef.current;
        const slide = container.children[current];
        if (slide) {
          const slideLeft = slide.offsetLeft - (container.offsetWidth / 2 - slide.offsetWidth / 2);
          container.scrollTo({ left: slideLeft, behavior: "smooth" });
        }
      }
    };
    const frame = requestAnimationFrame(scrollToCurrent);
    timeoutRef.current = setTimeout(nextSlide, 60000);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const handleStart = (e) => {
    setIsDragging(true);
    setDragStart(e.type.includes("mouse") ? e.clientX : e.touches[0].clientX);
  };

  const handleEnd = (e) => {
    if (!isDragging) return;
    const end = e.type.includes("mouse") ? e.clientX : e.changedTouches[0].clientX;
    const diff = dragStart - end;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setIsDragging(false);
  };

  return (
    <div dir={dir} style={{ background: "#f9fafb", padding: "20px 0" }}>
      <style>{`
        .carousel-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .slide-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          width: 100%;
        }

        .slide {
          flex: 0 0 85%;
          display: flex;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          scroll-snap-align: center;
          margin: 0 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          height: auto;
        }

        .slide img {
          width: 50%;
          height: auto;
          object-fit: cover;
        }

        .slide-content {
          width: 50%;
          padding: 20px;
          font-family: 'Arial', sans-serif;
          direction: ${dir};
          overflow-y: auto;
        }

        .slide-content h3 {
          font-size: 22px;
          color: #B38D42;
          margin-bottom: 10px;
        }

        .slide-content p {
          font-size: 16px;
          margin-bottom: 12px;
          color: #1F1F1F;
        }

        .slide-content li {
          font-size: 14px;
          margin-bottom: 6px;
          color: #333;
          line-height: 1.5;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #fff;
          border: none;
          border-radius: 50%;
          padding: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          cursor: pointer;
          z-index: 1;
        }

        .nav-button.left { left: 12px; }
        .nav-button.right { right: 12px; }

        @media (max-width: 768px) {
          .slide {
            flex-direction: column;
          }

          .slide img {
            width: 100%;
            height: 180px;
          }

          .slide-content {
            width: 100%;
            padding: 16px;
          }

          .slide-content h3 {
            font-size: 18px;
          }

          .slide-content p,
          .slide-content li {
            font-size: 13px;
          }
        }
      `}</style>

      <h2 style={{
        textAlign: "center",
        fontSize: "35px",
        marginBottom: "20px",
        marginRight:"10px",
        fontFamily: "Montserrat, sans-serif",
        color: "#000",
        fontWeight:'500',
      }}>
        {lang === "ar" ? "ماذا نقدم" : "What We Do"}
      </h2>

      <div
        className="carousel-wrapper"
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
      >
        <button onClick={prevSlide} className="nav-button left" aria-label="Previous">
          <ChevronLeft />
        </button>

        <div className="slide-container" ref={slideContainerRef}>
          {slides.map((slide, index) => {
            const data = slide[lang];
            return (
              <div className="slide" key={index}>
                <img src={slide.image} alt={data.title} />
                <div className="slide-content">
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                  <ul>
                    {data.points.map((pt, i) => (
                      <li key={i}>
                        <strong>{pt.bold}</strong>{pt.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={nextSlide} className="nav-button right" aria-label="Next">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default FullWidthCarousel;