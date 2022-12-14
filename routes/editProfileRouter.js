import express from "express";
import { check, validationResult } from "express-validator";
import Profiles from "../models/profile.model.js";
export const router = express.Router();

router
    .route(`/:profileid`)
    .put(async (req, res) => {
        const profileid = req.params.profileid;
        if (!profileid) {
            res.status(404).send(`Profile could not be found`);
        } else {
            const updatedData = req.body;
            try {
                await Profiles.findOneAndUpdate({ profileid: profileid }, updatedData);
                res.send(`Profile updated!`);
            } catch (error) {
                console.log(error);
                res.status(404).send(`That profile cannot be found`)
            }
        }
    });