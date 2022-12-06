import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
	profileid: { type: Number, require: true, unique: true },
	badge: [badgeSchema],
	scores: [scoreSchema],
	videoLink: { type: String, require: true, unique: true }
});

const badgeSchema = new Schema({
	badge: [
		{ type: String, require: true, unique: true }, // Badge name
		{ type: String, require: true, unique: true }, // Badge details
	],
});

const scoreSchema = new Schema({
	scores: [
		{ type: String, require: true, unique: true }, // Score name
		{ type: Number, require: true, unique: true }, // Score result
	],
});

const Profiles = mongoose.model(`Profile`, profileSchema);

export default Profiles;