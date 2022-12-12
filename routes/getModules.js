import express from "express";
import Module from "../models/modules.model.js";
export const router = express.Router();

router.route(`/`).get((req, res) => {
    const profileid = req.params.profileid;
    Module.find({ profileid }, (error, modules) => {
        error
            ? res.status(404).json({ message: `Module information could not be loaded` })
            : res.status(200).json(modules);
    });
});

//Just to add mock data to database, not editable material
router.route(`/`).post(async (req, res) => {
    const modules = new Module(req.body);
    try {
        const modulesInfo = await modules.save();
        res.status(201).json(modulesInfo);
    } catch {
        res.status(400).json({
            message: `Failed to load`,
        });
    };
});