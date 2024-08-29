import mongoose from "mongoose";

export interface -IUser {
  fullName: string;
  handle: string;
  email: string;
  password: string;
  profilePicture: {
    alt: string;
    url: string;
  };
  banner: {
    alt: string;
    url: string;
  };
  followers: any[];
  following: any[];
  birthDate: Date;
  createdAt?: string;
  updatedAt?: string;
}

export interface IRequestCreateUser {
  fullName: string;
  handle: string;
  email: string;
  password: string;
  profilePicture: {
    alt: string;
    url: string;
  };
  birthDate: Date;
}

export interface ILoginUser {
  email: string;
  password: string;
}

