import React from "react";
import { HighlightItem, ScheduleDay } from "./types";

interface ScheduleProps {
  highlightItems: HighlightItem[];
  scheduleDays: ScheduleDay[];
}

const Schedule: React.FC<ScheduleProps> = ({
  highlightItems,
  scheduleDays,
}) => {
  return (
    <div className="flex flex-col px-6 py-16 mt-8 w-full bg-white">
      <div className="self-end text-3xl font-bold leading-none text-rose-500">
        Highlights
      </div>
      {highlightItems.map((item, index) => (
        <div key={index} className="flex gap-10 font-medium text-center mt-8">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <img
              loading="lazy"
              src={item.imageSrc}
              className="object-contain mt-8 w-full rounded-xl shadow-lg aspect-[1.5]"
              alt={item.title}
            />
            <div className="self-start mt-4 text-2xl leading-none text-blue-400">
              {item.title}
            </div>
            <div className="mt-2 text-base text-gray-700">
              {item.description}
            </div>
          </div>
          {index < highlightItems.length - 1 && (
            <img
              loading="lazy"
              src={`http://b.io/ext_${4 + index}-`}
              className="object-contain shrink-0 self-end mt-20 w-12 aspect-[0.2]"
              alt="Decorative element"
            />
          )}
        </div>
      ))}
      <button className="gap-2.5 self-center px-6 py-3 mt-16 text-xl font-bold leading-tight text-center text-white bg-rose-500 rounded-full">
        Register Now
      </button>
      <div className="text-3xl font-bold leading-none text-center text-rose-500 mt-16">
        Schedule
      </div>
      {scheduleDays.map((day, index) => (
        <div
          key={index}
          className="flex overflow-hidden flex-col py-6 mt-8 w-full font-semibold bg-white shadow-sm max-w-[300px]"
        >
          <img
            loading="lazy"
            src={day.imageSrc}
            className="object-contain w-full aspect-[1.55] max-w-[275px]"
            alt={`Schedule for ${day.date}`}
          />
          <div className="flex z-10 flex-col items-start px-6 -mt-3">
            <div className="text-xl tracking-normal leading-relaxed text-rose-500">
              {day.date}
            </div>
            <div className="self-stretch mt-2 text-xs tracking-tight leading-5 text-gray-700">
              {day.events.map((event, eventIndex) => (
                <React.Fragment key={eventIndex}>
                  <span className="font-semibold">{event.time}</span> -{" "}
                  {event.description}
                  <br />
                </React.Fragment>
              ))}
            </div>
            <div className="mt-2 text-base tracking-tight text-blue-400">
              Dresscode - {day.dresscode}
            </div>
          </div>
        </div>
      ))}
      <button className="gap-2.5 self-stretch px-6 py-3 mt-16 text-xl font-bold leading-tight text-center text-white bg-rose-500 rounded-full">
        Register Now
      </button>
    </div>
  );
};

export default Schedule;
