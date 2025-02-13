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
    imageSrc: "/images/friday.png",
    flowerSrc: "/images/friday_butterfly.png",
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
    imageSrc: "/images/saturday.png",
    flowerSrc: "/images/saturday_flowers.png",
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
    imageSrc: "/images/sunday.png",
    flowerSrc: "/images/sunday_flowers.png",
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
