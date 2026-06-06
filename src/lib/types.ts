export interface Project {
  slug: string;
  name: string;
  track: "traditional" | "modern";
  isInterior?: boolean;
  type: string;
  area: string;
  status: "completed" | "ongoing" | "design";
  year?: string;
  cover: string;
  gallery: string[];
  videos?: string[];
  mapUrl?: string;
  highlights?: string[];
  body: string;
  published: boolean;
}
