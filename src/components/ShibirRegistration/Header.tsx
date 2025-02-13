import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f896d5641737073f139a591a5205c494004902c72208eb3b8e51677dc62a55?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3"
        className="object-contain w-full aspect-[0.62]"
        alt="Shibir event banner"
      />
      <div className="flex gap-4 justify-center items-center pl-6 mt-8 text-2xl font-medium leading-none text-blue-400 whitespace-nowrap">
        <div className="self-stretch my-auto">Schedule</div>
        <div className="shrink-0 self-stretch my-auto w-0 h-6 border border-rose-500 border-solid" />
        <div className="self-stretch my-auto">Registration</div>
        <div className="shrink-0 self-stretch my-auto w-0 h-6 border border-rose-500 border-solid" />
        <div className="self-stretch my-auto text-center">Accommodations</div>
      </div>
      <div className="self-center mt-8 text-3xl font-bold leading-10 text-center text-rose-500">
        Shibir with
        <br />
        Pujya Gurudevshri
      </div>
      <div className="self-center mt-4 text-base font-medium leading-6 text-center text-gray-700">
        Join us for a spiritually elevating weekend in the Divine presence of
        enlightened visionary and global humanitarian,
      </div>
      <div className="flex overflow-hidden flex-col items-start self-center py-6 pl-6 mt-8 w-full bg-white shadow-sm max-w-[300px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8295abbdfb0a965e9a0ad585b3c6bd44f22f061703f0c7769d35d8cfbd64e2c1?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3"
          className="object-contain self-stretch w-full aspect-[1.02]"
          alt="Pujya Gurudevshri Rakeshji"
        />
        <div className="z-10 mt-0 text-xl font-semibold tracking-normal leading-relaxed text-center text-rose-500">
          Pujya Gurudevshri Rakeshji
        </div>
        <div className="mt-1 text-sm tracking-tight leading-6 text-gray-700">
          Be part of this momentous occasion – a celebration of devotion,
          wisdom, and new beginnings.
        </div>
      </div>
      <button className="gap-2.5 self-center px-6 py-3 mt-8 text-xl font-bold leading-tight text-center text-white bg-rose-500 rounded-full">
        Register Now
      </button>
    </>
  );
};

export default Header;
