import React from "react";
import { SponsorshipItem } from "./types";

interface SponsorshipProps {
  items: SponsorshipItem[];
}

const Sponsorship: React.FC<SponsorshipProps> = ({ items }) => {
  return (
    <div className="flex relative flex-col px-2 pt-16 mt-16 w-full text-center aspect-[0.5]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0930cee73604668c7ef7e31e0edeaaaf3268411421c48da941f22853e553dc29?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3"
        className="object-cover absolute inset-0 size-full"
        alt="Sponsorship background"
      />
      <div className="relative self-center text-3xl font-bold leading-none text-rose-500">
        Sponsorship
      </div>
      <div className="flex relative z-10 flex-col mt-8 mb-0 w-full text-base font-semibold leading-7 border border-black border-solid">
        <div className="flex font-bold text-orange-50 whitespace-nowrap bg-rose-500">
          <div className="grow px-16 py-2.5 border border-black border-solid w-fit">
            Sponsorship
          </div>
          <div className="px-5 py-2.5 border border-black border-solid">
            Amount
          </div>
        </div>
        {items.map((item, index) => (
          <div key={index} className="flex">
            <div className="grow px-9 py-2.5 text-black w-fit">{item.name}</div>
            <div className="px-6 py-2.5 text-rose-500 whitespace-nowrap border border-black border-solid">
              ${item.amount}
            </div>
          </div>
        ))}
      </div>
      <div className="flex overflow-hidden flex-col items-start self-center py-6 pl-6 w-full font-semibold leading-6 bg-white shadow-sm max-w-[300px] mt-16">
        <div className="flex relative flex-col self-stretch pt-64 pb-2 text-xl tracking-normal leading-relaxed text-rose-500 aspect-[0.902]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87d3d8dc5f267623a924dfc341f987008a504eeeb5819ce820103490285c8653?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3"
            className="object-cover absolute inset-0 size-full"
            alt="Sponsor a Brick background"
          />
          Sponsor a Brick
        </div>
        <div className="text-sm tracking-tighter text-gray-700">
          This is an incredible opportunity for every family, and every single
          member, to be a part of history! Be a key member in the monumental
          'Jin Mandir & Guru Mandir Shilanyas' and contribute to the temple's
          construction in a truly meaningful way. You can sponsor a Brick for
          just <span className="font-semibold text-blue-400">$251</span>, and
          the best part?
          <br />
          <br />
          There's NO limit to how many you can sponsor!
        </div>
        <div className="mt-2 text-base tracking-tight text-blue-400">
          Don't miss out – Sponsor bricks today and be a part of a divine
          legacy!
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
