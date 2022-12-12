import express from "express";
import Award from "../models/award.model.js";
export const router = express.Router();

router.route(`/:profileid`).get((req, res) => {
  const profileid = req.params.profileid;
  Award.find({ profileid }, (error, awardData) => {
    error
      ? res
        .status(404)
        .json({ message: `Award collection not found in DB` })
      : res.status(200).json(awardData);
  });
});
