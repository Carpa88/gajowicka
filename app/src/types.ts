export interface ActivityType {
  type: "news" | "event";
  title: string;
  description: string;
  image?: string;
  place?: string;
  time?: string;
  source?: {name: string; url: string};
}