import express from "express";
import { check, validationResult } from "express-validator";
import Profiles from "../models/profile.model.js";
export const router = express.Router();

router
    .route(`/`)
    .put((req, res) => {
        const id = req.body.profileid;
        Profiles.findById(id, (error, profile) => {
            if (!profile) {
                res.status(404).send(`Profile could not be found`);
            } else {
                const updatedData = new Profiles(req.body);
                const updatedProfile = Object.assign(profile, updatedData);
                updatedProfile.save()
                    .then(profile => {
                        res.status(201).json({ profile: `Profile updated successfully` });
                    })
                    .catch(error => res.status(400).send({ error: 'Updating profile failed' }));
            }
        })
    });