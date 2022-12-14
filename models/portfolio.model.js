import mongoose, { Schema } from "mongoose";
const portfolioSchema = new Schema({
  profileid: { type: Number, required: true, unique: true },
  portfolioTitle: { type: String, require: true },
  portfolioURL: { type: String, require: true },
  portfolioYear: { type: String, require: true },
  portfolioWeight: { type: String, require: true },
  portfolioPriority: { type: String, require: true },
  portfolioDesc: { type: String, require: true },
});

const Portfolio = mongoose.model(`Portfolio`, portfolioSchema);

export default Portfolio;
