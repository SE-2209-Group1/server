import mongoose, { Schema } from "mongoose";
const schoolSchema = new Schema({
  profileid: { type: Number, required: true, unique: true },
  schoolName: { type: String, require: true },
  schoolExamType: { type: String, require: true },
  schoolSubject: { type: String, require: true },
  schoolGrade: { type: String, require: true },
  schoolYear: { type: Date, require: true },
  schoolWeight: { type: String, require: true },
  schoolPriority: { type: String, require: true },
  schoolDesc: { type: String, require: true },
});

const School = mongoose.model(`School`, schoolSchema);

export default School;
