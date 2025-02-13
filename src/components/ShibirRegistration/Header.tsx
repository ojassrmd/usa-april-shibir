import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-[#FFF0F0] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Image */}
      <div className="w-full relative">
        <img
          src="/images/hero-bg.jpg"
          alt="Spiritual Spring - Shilanyas and Natak Samaysaar Shibir (18-20 Apr) and Yoga Retreat (25-27 Apr)"
          className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[634px] object-cover rounded-lg shadow-sm"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mt-4 sm:mt-8 text-lg sm:text-xl md:text-2xl font-medium text-[#72B9EA] font-frank">
        <div>Schedule</div>
        <div className="hidden sm:block h-6 w-px bg-rose-500" />
        <div>Registration</div>
        <div className="hidden sm:block h-6 w-px bg-rose-500" />
        <div>Accommodations</div>
      </div>

      {/* Title and Description */}
      <div className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-bold text-rose-500 text-center font-frank">
        Shibir with
        <br />
        Pujya Gurudevshri
      </div>
      <div className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-gray-700 text-center max-w-[90%] sm:max-w-[342px] font-poppins px-4 sm:px-0">
        Join us for a spiritually elevating weekend in the Divine presence of enlightened visionary and global
        humanitarian,
      </div>

      {/* Profile Card */}
      <div className="mt-6 sm:mt-8 bg-white shadow-sm p-4 sm:p-6 w-[90%] sm:w-auto sm:max-w-[300px] relative rounded-lg">
        <img
          src="/images/gurudev-profile.jpg"
          alt="Pujya Gurudevshri Rakeshji"
          className="w-full aspect-square object-cover mb-4 rounded-lg"
        />
        <div className="text-lg sm:text-xl font-semibold text-rose-500 text-center font-frank">
          Pujya Gurudevshri Rakeshji
        </div>
        <div className="mt-1 text-xs sm:text-sm text-gray-700 font-poppins">
          Be part of this momentous occasion – a celebration of devotion, wisdom, and new beginnings.
        </div>
        {/* Decorative flower */}
        <img
          src="/images/flower-decoration.png"
          alt=""
          className="absolute -right-6 sm:-right-10 top-32 sm:top-40 w-24 sm:w-36 h-24 sm:h-36"
        />
      </div>

      {/* Register Button */}
      <button className="mt-6 sm:mt-8 px-6 py-3 text-lg sm:text-xl font-bold text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 transition-colors rounded-full font-frank shadow-sm">
        Register Now
      </button>
    </div>
  );
};

export default Header;
