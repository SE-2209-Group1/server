import express from "express";
import UniDegree from "../models/unidegree.model.js";
export const router = express.Router();

router.route(`/:profileid`).get((req, res) => {
  const profileid = req.params.profileid;
  UniDegree.find({ profileid }, (error, unidata) => {
    error
      ? res
          .status(404)
          .json({ message: `Unidegree collection not found in DB` })
      : res.status(200).json(unidata);
  });
});
