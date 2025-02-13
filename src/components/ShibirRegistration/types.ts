export interface HighlightItem {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ScheduleDay {
  date: string;
  imageSrc: string;
  events: Array<{
    time: string;
    description: string;
  }>;
  dresscode: string;
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
