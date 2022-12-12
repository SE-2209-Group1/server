import express from "express";
import Training from "../models/training.model.js";
export const router = express.Router();

router.route(`/:profileid`).get((req, res) => {
    const profileid = req.params.profileid;
    Training.find({ profileid }, (error, training) => {
        error
            ? res.status(404).json({ message: `Training information could not be loaded` })
            : res.status(200).json(training);
    });
});

//Just to add mock data to database, not editable material
router.route(`/`).post(async (req, res) => {
    const training = new Training(req.body);
    try {
        const trainingInfo = await training.save();
        res.status(201).json(trainingInfo);
    } catch {
        res.status(400).json({
            message: `Failed to load`,
        });
    };
});