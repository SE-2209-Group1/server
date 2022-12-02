import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
  profileid: { type: Number, required: true, unique: true },
  name: { type: String, require: true },
  personalemail: { type: String, require: true },
  workemail: { type: String, require: true },
  githublink: { type: String, require: true },
  linkedinlink: { type: String, require: true },
  phoneno: { type: Number, require: true },
  gender: { type: String, require: true },
  nationality: { type: String, require: true },
  personality: { type: String, require: true },
  //photo: { type: Image, required: true },
});

const Profiles = mongoose.model(`Profile`, profileSchema);

export default Profiles;
