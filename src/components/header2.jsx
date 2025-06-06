import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BannerText from './Homepage/bannertext';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fadeVideo, setFadeVideo] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
const [autoSwitchTimeout, setAutoSwitchTimeout] = useState(null);
const [ecommerceDropdown, setEcommerceDropdown] = useState(false);
const navigate = useNavigate();

  const isArabic = language === 'ar';
  const videoSources = [
    "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749035386/About_Us_banner_2_smmwwl.webp",
  ];
  const ecommerceSubLinks = [
    { labelEn: 'Shop', labelAr: 'تسوق', path: '/ecommerce/shop' },
    { labelEn: 'Categories', labelAr: 'الفئات', path: '/ecommerce/categories' },
    { labelEn: 'Offers', labelAr: 'العروض', path: '/ecommerce/offers' },
  ];
  
  

  



  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1150;
      setIsMobile(mobile);
      if (!mobile) setMobileMenuOpen(false);
    };
  
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 100); 
    };
  
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { labelEn: 'ABOUT US', labelAr: 'من نحن', path: '/about' },
    { labelEn: 'OUR BRANDS', labelAr: 'علاماتنا التجارية', path: '/brands' },
    {
      labelEn: 'ECOMMERCE',
      labelAr: 'الشراكة معنا',
      // no path here as requested
      subItems: [
        { labelEn: 'NEXSO', labelAr: 'تسوق',href: 'https://nexso.com' },
        { labelEn: 'VELLORE PARIS', labelAr: 'الفئات', href: 'https://velloreparis.com' },
        { labelEn: 'GRAHAAM', labelAr: 'العروض', href: 'https://grahaam.com' },
        { labelEn: 'STORE1920', labelAr: 'العروض', href: 'https://store1920.com' },

      ],
    },
       { labelEn: 'PARTNER WITH US', labelAr: 'الشراكة معنا', path: '/partner' },
    { labelEn: 'BLOGS', labelAr: 'المدونات', path: '/blogs' },
    { labelEn: 'CAREERS', labelAr: 'الوظائف', path: '/careers' },
    { labelEn: 'CONTACT US', labelAr: 'اتصل بنا', path: '/contact' },
  ];
  const toggleEcommerceDropdown = () => {
    setEcommerceDropdown((prev) => !prev);
  };
  

  return (
      <div dir={isArabic ? 'rtl' : 'ltr'} style={{ ...styles.pageContainer, height: isMobile ? '80vh' : '80vh' }}>
        
        {/* Video Background */}
        <div style={styles.videoWrapper}>
          <img
            key={currentVideo}
            src={videoSources[currentVideo]}
            autoPlay
            muted
            loop
            playsInline
            style={styles.videoBackground}
          />
          {/* <div style={styles.overlay} /> */}
    
          {/* Video Controls */}
          <div style={styles.videoControls}>
         
  
  {/* <div style={{ ...styles.dotsWrapper, pointerEvents: 'auto' }}>
    {videoSources.map((_, index) => (
      <span
        key={index}
        onClick={() => handleDotClick(index)}
        style={{
          ...styles.dot,
          backgroundColor: currentVideo === index ? '#fff' : '#888',
        }}
      />
    ))}
  </div> */}
  
 
          </div>
        </div>
    
        {/* Top Bar */}
        <div style={styles.topBar}>
          <div style={styles.topBarContent}>
            <div style={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaInstagram /></a>
            </div>
            {/* <span style={styles.divider}>|</span> */}
            {/* <button onClick={toggleLanguage} style={styles.languageButton}>
              {isArabic ? 'English' : 'العربية'}
            </button> */}
          </div>
        </div>
    
        {/* Header */}
        <header style={{ ...styles.header, ...(scrolledDown ? styles.headerFixedTop : {}) }}>
        <a href="./" style={styles.logoContainer}>
  <img
    src="https://res.cloudinary.com/dnpwsutir/image/upload/v1748353387/Logo_V2_1_dvu1bp.png"
    alt="Althakeel Logo"
    style={styles.logoImage}
  />
</a>
    
          {!isMobile && (
          <nav style={styles.centerNav}>
          <div style={{ display: 'flex', gap: '20px', position: 'relative' }}>
            {navLinks.map(({ labelEn, labelAr, path, subItems,href }, idx) => (
              subItems ? (
                <div 
                  key={idx} 
                  style={styles.dropdownContainer}
                  onMouseEnter={() => setEcommerceDropdown(true)}
                  onMouseLeave={() => setEcommerceDropdown(false)}
                >
                  <div style={styles.navLink}>
                    {isArabic ? labelAr : labelEn} <FaChevronDown size={12} />
                  </div>
                  {ecommerceDropdown && (
                    <div style={styles.dropdownMenu}>
                      {subItems.map((sub, subIdx) => (
                        <Link key={subIdx} to={sub.href} target='blank' style={styles.dropdownItem}>
                          {isArabic ? sub.labelAr : sub.labelEn}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={idx} to={path} style={styles.navLink}>
                  {isArabic ? labelAr : labelEn}
                </Link>
              )
            ))}
          </div>
          <button onClick={toggleLanguage} style={styles.languageButton}>
            {isArabic ? 'English' : 'العربية'}
          </button>
        </nav>
        
          
            
          )}
    
          {isMobile && (
            <div style={styles.mobileMenuIcon} onClick={() => setMobileMenuOpen((prev) => !prev)}>
              {mobileMenuOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
            </div>
          )}
        </header>
    
        {/* Mobile Menu */}
        {isMobile && (
        <div style={{ ...styles.mobileMenu, ...(mobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed) }}>
          {navLinks.map(({ labelEn, labelAr, path }, idx) => (
            path === '/ecommerce' ? (
              <div key={idx} style={styles.mobileDropdown}>
                <div onClick={toggleEcommerceDropdown} style={styles.mobileNavLink}>
                  {isArabic ? labelAr : labelEn} <FaChevronDown size={12} />
                </div>
                {ecommerceDropdown && (
                  <div style={styles.mobileDropdownMenu}>
                    {ecommerceSubLinks.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sub.path}
                        style={styles.mobileSubNavLink}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {isArabic ? sub.labelAr : sub.labelEn}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={idx} to={path} style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                {isArabic ? labelAr : labelEn}
              </Link>
            )
          ))}
        </div>
      )}
    
       
        <div style={styles.bannerContent}>
          <h1 style={styles.bannerTitle}>About Us</h1>
     
          {/* <about ut page redirect this button */}
        </div>
    
     
      
      </div>
    );
    
};

const styles = {
  pageContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },
  videoBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
  },
  topBar: {
    position: 'relative',
    zIndex: 3,
    padding: '8px 10px',
    color: '#fff',
    // borderBottom: '0.5px solid rgba(255, 255, 255, 0.2)',
    backgroundColor:'#1D1D1D'
  },
  topBarContent: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  socialIcons: {
    display: 'flex',
    gap: '8px',
  },
  icon: {
    color: '#fff',
    fontSize: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '24px',
  },
  divider: {
    color: '#fff',
    fontSize: '18px',
  },
  languageButton: {
    backgroundColor:'transparent',
    border: "1px solid #777",
    color: '#fff',
    padding: '4px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  header: {
    position: 'relative',
    zIndex: 3,
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #1a1a1a 0%, transparent 100%)',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight:'Bold',
    alignItems: 'flex-end',
    padding: '0 40px',

  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  
  centerNav: {
    // position: 'absolute',
    // left: '55%',
    // transform: 'translateX(-50%)',
    // display: 'flex',
    // gap: '30px',               
    // flexWrap: 'nowrap',        
    // whiteSpace: 'nowrap',     
    // zIndex: 4,
    // overflowX: 'auto',        
    // padding: '0 10px',         

    display: 'flex',
  justifyContent: 'space-between',  // pushes children apart
  alignItems: 'center',
  gap: '20px',
  },
  
  rightControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },


  
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    // marginLeft: '2px',
  },
  logoImage: {
    maxWidth: '150px',
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  nav: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  navLink: {
    position: 'relative',
    display: 'inline-block',
    color: '#fff',
    fontSize: '11px',
    textDecoration: 'none',
    padding: '4px 8px',
    transition: 'color 0.3s ease',
    
    overflow: 'hidden',
  },
 
  
  
  mobileMenuIcon: {
    display: 'block',
    cursor: 'pointer',
  },
  mobileMenu: {
    position: 'fixed',
    top: 100,
    left: 0,
    width: '100%',
    maxHeight: '100vh',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
    zIndex: 999,
    overflowY: 'auto',
    transition: 'transform 0.4s ease, opacity 0.4s ease',
  },
  mobileMenuOpen: {
    opacity: 1,
    transform: 'translateY(0%)',
    pointerEvents: 'auto',
  },
  mobileMenuClosed: {
    opacity: 0,
    transform: 'translateY(-100%)',
    pointerEvents: 'none',
  },
  mobileMenuHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  mobileLogoImage: {
    maxWidth: '100px',
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  mobileMenuClose: {
    cursor: 'pointer',
  },
  mobileNavLink: {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    fontSize: '18px',
  },
  bannerContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 3,
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    padding: '0 20px',
  },

  bannerTextWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '20vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',

  },



  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundColor: '#0D0D0D',
    backgroundImage: 'radial-gradient(circle at top left, #1A1A1A, #0D0D0D)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 10px',
    overflow: 'hidden',
    fontFamily: 'Montserrat, sans-serif',

  },
  
  bannerTitle: {
    fontSize: '2rem',
    fontWeight: '500',
    color: '#F0F0F0',
    letterSpacing: '3.5px',
    marginBottom: '5px',
    position: 'relative',
    zIndex: 2,
    animation: 'fadeInUp 1.2s ease forwards',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat, sans-serif',

  },
  
  bannerTitleAccent: {
    background: 'linear-gradient(90deg, #A4813D, #d4b36b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: 'Montserrat, sans-serif',

  },
  
  bannerSubtitle: {
    fontSize: '1.4rem',
    color: '#BBBBBB',
    maxWidth: '800px',
    lineHeight: '1',
    marginBottom: '20px',
    animation: 'fadeInUp 1.6s ease forwards',
  },
  
 
  bannerButtonHover: {
    transform: 'scale(1.1)',
    backgroundPosition: 'right center',
    boxShadow: '0 20px 50px rgba(164,129,61,0.85)',
  },
  


  
  


  headerFixedTop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    // sticky headerissue
    padding:'20px 40px 40px 40px',
    // maxWidth:'1400px',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    fontWeight:'Bold',
    backdropFilter: 'blur(8px)',
    // borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    zIndex: 10,
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'transform 0.6s ease, opacity 0.6s ease', 
  },

 
  dotsWrapper: {
    display: 'flex',
    gap: '10px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#888',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  
  dropdownContainer: {
    position: 'relative',
  },
  
  dropdownMenu: {
    position: 'fixed',
    top: '100%',
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(24px)',              
    WebkitBackdropFilter: 'blur(10px)',         
    // boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    zIndex: 10,
    minWidth: '150px',
    display: 'flex',
    flexDirection: 'column',
    color:"#fff",
    borderRadius: '8px',                      
    padding:"5px 5px",
    // border: '1px solid rgba(255, 255, 255, 0.2)' 
  },
  
  
  dropdownItem: {
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#fff',
    fontSize:"12px",
    fontFamily: 'Montserrat, sans-serif',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    
  },
  
  dropdownItemHover: {
    backgroundColor: '#f5f5f5',
  },
  
  
  
};

export default HomePage;
