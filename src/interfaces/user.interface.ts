export interface IZaloUser {
  id: string;
  name: string;
  avatar: string;
  phoneNumber?: string;
  idByOA?: string;
  isSensitive?: boolean;
  followedOA?: boolean;
}