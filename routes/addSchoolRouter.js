import express from "express";
import { check, validationResult } from "express-validator";
import School from "../models/school.model.js";
export const router = express.Router();

router
  .route(`/`)
  .post(
    [
      check("profileid").exists().isNumeric(),
      check("schoolName").exists().trim().escape(),
      check("schoolExamType").exists().trim().escape(),
      check("schoolSubject").exists().trim().escape(),
      check("schoolGrade").exists().trim().escape(),
      check("schoolYear").exists(),
      check("schoolWeight").exists().trim().escape(),
      check("schoolPriority").exists().trim().escape(),
      check("schoolDesc").exists().trim().escape(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(422).json({
          message: `There is a Error in School Data`,
        });
      }
      const schoolData = new School(req.body);
      try {
        const schoolInfo = await schoolData.save();
        res.status(201).json(schoolInfo);
      } catch {
        res.status(400).json({
          message: `School Insertion Fails`,
        });
      }
    }
  );
