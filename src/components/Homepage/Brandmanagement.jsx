import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Brands Management",
    desc: "We build private/white-label brands from concept to market, ensuring product–market fit and scalable growth:",
    points: [
      { bold: "Market Validation: ", text: "Conduct local demand analysis and competitor benchmarking in the UAE to confirm niche viability." },
      { bold: "Brand Identity & Digital Launch:", text: "Develop cohesive brand assets (logo, color palette) and SEO-optimized websites." },
      { bold: "Marketplace Onboarding:", text: "List and optimize products on major UAE e-commerce platforms (Amazon.ae, Noon) for visibility and conversion." },
      { bold: "Marketing & Growth:", text: "Execute omnichannel campaigns (social media, email, influencer partnerships) tailored to UAE consumer behaviors." },
    ],
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749066176/4_1_vykdyn.webp",
  },
  {
    title: "Brands Acquisition ",
    desc: "We target and integrate under-leveraged brands with high-growth potential through rigorous due diligence: ",
    points: [
      { bold: "Target Identification: ", text: "Screen for brands with strong equity but limited local reach. " },
      { bold: "Due Diligence & Valuation:", text: "Analyze financials, market share, and legal standing to determine fair acquisition terms. " },
      { bold: "Acquisition Structuring:", text: "Negotiate full or partial equity deals, including performance-based earn-outs." },
      { bold: "Post-Acquisition Integration:", text: "Consolidate operations (logistics, procurement) under Althakeel’s framework to unlock efficiencies. " },
    ],
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749066175/3_ac9jcp.webp",
  },
  {
    title: "Brands Partnerships ",
    desc: "We partner with international brands to bring curated products into the UAE, leveraging local insights and distribution: ",
    points: [
      { bold: "Global Scouting: ", text: " Identify overseas brands that align with UAE market trends (e.g., sustainability, tech).  " },
      { bold: "Opportunity–Risk Analysis: ", text: "Evaluate regulatory requirements and supply-chain factors to mitigate entry risks.  " },
      { bold: "Go-to-Market Planning: ", text: "Localize branding and coordinate logistics for seamless UAE launch.  " },
      { bold: "Ongoing Collaboration: ", text: " Implement co-marketing initiatives, joint events, and performance tracking to drive continuous growth." },
    ],
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749066175/1_2_fqcipr.webp",
  },
  {
    title: "Niched Marketplace  ",
    desc: "We develop vertical-focused e-commerce platforms that cater to highly specific consumer segments: ",
    points: [
      { bold: "Vertical Selection & Curation:  ", text: " Choose high-potential niches (e.g., eco-friendly home goods, premium men’s grooming) based on market demand. " },
      { bold: "Platform Development: ", text: " Build user-friendly interfaces with specialized filters, educational content, and community features. " },
      { bold: "Value-Added Services: ", text: " Provide expert guides, product reviews, and white-glove fulfillment for premium positioning." },
      { bold: "Data-Driven Optimization:", text: " Leverage analytics to refine product assortments and enhance customer lifetime value. " },
    ],
    image: "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749033450/2_ro2lla.webp",
  },
];

const FullWidthCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const timeoutRef = useRef(null);
  const slideContainerRef = useRef(null);
  const slideCount = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slideCount) % slideCount);

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
    timeoutRef.current = setTimeout(nextSlide, 65000);

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
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .carousel-container {
          width: 100%;
          padding: 10px 0 40px ;
  background-color: #f9fafb;
          margin: 0 auto;
        }

        .carousel-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 500;
            color: #021c35;

          margin-bottom: 20px;
          font-family: 'Montserrat', sans-serif;
          padding: 0 16px;
        }

        .carousel-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: grab;
          width: 100%;
        }

        .carousel-wrapper.grabbing {
          cursor: grabbing;
        }

        .slide-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          padding: 20px 0;
          width: 100%;
        }

        .slide {
          display: flex;
          flex-direction: row;
          min-width: 80vw;
          max-width: 90vw;
          margin: 0 20px;
          scroll-snap-align: center;
          background-color: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .slide-image {
          width: 50%;
          object-fit: cover;
          height: auto;
        }

        .slide-text {
          width: 50%;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .slide-text h3 {
          font-size: 25px;
          font-weight: 600;
          color: #B38D42;

          margin-bottom: 5px;
        }

        .slide-text p {
          margin-bottom: 16px;
          font-size: 17px;
            color: #1F1F1F;

          line-height: 1.4;
        }

        .slide-text ul {
          padding-left: 20px;
        }

        .slide-text li {
          margin-bottom: 8px;
          list-style-type: disc;
          font-size: 15px;
          line-height: 1.3;
            color: #333333;

        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          padding: 8px;
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-button.left {
          left: 16px;
        }

        .nav-button.left.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .nav-button.right {
          right: 16px;
        }

        /* Tablet Styles */
       @media (max-width: 768px) {
  .slide {
    flex-direction: column;
    flex: 0 0 50%;
  }

  .slide-image {
    width: 80%;
    height: 200px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .slide-text {
    width: 100%;
    padding: 16px 20px;
  }
}

        
    @media (max-width: 480px) {
  .slide {
    flex-direction: column;
    flex: 0 0 65%;
    margin: 0 auto;
    border-radius: 12px;
   margin-left:10px;
  }

  .slide-image {
    height: 180px;
    width: 100%;
    object-fit: cover;
    padding:'10px;
  }

  .slide-text {
    padding: 16px;
    width: 100%;
  }
}


      `}</style>

      <div className="carousel-container">
        <h2 className="carousel-title">What We Do</h2>

        <div
          className={`carousel-wrapper ${isDragging ? "grabbing" : ""}`}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
        >
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`nav-button left ${current === 0 ? "disabled" : ""}`}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="slide-container"  ref={slideContainerRef}>
            {slides.map((slide, index) => (
              <div key={index} className="slide">
  <img src={slide.image} alt={slide.title} className="slide-image"/>
  <div className="slide-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                  <ul>
                    {slide.points.map((point, i) => (
                      <li key={i}>
                        <b>{point.bold}</b>{point.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="nav-button right"
            aria-label="Next Slide"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FullWidthCarousel;
