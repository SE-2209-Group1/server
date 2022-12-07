import mongoose, { Schema } from "mongoose";

const informationSchema = new Schema({
	profileid: { type: Number, required: true, unique: true },
	badge: [
		{
			badgeName: String,
			badgeDetails: String,
		}],
	scores: [{ scoreName: String, scoreNumber: Number }],
	videoLink: { type: String, required: true, unique: true },
});

const Information = mongoose.model(`Information`, informationSchema);

export default Information;
