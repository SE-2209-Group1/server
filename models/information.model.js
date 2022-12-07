import mongoose, { Schema } from "mongoose";

const informationSchema = new Schema({
  profileid: { type: Number, required: true, unique: true },
  badge: [badgeSchema],
  scores: [scoreSchema],
  videoLink: { type: String, required: true, unique: true },
});

const badgeSchema = new Schema({
  badge: [
    { type: String, required: true, unique: true }, // Badge name
    { type: String, required: true, unique: true }, // Badge details
  ],
});

const scoreSchema = new Schema({
  scores: [
    { type: String, required: true, unique: true }, // Score name
    { type: Number, required: true, unique: true }, // Score result
  ],
});

const Information = mongoose.model(`Information`, informationSchema);

export default Information;
