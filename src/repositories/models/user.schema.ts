import { model, Schema } from "mongoose";

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  fullName: String,
  handle: String,
  email: String,
  password: String,
  profilePicture: {
    alt: String,
    url: String,
  },
  banner: {
    alt: String,
    url: String,
  },
  followers: [Schema.Types.ObjectId],
  following: [Schema.Types.ObjectId],
  birthDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = model("User", userSchema);
