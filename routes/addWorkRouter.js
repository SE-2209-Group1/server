import express from "express";
import { check, validationResult } from "express-validator";
import Work from "../models/work.model.js";
export const router = express.Router();

router
  .route(`/`)
  .post(
    [
      check("profileid").exists().isNumeric(),
      check("workType").exists().trim().escape(),
      check("workEmployer").exists().trim().escape(),
      check("workPosition").exists().trim().escape(),
      check("workFrom").exists(),
      check("workWeight").exists().trim().escape(),
      check("workPriority").exists().trim().escape(),
      check("workDesc").exists().trim().escape(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(422).json({
          message: `There is a Error in Work Data`,
        });
      }
      const workData = new Work(req.body);
      try {
        const workInfo = await workData.save();
        res.status(201).json(workInfo);
      } catch {
        res.status(400).json({
          message: `Work Insertion Fails`,
        });
      }
    }
  );
