import React from 'react';
import hydroLogo from '../images/hydroLogo.png';

const DownloadSection = () => {
  return (
    <section className="bg-customBlue text-white py-12 px-6 md:px-16 lg:px-36 flex flex-col md:flex-row justify-between items-center w-full min-h-[400px]">
      {/* Left Side Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-1/2">
        {/* Logo */}
        <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-4">
          <img src={hydroLogo} alt="HydroSmart Logo" className="w-28 h-28 object-contain" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold">Download Now!</h2>

        {/* Paragraph */}
        <p className="text-lg md:text-xl">
          HydroSmart mobile application is now available for download on Google Play. Click below to get the app now!
        </p>
      </div>

      {/* Right Side Placeholder Images */}
      <div className="relative flex mt-8 md:mt-0 md:w-1/2 justify-center md:justify-end">
        {/* Background Grey Box (Placeholder) */}
        <div className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gray-300 rounded-lg shadow-lg" />

        {/* Foreground Grey Box (Placeholder) */}
        <div className="w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gray-400 rounded-lg shadow-lg absolute top-10 left-10 md:top-14 md:left-14 lg:top-16 lg:left-16" />
      </div>
    </section>
  );
};

export default DownloadSection;
