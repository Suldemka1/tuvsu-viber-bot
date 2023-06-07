export interface ITextMessage {
  text: string;
  timestamp: number;
  token: string;
  trackingData: {};
  keyboard: null;
  requiredArguments: ["text"];
  minApiVersion: undefined;
}

export interface IUserProfile {
  id: string;
  name: string;
  avatar: string;
  country: "RU" | "EN" | "KZ";
  language: "ru" | "en";
  apiVersion: 10;
}

export interface IViberBot {
  authToken: string;
  name: string;
  avatar: string;
}
