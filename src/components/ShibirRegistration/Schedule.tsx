import React from "react";

interface HighlightItem {
  title: string;
  description: string;
  imageSrc: string;
}

interface ScheduleEvent {
  time: string;
  description: string;
}

interface ScheduleDay {
  date: string;
  events: ScheduleEvent[];
  dresscode: string;
  imageSrc: string;
  decorationSrc?: string;
}

interface ScheduleProps {
  highlightItems: HighlightItem[];
  scheduleDays: ScheduleDay[];
}

const Schedule: React.FC<ScheduleProps> = ({ highlightItems, scheduleDays }) => {
  return (
    <div className="flex flex-col items-center bg-[#FFF0F0] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-[#F43F5E] text-5xl font-frank font-bold">Highlights</h1>
      </div>

      {/* Highlights Section */}
      <div className="w-full max-w-6xl mx-auto">
        {highlightItems.map((item, index) => (
          <div key={index} className="relative mb-32 flex items-center justify-center">
            {/* Flower Decoration - Left Side */}
            {index % 2 === 0 && (
              <div className="hidden md:block w-1/3 pr-12">
                <div className="relative" style={{ paddingBottom: "150%" }}>
                  <img
                    src="/images/highlights_flower.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                      transform: "rotate(-90deg) scale(2.5)",
                      transformOrigin: "center center",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className={`w-full md:w-2/3 ${index % 2 === 0 ? "md:pl-4" : "md:pr-4"}`}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={item.imageSrc} alt={item.title} className="w-full aspect-[16/9] object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="text-[#72B9EA] text-2xl sm:text-3xl font-frank">{item.title}</h3>
                <p className="text-gray-700 mt-2 text-base sm:text-lg font-poppins leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Flower Decoration - Right Side */}
            {index % 2 === 1 && (
              <div className="hidden md:block w-1/3 pl-12">
                <div className="relative" style={{ paddingBottom: "150%" }}>
                  <img
                    src="/images/highlights_flower.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                      transform: "rotate(-90deg) scale(2.5)",
                      transformOrigin: "center center",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Mobile Flower Decoration */}
            <div className="absolute md:hidden">
              <img
                src="/images/highlights_flower.png"
                alt=""
                className="h-64 w-auto object-contain"
                style={{
                  transformOrigin: "center center",
                  position: "absolute",
                  [index % 2 === 0 ? "left" : "right"]: "-4rem",
                  top: "50%",
                  transform: `translateY(-50%) rotate(-90deg) scale(1.2)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Register Button */}
      <button className="mt-8 px-12 py-4 bg-[#F43F5E] text-white rounded-full font-frank text-xl font-bold hover:bg-rose-600 transition-colors">
        Register Now
      </button>

      {/* Schedule Section */}
      <div className="mt-24 w-full">
        <h2 className="text-5xl font-frank font-bold text-[#F43F5E] text-center mb-12">Schedule</h2>

        {/* Schedule Cards */}
        <div className="flex flex-col items-center space-y-8 max-w-xl mx-auto">
          {scheduleDays.map((day, index) => (
            <div key={index} className="w-full bg-white rounded-xl shadow-lg p-6">
              <div className="relative mb-4">
                <img
                  src={day.imageSrc}
                  alt={`Schedule for ${day.date}`}
                  className="w-full aspect-[16/9] object-cover rounded-xl"
                />
                {day.decorationSrc && (
                  <img src={day.decorationSrc} alt="" className="absolute -right-4 bottom-0 h-24 object-contain" />
                )}
              </div>

              <h3 className="text-rose-500 text-2xl font-frank mb-4">{day.date}</h3>
              <div className="space-y-2">
                {day.events.map((event, eventIndex) => (
                  <p key={eventIndex} className="text-gray-700 font-poppins">
                    <span className="font-medium">{event.time}</span> - {event.description}
                  </p>
                ))}
                <p className="text-[#72B9EA] font-poppins mt-4">Dresscode - {day.dresscode}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Register Button */}
        <button className="mt-12 px-12 py-4 bg-[#F43F5E] text-white rounded-full font-frank text-xl font-bold hover:bg-rose-600 transition-colors mx-auto block">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Schedule;
