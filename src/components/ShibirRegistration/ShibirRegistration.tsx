import React from "react";
import Header from "./Header";
import Schedule from "./Schedule";
import Registration from "./Registration";
import Accommodations from "./Accommodations";
import Sponsorship from "./Sponsorship";
import Footer from "./Footer";
import { HighlightItem, ScheduleDay, AccommodationOption, SponsorshipItem } from "./types";

const highlightItems: HighlightItem[] = [
  {
    title: "Shilanyas",
    description: "Laying the spiritual foundation",
    imageSrc: "/images/shilanyas.png",
  },
  {
    title: "Elevating Discourses",
    description: "Illuminating Discourses on Natak Samaysaar",
    imageSrc: "/images/elevating-discourses.png",
  },
  {
    title: "Drama on Atmarasi Banarasidasji",
    description: "Transformative drama delving into the life of Atmarasi Banarasidasji, author of Natak Samaysaar",
    imageSrc: "/images/drama.png",
  },
  {
    title: "Soulful Bhakti",
    description: "Soul-stirring devotional renditions",
    imageSrc: "/images/soulful-bhakti.png",
  },
];

const scheduleDays: ScheduleDay[] = [
  {
    date: "Friday, 18th April",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/88d2c198eb0a3e9cee793f3bc27b2dcd67f6dd22d44df0fe0f276d92a5c107a7?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3",
    events: [
      { time: "6.45am to 7.30am", description: "Ajnabhakti" },
      { time: "10am to 12pm", description: "Shilanyas" },
      { time: "4pm to 6pm", description: "Satsang on Samadhi Maran" },
      { time: "8pm to 10pm", description: "Bhakti" },
    ],
    dresscode: "White",
  },
  {
    date: "Saturday, 19th April",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/79c306da8a830d9ea9668243303c8641aec731c2e9b58b3c53b0b4202b1a1e37?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3",
    events: [
      { time: "6.45am to 7.30am", description: "Ajnabhakti" },
      { time: "10am to 12pm", description: "Natak Samayasaar Satsang 1" },
      { time: "4pm to 6pm", description: "Natak Samayasaar Satsang 2" },
      { time: "8pm to 10pm", description: "Drama on Atmarasi Banarasidasji" },
    ],
    dresscode: "White",
  },
  {
    date: "Sunday, 20th April",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/abcc70fbcf085346c8788260d99e456f1b98a60b89367addedbfc9fe11bb4a05?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3",
    events: [
      { time: "6.45am to 7.30am", description: "Ajnabhakti" },
      { time: "10am to 12pm", description: "Natak Samayasaar Satsang 3" },
    ],
    dresscode: "White",
  },
];

const accommodationOptions: AccommodationOption[] = [
  {
    name: "Exploria Resorts",
    distance: "5 mi miles from venue",
  },
  {
    name: "Pocono Inn",
    distance: "8 mi miles from venue",
  },
  {
    name: "Value Inn",
    distance: "0.5 mi miles from venue",
    note: "(Booking available after Mar 1)",
  },
];

const sponsorshipItems: SponsorshipItem[] = [
  { name: "Shilanyas - Tilak to Pujya Gurudevshri", amount: 11000 },
  { name: "Tilak to Pujya Gurudevshri", amount: 5000 },
  { name: "Guru Arti", amount: 2500 },
  { name: "Arti Chamar", amount: 1000 },
  { name: "Shilanyas - Breakfast", amount: 3000 },
  { name: "Shilanyas - Lunch", amount: 4000 },
  { name: "Shilanyas - Dinner", amount: 3500 },
  { name: "Swamivatsalya - Breakfast", amount: 2000 },
  { name: "Swamivatsalya - Lunch", amount: 3000 },
  { name: "Swamivatsalya - Dinner", amount: 2500 },
  { name: "Dipak Sthapana", amount: 11000 },
  { name: "Kshetrapal", amount: 5000 },
  { name: "Navgrah Patta Pujan", amount: 5000 },
  { name: "Digpal Bakuda Pujan", amount: 5000 },
  { name: "Das Digpal Patta Pujan", amount: 11000 },
  { name: "Asht Mangal Pujan", amount: 11000 },
  { name: "Shilanyas - Arti", amount: 11000 },
  { name: "Shilanyas - Divo", amount: 11000 },
  { name: "Chamar - Arti", amount: 2500 },
  { name: "Chamar - Mangal Divo", amount: 2500 },
  { name: "Shila Sthapana", amount: 11000 },
  { name: "Yantra Sthapana", amount: 11000 },
  { name: "Nadi Sthapana", amount: 11000 },
];

const ShibirRegistration: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-rose-50 max-w-[480px]">
      <Header />
      <Schedule highlightItems={highlightItems} scheduleDays={scheduleDays} />
      <Registration />
      <Accommodations options={accommodationOptions} />
      <Sponsorship items={sponsorshipItems} />
      <Footer />
    </div>
  );
};

export default ShibirRegistration;
