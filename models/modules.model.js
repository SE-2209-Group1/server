import mongoose, { Schema } from "mongoose";

const modulesSchema = new Schema({
    profileid: { type: Number, required: true },
    modules: { type: String, required: true },
    challenge: { type: String, required: true },
    grade: { type: String, required: true },
});

const Module = mongoose.model(`Module`, modulesSchema);

export default Module;