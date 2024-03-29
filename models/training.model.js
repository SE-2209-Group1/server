import mongoose, { Schema } from "mongoose";

const trainingSchema = new Schema({
    profileid: { type: Number, required: true },
    cohort: { type: String, required: true },
    learningPath: { type: String, required: true },
    trainer: { type: String, required: true },
    finishDate: { type: String, required: true },
});

const Training = mongoose.model(`Training`, trainingSchema);

export default Training;