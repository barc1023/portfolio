export interface ProjectData {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  img: string;
  tags: string[];
  client: { es: string; en: string };
  year: string;
  role: { es: string; en: string };
  link: string;
}
