import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Plz Provide username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Plz Provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Plz Provide password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", useSchema);

export default User;
