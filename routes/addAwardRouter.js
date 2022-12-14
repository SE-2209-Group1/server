import express from "express";
import { check, validationResult } from "express-validator";
import Award from "../models/award.model.js";
export const router = express.Router();

router
  .route(`/`)
  .post(
    [
      check("profileid").exists().isNumeric(),
      check("awardType").exists().trim().escape(),
      check("awardIssuer").exists().trim().escape(),
      check("award").exists().trim().escape(),
      check("awardGrade").exists().trim().escape(),
      check("awardYear").exists().trim().escape(),
      check("awardWeight").exists().trim().escape(),
      check("awardPriority").exists().trim().escape(),
      check("awardDesc").exists().trim().escape(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(422).json({
          message: `There is a Error in Award Data`,
        });
      }
      const awardData = new Award(req.body);
      try {
        const awardInfo = await awardData.save();
        res.status(201).json(awardInfo);
      } catch {
        res.status(400).json({
          message: `Award Insertion Fails`,
        });
      }
    }
  );
