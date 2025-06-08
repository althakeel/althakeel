import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import TopBar from './topbar';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const isArabic = language === 'ar';

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
const [topBarVisible, setTopBarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;
  
      setTopBarVisible(isScrollingUp || currentScrollPos < 10);
      setScrolled(currentScrollPos > 10);
      setPrevScrollPos(currentScrollPos);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    { label: isArabic ? 'معلومات عنا' : 'ABOUT US', path: '/about' },
    { label: isArabic ? 'علاماتنا التجارية' : 'OUR BRANDS', path: '/brands' },
    {
      label: isArabic ? 'التجارة الإلكترونية' : 'ECOMMERCE',
      dropdown: [
        { label: 'NEXSO', path: '/ecommerce/nexso' },
        { label: 'VELLORE PARIS', path: '/ecommerce/vellore-paris' },
        { label: 'GRAHAAM', path: '/ecommerce/grahaam' },
        { label: 'STORE1920', path: '/ecommerce/store1920' },
      ],
    },
    { label: isArabic ? 'كن شريكًا' : 'PARTNER WITH US', path: '/partner' },
    { label: isArabic ? 'المدونة' : 'BLOGS', path: '/blogs' },
    { label: isArabic ? 'الوظائف' : 'CAREERS', path: '/careers' },
    { label: isArabic ? 'اتصل بنا' : 'CONTACT US', path: '/contact' },
  ];

  const styles = {
    container: {
      position: 'fixed',
      top: topBarVisible ? '35px' : '0', // Dynamic top based on TopBar visibility
      left: 0,
      right: 0,
      zIndex: 999,
      transition: 'top 0.3s ease-in-out', // 👈 Smooth transition for top

    },
    topBarWrapper: {
      position: 'fixed',
      top: topBarVisible ? 0 : '-40px', // Adjust based on TopBar height
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'top 0.3s ease-in-out',
    },
    header: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '11px',
      width: '100%',
      boxSizing: 'border-box',
      background: scrolled ? '#141414' : 'linear-gradient(to bottom, #1a1a1a 10%, transparent 100%)',
      color: '#fff',
      padding: '20px 35px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      direction: isArabic ? 'rtl' : 'ltr',
      transition: 'background 0.3s ease',
    },
    logo: {
      height: '50px',
    },
    nav: {
      display: isMobile ? 'none' : 'flex',
      gap: '35px',
      alignItems: 'center',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      position: 'relative',
      cursor: 'pointer',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      background: '#111',
      borderRadius: '4px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.4)',
      minWidth: '180px',
      marginTop: '5px',
      padding: '10px 0',
      zIndex: 1000,
      textAlign: isArabic ? 'right' : 'left',
    },
    dropdownItem: {
      padding: '10px 20px',
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
    },
    langBtn: {
      padding: '6px 12px',
      border: '1px solid #fff',
      background: 'transparent',
      color: '#fff',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '12px',
    },
    hamburger: {
      display: isMobile ? 'block' : 'none',
      fontSize: '24px',
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
    mobileMenu: {
      display: mobileMenuOpen ? 'block' : 'none',
      background: '#111',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      zIndex: 999,
      padding: '15px 20px',
      direction: isArabic ? 'rtl' : 'ltr',
    },
    mobileLink: {
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
      padding: '12px 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
  };

  return (
    <>
      <div style={styles.topBarWrapper}>
        <TopBar />
      </div>
      <div style={styles.container}>
        <header style={styles.header}>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dnpwsutir/image/upload/v1748353387/Logo_V2_1_dvu1bp.png"
              alt="Al Thakeel Logo"
              style={styles.logo}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={styles.nav}>
            {navItems.map((item, idx) => (
              <div
                key={idx}
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <span style={styles.link}>{item.label} ▼</span>
                    {activeDropdown === idx && (
                      <div style={styles.dropdownMenu}>
                        {item.dropdown.map((subItem, subIdx) => (
                          <Link key={subIdx} to={subItem.path} style={styles.dropdownItem}>
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                  to={item.path}
                  style={{
                    ...styles.link,
                    ...(item.path === '/brands' && {
                      borderBottom: '2px solid white',
                      paddingBottom: '5px', // space between text and underline
                    }),
                  }}
                >
                  {item.label}
                </Link>
                )}
              </div>
            ))}
            <button style={styles.langBtn} onClick={toggleLanguage}>
              {isArabic ? 'English' : 'العربية'}
            </button>
          </nav>

          {/* Hamburger Icon */}
          <button
            style={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Mobile Menu */}
          <div style={styles.mobileMenu}>
            {navItems.map((item, idx) => (
              <div key={idx}>
                {item.dropdown ? (
                  <>
                    <div
                      style={styles.mobileLink}
                      onClick={() =>
                        setActiveDropdown(activeDropdown === idx ? null : idx)
                      }
                    >
                      {item.label} ▼
                    </div>
                    {activeDropdown === idx &&
                      item.dropdown.map((subItem, subIdx) => (
                        <Link key={subIdx} to={subItem.path} style={styles.mobileLink}>
                          {subItem.label}
                        </Link>
                      ))}
                  </>
                ) : (
                  <Link to={item.path} style={styles.mobileLink}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <button style={{ ...styles.mobileLink, ...styles.langBtn }} onClick={toggleLanguage}>
              {isArabic ? 'English' : 'العربية'}
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
