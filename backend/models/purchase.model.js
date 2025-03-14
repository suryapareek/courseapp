import mongoose from "mongoose";

const pruchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  courseId: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
  purchasedAt: { type: Date, default: Date.now },
});

export const Purchase = mongoose.model("Purchase", pruchaseSchema);
