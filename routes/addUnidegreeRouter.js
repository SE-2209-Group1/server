import express from "express";
import { check, validationResult } from "express-validator";
import UniDegree from "../models/unidegree.model.js";
export const router = express.Router();

router
  .route(`/`)
  .post(
    [
      check("profileid").exists().isNumeric(),
      check("uniname").exists().trim().escape(),
      check("unisubject").exists().trim().escape(),
      check("unilevel").exists().trim().escape(),
      check("unigrade").exists().trim().escape(),
      check("fromdate").exists(),
      check("todate").exists(),
      check("uniweight").exists().trim().escape(),
      check("unipriority").exists().trim().escape(),
      check("unidesc").exists().trim().escape(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(422).json({
          message: `There is a Error in UniDegree Data`,
        });
      }
      const uniDegreeData = new UniDegree(req.body);
      try {
        const degrees = await uniDegreeData.save();
        res.status(201).json(degrees);
      } catch {
        res.status(400).json({
          message: `UniDegree Insertion Fails`,
        });
      }
    }
  );
