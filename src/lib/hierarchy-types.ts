export interface HelpSection {
  id: string;
  title: string;
  url?: string;
  children?: HelpSection[];
}
