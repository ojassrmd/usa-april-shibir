import React, { useState } from "react";
import { AccommodationsProps } from "./types";

const Accommodations: React.FC<AccommodationsProps> = ({ slabs, options }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slabs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slabs.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col pl-6 mt-16 w-full">
      <div className="self-center text-3xl font-bold leading-none text-center text-rose-500">Accommodations</div>
      <div className="self-center mt-4 text-xl font-semibold leading-tight text-center text-blue-400">
        On-site Accommodations
      </div>

      {/* Carousel Section */}
      <div className="relative mt-8">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slabs.map((slab, index) => (
              <div key={index} className="flex-shrink-0 w-full px-4">
                <div className="flex overflow-hidden flex-col items-center px-16 py-8 bg-white border-r-8 border-b-8 border-rose-500 rounded-xl relative max-w-[400px] mx-auto">
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-rose-500 rounded-full w-8 h-8 flex items-center justify-center shadow-sm transition-colors"
                    aria-label="Previous slide"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-rose-500 rounded-full w-8 h-8 flex items-center justify-center shadow-sm transition-colors"
                    aria-label="Next slide"
                  >
                    →
                  </button>

                  <div className="text-xl leading-tight text-center text-blue-400 w-full">
                    <span className="font-semibold">{slab.name}</span>{" "}
                    <span className="text-blue-300">{slab.dateRange}</span>
                  </div>
                  <div className="mt-6 flex flex-col items-center">
                    <div className="text-lg text-gray-700">Full Package</div>
                    <div className="text-sm text-gray-500 -mt-1">(Per Person)</div>
                  </div>
                  <div className="mt-1 text-3xl font-bold text-rose-500">${slab.fullPackagePrice}</div>
                  <div className="mt-6 flex flex-col items-center">
                    <div className="text-lg text-gray-700">Daily Package</div>
                    <div className="text-sm text-gray-500 -mt-1">(Per Person/Day)</div>
                  </div>
                  <div className="mt-1 text-3xl font-bold text-rose-500">${slab.dailyPackagePrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex gap-4 items-center self-center mt-6">
        {slabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-10 bg-rose-500" : "w-10 bg-red-100"
            }`}
          />
        ))}
      </div>

      <button className="gap-2.5 self-center px-6 py-3 mt-8 text-xl font-bold leading-tight text-center text-white bg-rose-500 rounded-full">
        Book Now
      </button>

      <div className="self-center mt-8 text-base leading-6 text-center text-gray-700">
        <span className="font-semibold">Cancellation Policy:</span> 50% refund if canceled on or before Mar 23 No refund
        if canceled after Mar 23
      </div>

      <div className="self-center mt-16 text-xl font-semibold leading-tight text-center text-blue-400">
        External Hotel Accommodations
      </div>

      <div className="flex flex-col items-center gap-4 mt-6">
        {options.map((option, index) => (
          <div key={index} className="flex flex-col w-full max-w-[400px] bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold text-rose-500">{option.name}</h3>
                <p className="mt-1 text-lg text-rose-300">{option.distance}</p>
                {option.note && <p className="mt-2 text-sm text-rose-300">{option.note}</p>}
              </div>
              <button className="p-2 bg-rose-500 text-white rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="self-center mt-16 text-xl font-semibold leading-tight text-center text-blue-400">
        Additional Information
      </div>
      <div className="flex flex-col gap-4 mt-6 w-full max-w-[400px] mx-auto text-base leading-6 text-gray-700">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 mt-2 bg-rose-500 rounded-sm flex-shrink-0" />
          <p>The registration fee includes breakfast, lunch and dinner.</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 mt-2 bg-rose-500 rounded-sm flex-shrink-0" />
          <p>Children under 12 years of age are not allowed in the satsang hall during pravachans.</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 mt-2 bg-rose-500 rounded-sm flex-shrink-0" />
          <p>
            The Management will take utmost care of all participants. However, the management is not responsible for any
            injury/loss or damage to any individuals or their property during the retreat.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 mt-2 bg-rose-500 rounded-sm flex-shrink-0" />
          <p>Please follow a conservative dress code, no shorts or sleeveless clothing.</p>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
