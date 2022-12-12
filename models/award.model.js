import mongoose, { Schema } from "mongoose";
const awardSchema = new Schema({
  profileid: { type: Number, required: true, unique: true },
  awardType: { type: String, require: true },
  awardIssuer: { type: String, require: true },
  award: { type: String, require: true },
  awardGrade: { type: String, require: true },
  awardYear: { type: String, require: true },
  awardWeight: { type: String, require: true },
  awardPriority: { type: String, require: true },
  awardDesc: { type: String, require: true },
});

const Award = mongoose.model(`Award`, awardSchema);

export default Award;
