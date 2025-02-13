export interface HighlightItem {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ScheduleEvent {
  time: string;
  description: string;
}

export interface ScheduleDay {
  date: string;
  imageSrc: string;
  events: ScheduleEvent[];
  dresscode: string;
  flowerSrc?: string;
}

export interface ScheduleProps {
  highlightItems: HighlightItem[];
  scheduleDays: ScheduleDay[];
}

export interface AccommodationSlab {
  name: string;
  dateRange: string;
  fullPackagePrice: number;
  dailyPackagePrice: number;
}

export interface AccommodationOption {
  name: string;
  distance: string;
  note?: string;
}

export interface SponsorshipItem {
  name: string;
  amount: number;
}

export interface AccommodationsProps {
  slabs: AccommodationSlab[];
  options: AccommodationOption[];
}
