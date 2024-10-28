import React from 'react';
import hydroLogo from '../images/hydroLogo.png';
import appPreview from '../images/appPreview.png'; // Adjust the path accordingly

const DownloadSection = () => {
  return (
    <section className="bg-customBlue text-white px-6 md:px-16 lg:px-36 flex flex-col md:flex-row justify-between w-full min-h-[400px] relative overflow-hidden">
      {/* Left Side Content */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 md:w-1/2 py-20">
        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-4">
          <img src={hydroLogo} alt="HydroSmart Logo" className="w-28 h-28 object-contain rounded-full" />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold">Download Now!</h2>

        <p className="text-lg md:text-l">
          HydroSmart mobile application is now available for download on Google Play. Click below to get the app now!
        </p>

        <a 
          href="https://play.google.com" 
          className="mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Google Play Badge" 
            className="w-40"
          />
        </a>
      </div>

      {/* Right Side Image */}
      <div className="relative md:w-1/2 flex items-end justify-end mb-0">
        <img 
          src={appPreview} 
          alt="App Preview"
        />
      </div>
    </section>
  );
};

export default DownloadSection;
