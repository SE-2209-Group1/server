import mongoose, { Schema } from "mongoose";
const uniDegreeSchema = new Schema({
  profileid: { type: Number, required: true, unique: true },
  uniname: { type: String, require: true },
  unisubject: { type: String, require: true },
  unilevel: { type: String, require: true },
  unigrade: { type: String, require: true },
  fromdate: { type: Date, require: true },
  todate: { type: Date, require: true },
  uniweight: { type: String, require: true },
  unipriority: { type: String, require: true },
  unidesc: { type: String, require: true },
});

const UniDegree = mongoose.model(`Unidegree`, uniDegreeSchema);

export default UniDegree;
