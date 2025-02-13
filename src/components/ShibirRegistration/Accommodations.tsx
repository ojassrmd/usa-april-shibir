import React from "react";
import { AccommodationOption } from "./types";

interface AccommodationsProps {
  options: AccommodationOption[];
}

const Accommodations: React.FC<AccommodationsProps> = ({ options }) => {
  return (
    <div className="flex flex-col pl-6 mt-16 w-full">
      <div className="self-center text-3xl font-bold leading-none text-center text-rose-500">
        Accommodations
      </div>
      <div className="self-center mt-4 text-xl font-semibold leading-tight text-center text-blue-400">
        On-site Accommodations
      </div>
      <div className="flex gap-6 mt-4 text-base font-semibold leading-loose text-black">
        <div className="flex overflow-hidden flex-col grow shrink-0 items-start px-4 py-5 bg-white border-r-8 border-b-8 border-rose-500 basis-0 w-fit">
          <div className="text-xl leading-tight text-center text-blue-400">
            <span className="">Slab 1</span> (up to 28th Feb)
          </div>
          <div className="mt-4">Full Package (Per Person)</div>
          <div className="mt-1 text-rose-500">$150</div>
          <div className="self-stretch mt-4">
            Daily Package (Per Person/Day)
          </div>
          <div className="mt-1 text-rose-500">$60</div>
        </div>
        <div className="flex overflow-hidden flex-col grow shrink-0 items-start px-4 py-5 bg-white border-r-8 border-b-8 border-rose-500 basis-0 w-fit">
          <div className="text-xl leading-tight text-center text-blue-400">
            <span className="">Slab 2</span> (Mar 1 to Mar 23)
          </div>
          <div className="mt-4">Full Package (Per Person)</div>
          <div className="mt-1 text-rose-500">$170</div>
          <div className="mt-4">Daily Package (Per Person/Day)</div>
          <div className="mt-1 text-rose-500">$70</div>
        </div>
      </div>
      <div className="flex gap-4 items-center self-center mt-6">
        <div className="flex shrink-0 self-stretch my-auto w-10 h-2 bg-rose-500" />
        <div className="flex shrink-0 self-stretch my-auto w-10 h-2 bg-red-100" />
        <div className="flex shrink-0 self-stretch my-auto w-10 h-2 bg-red-100" />
        <div className="flex shrink-0 self-stretch my-auto w-10 h-2 bg-red-100" />
      </div>
      <button className="gap-2.5 self-center px-6 py-3 mt-8 text-xl font-bold leading-tight text-center text-white bg-rose-500 rounded-full">
        Book Now
      </button>
      <div className="self-center mt-8 text-base leading-6 text-center text-gray-700">
        <span className="font-semibold">Cancellation Policy:</span> 50% refund
        if canceled on or before Mar 23 No refund if canceled after Mar 23
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
            <div className="text-xl font-semibold leading-tight">
              {option.name}
            </div>
            <div className="mt-1 text-base leading-loose">
              {option.distance}
            </div>
            {option.note && (
              <div className="mt-1 text-sm leading-7">{option.note}</div>
            )}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6804faa9f92bf30535cf63dbd2aa98e0d1c7f2c320a85f6378cc8d5d9bba84ea?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            alt="External link icon"
          />
        </div>
      ))}
      <div className="self-start mt-10 text-xl font-bold leading-snug text-blue-400">
        Additional Information
      </div>
      <div className="flex flex-col mt-6 w-full text-base leading-6 text-black max-w-[342px]">
        <div>The registration fee includes breakfast, lunch and dinner.</div>
        <div className="mt-2">
          Children under 12 years of age are not allowed in the satsang hall
          during pravachans.
        </div>
        <div className="mt-2">
          The Management will take utmost care of all participants. However, the
          management is not responsible for any injury/loss or damage to any
          individuals or their property during the retreat.
        </div>
        <div className="mt-2">
          Please follow a conservative dress code, no shorts or sleeveless
          clothing.
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
