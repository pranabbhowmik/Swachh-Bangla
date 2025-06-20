import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      minlength: 6,
      required: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = function () {
  return jwt.sign({ userId: this._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });
};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ userId: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

const User = mongoose.model("User", userSchema);

export default User;
