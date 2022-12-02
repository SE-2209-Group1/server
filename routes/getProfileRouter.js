import express from "express";
import Profiles from "../models/profile.model.js";
export const router = express.Router();

router.route(`/:profileid`).get((req, res) => {
  const profileid = req.params.profileid;
  Profiles.find({ profileid }, (error, prsnldata) => {
    error
      ? res.status(404).json({ message: `Profiles collection not found in DB` })
      : res.status(200).json(prsnldata);
  });
});
