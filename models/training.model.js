import mongoose, { Schema } from "mongoose";

const trainingSchema = new Schema({
    cohort: { type: String, required: true },
    learningPath: { type: String, required: true },
    trainer: { type: String, required: true },
    finishDate: { type: String, required: true },
    moduleGrades: {
        module: { type: String },
        challenge: { type: String },
        grade: { type: String }
    }
});

const Profiles = mongoose.model(`Training`, trainingSchema);

export default trainingSchema;