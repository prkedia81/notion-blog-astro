import { Schema, model, models, Document } from "mongoose";

const userSchema = new Schema({
  clerk_id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  subscriptionId: String,
  currentCreditLimit: {
    type: Number,
    required: true,
    default: 0,
  },
  currentCreditUsed: {
    type: Number,
    required: true,
    default: 0,
  },
  allCredits: [
    {
      date: { type: String, required: true },
      number: { type: Number, required: true },
      variant: { type: String, required: true },
      subscriptionId: { type: String, required: false },
    },
  ],
  active: Boolean,
});

interface Credit {
  date: string;
  number: number;
  variant: "subscription" | "topup";
  subscriptionId?: string;
}

export interface IUsers extends Document {
  clerk_id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  date: string;
  currentCreditLimit: number;
  currentCreditUsed: number;
  allCredits: Credit[];
  active?: boolean;
  subscriptionId?: string;
}

const User = models.User || model("User", userSchema);

export default User;
