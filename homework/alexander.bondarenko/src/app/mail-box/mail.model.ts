export interface Mail {
  subject?: string;
  from: string;
  to: string;
  cc?: string[];
  receivedAt: string | number;
  content: string;
  [propName: string]:any;
}
