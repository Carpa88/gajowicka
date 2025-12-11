export interface ActivityType {
  type: "news" | "event";
  title: string;
  image?: string;
  place?: string;
  time?: string;
  source?: string;
  description: string;
}