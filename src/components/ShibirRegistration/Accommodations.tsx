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

      {options.map((option, index) => (
        <div
          key={index}
          className="flex overflow-hidden gap-10 justify-between items-center p-4 mt-4 w-full text-center text-rose-500 bg-white shadow-sm max-w-[342px]"
        >
          <div className="flex flex-col items-start self-stretch my-auto w-[178px]">
            <div className="text-xl font-semibold leading-tight">{option.name}</div>
            <div className="mt-1 text-base leading-loose">{option.distance}</div>
            {option.note && <div className="mt-1 text-sm leading-7">{option.note}</div>}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6804faa9f92bf30535cf63dbd2aa98e0d1c7f2c320a85f6378cc8d5d9bba84ea?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            alt="External link icon"
          />
        </div>
      ))}

      <div className="self-start mt-10 text-xl font-bold leading-snug text-blue-400">Additional Information</div>
      <div className="flex flex-col mt-6 w-full text-base leading-6 text-black max-w-[342px]">
        <div>The registration fee includes breakfast, lunch and dinner.</div>
        <div className="mt-2">
          Children under 12 years of age are not allowed in the satsang hall during pravachans.
        </div>
        <div className="mt-2">
          The Management will take utmost care of all participants. However, the management is not responsible for any
          injury/loss or damage to any individuals or their property during the retreat.
        </div>
        <div className="mt-2">Please follow a conservative dress code, no shorts or sleeveless clothing.</div>
      </div>
    </div>
  );
};

export default Accommodations;
