import React, { useEffect, useRef } from 'react';
import './assets/HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection: React.FC = () => {
  const additionalContentRef = useRef<HTMLDivElement | null>(null); // Reference for the additional content section

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check for scroll down
      if (scrollTop < windowHeight && event.deltaY > 0) {
        event.preventDefault(); // Prevent default scroll
        // Smoothly scroll to the next section
        window.scrollTo({ top: windowHeight, behavior: 'smooth' });
      }

      // Check for scroll up
      if (scrollTop >= windowHeight && event.deltaY < 0) {
        event.preventDefault(); // Prevent default scroll
        // Smoothly scroll back to the hero section
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Add wheel event listener with passive false
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    if (additionalContentRef.current) {
      additionalContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="hero-title">
          Explore <span className="highlight">eco-friendly</span> Routes to Travel.
        </h1>
        <p className="hero-subtitle">
          Calculate carbon emissions for each route and contribute to a sustainable future.
        </p>
        <button className="btn-lg btn-outline-primary mt-3">Start Your Journey</button>
        
        {/* Scroll down indicator */}
        <div className="scroll-indicator-container">
          <button className="scroll-indicator" onClick={scrollToNextSection}>
            <i className="fas fa-chevron-down"></i> {/* Font Awesome arrow icon */}
          </button>
        </div>
      </section>
      <AdditionalContent ref={additionalContentRef} />
    </>
  );
};

const AdditionalContent = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="additional-content" ref={ref}>
      <h3 className='heading1'>Empower Your Journey: Explore India's Carbon Footprint</h3>
      <div className="info-card-container">
        <div className="info-card">
          <img src="https://img.icons8.com/ios-filled/50/28a745/plant.png" alt="Eco-Friendly" />
          <h3 className="heading">Choose Greener Paths</h3>
          <p className="info-text">
            Travel smarter! By selecting eco-friendly routes, you can cut down carbon emissions and contribute to a cleaner planet.
          </p>
        </div>
        <div className="info-card">
          <img src="https://img.icons8.com/ios-filled/50/28a745/earth-globe.png" alt="Global Emissions" />
          <h3 className="heading">Global Emission Insights</h3>
          <p className="info-text">
            Understand the rising trends of carbon emissions in India and worldwide. Make informed choices for a sustainable future.
          </p>
        </div>
        <div className="info-card">
          <img src="https://img.icons8.com/ios-filled/50/28a745/recycle.png" alt="Sustainable Travel" />
          <h3 className="heading">Promote Sustainability</h3>
          <p className="info-text">
            Every trip counts! Let's work together to reduce our carbon footprint through sustainable travel practices.
          </p>
        </div>
      </div>
      <iframe 
        src="https://ourworldindata.org/explorers/co2?time=earliest..2022&facet=none&hideControls=true&Gas+or+Warming=CO%E2%82%82&Accounting=Production-based&Fuel+or+Land+Use+Change=All+fossil+emissions&Count=Per+capita&country=CHN~USA~IND~GBR~OWID_WRL&tab=chart" 
        loading="lazy" 
        className="emissions-iframe"
        allow="web-share; clipboard-write"
      ></iframe>
    </div>
  );
});

export default HeroSection;
