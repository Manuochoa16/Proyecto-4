import React from "react";

const ImageButtons = () => {
  return (
    <div className="flex justify-center md:justify-center space-x-2 md:space-x-4 my-4 p-4 bg-white bg-opacity-50 rounded-lg max-w-6xl mx-auto border-2 border-gray-300 overflow-x-auto">
      <div className="flex space-x-2 md:space-x-4">
        <button className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full p-2 border-4 border-gray-300 transition-transform transform hover:scale-110 hover:shadow-lg">
          <img
            src="/1.png"
            alt="icon1"
            className="w-full h-full object-contain"
          />
        </button>
        <button className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full p-2 border-4 border-gray-300 transition-transform transform hover:scale-110 hover:shadow-lg">
          <img
            src="/2.png"
            alt="icon2"
            className="w-full h-full object-contain"
          />
        </button>
        <button className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full p-2 border-4 border-gray-300 transition-transform transform hover:scale-110 hover:shadow-lg">
          <img
            src="/3.png"
            alt="icon3"
            className="w-full h-full object-contain"
          />
        </button>
        <button className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full p-2 border-4 border-gray-300 transition-transform transform hover:scale-110 hover:shadow-lg">
          <img
            src="/4.png"
            alt="icon4"
            className="w-full h-full object-contain"
          />
        </button>
        <button className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full p-2 border-4 border-gray-300 transition-transform transform hover:scale-110 hover:shadow-lg">
          <img
            src="/5.png"
            alt="icon5"
            className="w-full h-full object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageButtons;
