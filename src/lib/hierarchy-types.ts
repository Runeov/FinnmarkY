export interface HelpSection {
  id: string;
  title: string;
  children?: HelpSection[];
}