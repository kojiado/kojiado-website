import CustomCursor from "./CustomCursor"
import { Suspense, useEffect, useRef, useState } from 'react'
import Header from "./sections/Header";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";

const App = () => {
  useEffect(() => {
    // Dynamically import SmoothScroll only on the client side
    import('smooth-scroll').then(({ default: SmoothScroll }) => {
      if (typeof window !== 'undefined') {
        var scroll = new SmoothScroll('a[href*="#"]', {
          speed: 1500,
          speedAsDuration: true,
          easing: 'easeInOutCubic',
          updateURL: false,
          offset: function (anchor, toggle) {
            var isHome = anchor.getAttribute('href') === '#home';
            return isHome ? 0 : 133.6;
          }
        });
      }
    });
  }, []);

  const [contactForm, setContactForm] = useState(false);

  const openContactForm = () => {
    setContactForm(true);
  };

  const closeContactForm = () => {
    setContactForm(false);
  };

  const [themeDark, setThemeDark] = useState(false);

  const handleThemeSwitch = () => {
    setThemeDark(!themeDark);
    localStorage.setItem('theme', JSON.stringify(!themeDark));
  };

  useEffect(() => {
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme !== null ? JSON.parse(storedTheme) : prefersDarkTheme;
    setThemeDark(initialTheme);
  }, []);

  const themeClass = themeDark ? 'dark' : '';


  // Custom Cursor

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const isDesktop = !/Mobi|Android/i.test(navigator.userAgent);
  
    if (isDesktop) {
      setShowCursor(true);
    }
    else {
      setShowCursor(false);
    }
  
    return () => {};
  }, []);

  
  return (
    <div>
      {showCursor && (
        <CustomCursor />
      )}
      
      <div className={`${themeClass}`}>
        <ContactForm isOpen={contactForm} onClose={closeContactForm}/>
        <div className="bg-primaryLight dark:bg-primaryDark flex flex-col gap-[180px] sm:gap-[240px]">
          <Header
            isDark={themeDark}
            makeDark={handleThemeSwitch}
            contactForm={openContactForm}
          />
          <About />
          <Services 
            contactForm={openContactForm}
          />
          <Works />
          <Skills />
          <Testimonials />
          <Contact
            contactForm={openContactForm}
          />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App