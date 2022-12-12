import express from "express";
import School from "../models/school.model.js";
export const router = express.Router();

router.route(`/:profileid`).get((req, res) => {
  const profileid = req.params.profileid;
  School.find({ profileid }, (error, schoolData) => {
    error
      ? res
        .status(404)
        .json({ message: `School collection not found in DB` })
      : res.status(200).json(schoolData);
  });
});
