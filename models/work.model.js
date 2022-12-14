import mongoose, { Schema } from "mongoose";
const workSchema = new Schema({
  profileid: { type: Number, required: true, unique: true },
  workType: { type: String, require: true },
  workEmployer: { type: String, require: true },
  workPosition: { type: String, require: true },
  workFrom: { type: Date, require: true },
  workTo: { type: Date, require: true },
  workWeight: { type: String, require: true },
  workPriority: { type: String, require: true },
  workDesc: { type: String, require: true },
});

const Work = mongoose.model(`Work`, workSchema);

export default Work;
