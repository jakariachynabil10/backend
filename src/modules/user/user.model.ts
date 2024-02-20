import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { TUser } from "./user.interface";
import confiq from "../../app/confiq";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, select: false, required: true },
    role: {
      type: String,
      enum: ["admin", "seller", "user"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(confiq.bcrypt_salt_rounds)
  );
  next();
});

// set '' after saving password
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<TUser>("user", userSchema);
