import React from 'react';
import heroImage from '../images/hero-image.jpg'; // Import image for the hero section.

const HeroSection = () => {
  const scrollToScope = () => {
    const scopeSection = document.getElementById('scope');
    if (scopeSection) {
      scopeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-cyan-100 to-white w-full min-h-screen mt-0 md:mt-10 px-6 md:px-16 lg:px-36 mx-auto"
    >
      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-4 sm:mt-6 sm:mb-6">
        <h1
          className="font-medium text-gray-600 text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight lg:leading-tight"
        >
          <span className="block">
            EMPOWERING <br /> COMMUNITIES <br />
          </span>
          <span className="block">
            WITH <span className="text-customBlue">SMART</span>
          </span>
          <span className="text-customBlue">WATER MANAGEMENT</span>
        </h1>
        <button
          onClick={scrollToScope}
          className="bg-customBlue text-white py-2 px-4 rounded-full hover:bg-customBlueHover transition-all flex items-center justify-center mt-2"
        >
          Explore More <span className="ml-2 text-lg">→</span>
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center sm:mt-6 sm:mb-6">
        <img
          src={heroImage}
          alt="Water Tank Management"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-lg object-cover transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default HeroSection;
