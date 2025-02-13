import React from "react";
import { SponsorshipItem } from "./types";

interface SponsorshipProps {
  items: SponsorshipItem[];
}

const Sponsorship: React.FC<SponsorshipProps> = ({ items }) => {
  return (
    <div className="flex relative flex-col px-4 pt-16 mt-16 w-full text-center">
      {/* Background with fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-white/90" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0930cee73604668c7ef7e31e0edeaaaf3268411421c48da941f22853e553dc29"
        className="object-cover absolute inset-0 size-full opacity-30"
        alt="Sponsorship background"
      />
      <div className="relative self-center mb-12 text-4xl font-bold text-rose-500">Sponsorship</div>

      {/* Sponsorship Table */}
      <div className="relative z-10 max-w-[600px] mx-auto w-full bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
        {/* Table Header */}
        <div className="flex font-bold text-white bg-rose-500/90">
          <div className="grow py-4 px-6 text-left">Sponsorship</div>
          <div className="py-4 px-6 text-right w-32">Amount</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-rose-100/20">
          {items.map((item, index) => (
            <div key={index} className="flex hover:bg-white/30 transition-colors duration-200">
              <div className="grow py-4 px-6 text-left text-gray-800 font-medium">{item.name}</div>
              <div className="py-4 px-6 text-right font-semibold text-rose-500 w-32">
                ${item.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsor a Brick Card */}
      <div className="relative z-10 mt-16 max-w-[400px] mx-auto bg-white/90 rounded-xl overflow-hidden shadow-lg">
        <div className="relative pt-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <img
            loading="lazy"
            src="/images/us-ashram.png"
            className="object-cover absolute inset-0 w-full h-full"
            alt="Sponsor a Brick background"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-2xl font-bold text-white">Sponsor a Brick</h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            This is an incredible opportunity for every family, and every single member, to be a part of history! Be a
            key member in the monumental 'Jin Mandir & Guru Mandir Shilanyas' and contribute to the temple's
            construction in a truly meaningful way. You can sponsor a Brick for just{" "}
            <span className="font-semibold text-blue-400">$251</span>, and the best part?
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-4">There's NO limit to how many you can sponsor!</p>
          <p className="text-lg font-semibold text-blue-400">
            Don't miss out – Sponsor bricks today and be a part of a divine legacy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
