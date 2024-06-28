export type StylesResponse = {
  background: string;
  colors: StylesResponseColors;
  event_title: string;
  logo: string;
};
export type StylesResponseColors = {
  action: string;
  active: string;
  bg: string;
  error: string;
  primary: string;
  regNo: string;
  regYes: string;
  secondary: string;
  secondary_2: string;
  secondary_3: string;
  success: string;
  warning: string;
};

export type Participant = {
  id: number;
  name: string;
  organization: string;
  phone: string;
  photo?: any;
  position: string;
  registered: boolean;
  secondName: string;
  table: string;
  thirdName: string;
};

export type ParticipantResponse = {
  letters: string[];
  participant: Participant[];
  table: string[];
};

export type SettingsData = {
  confirm: boolean;
  photo: boolean;
  table: boolean;
};
