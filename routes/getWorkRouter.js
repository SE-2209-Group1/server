import express from "express";
import Work from "../models/work.model.js";
export const router = express.Router();

router.route(`/:profileid`).get((req, res) => {
  const profileid = req.params.profileid;
  Work.find({ profileid }, (error, workData) => {
    error
      ? res
        .status(404)
        .json({ message: `Work collection not found in DB` })
      : res.status(200).json(workData);
  });
});
